import dbConnect from '../../../db/dbConnect';
import Item from '../../../db/models/Item';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });
  const email = session?.user.email;
  if (!email) {
    return res.status(401).json({ message: 'not authorized. please log in.' });
  }

  if (req.method === 'GET') {
    const items = await Item.find({ user: email });
    const itemsArray = items.map((item) => {
      return {
        id: item._id,
        name: item.name,
        date: item.date,
        quantity: item.quantity,
        storage: item.storage,
        warningActive: item.warningActive,
        datetype: item.datetype,
        user: item.user,
      };
    });
    res.status(200).json(itemsArray);
  }
  if (req.method === 'POST') {
    const data = { ...req.body, user: email };
    try {
      const newItem = await Item.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: 'Try again' });
    }
  }
  if (req.method === 'DELETE') {
    const storageToDelete = req.body;
    const result = await Item.deleteMany({ storage: storageToDelete });
    if (result) {
      res.status(200).json({ message: 'storage deleted' });
    } else {
      res.status(404).json({ message: 'not found' });
    }
  }
  if (req.method === 'PUT') {
    const array = req.body.split(',');
    const [oldStorage, newStorage] = array;

    const updatedStorage = await Item.updateMany(
      { storage: oldStorage },
      {
        storage: newStorage,
      }
    );
    if (updatedStorage) {
      res.status(200).json({ message: 'storage edited' });
    } else {
      res.status(404).json({ message: 'not found' });
    }
  }
}
