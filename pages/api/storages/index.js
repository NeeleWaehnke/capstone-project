import dbConnect from '../../../db/dbConnect';
import Storage from '../../../db/models/Storage';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await dbConnect();
  const session = await getSession({ req });
  const email = session?.user.email;
  if (!email) {
    res.status(401).json({ message: 'not authorized. please log in.' });
  }

  if (req.method === 'GET') {
    const storages = await Storage.find({ user: email });
    const storagesArray = storages.map((storage) => {
      return {
        id: storage._id,
        name: storage.name,
        user: storage.user,
      };
    });
    res.status(200).json(storagesArray);
  }
  if (req.method === 'POST') {
    const data = { ...req.body, user: email };
    try {
      const newStorage = await Storage.create(data);
      res.status(201).json(newStorage);
    } catch (error) {
      res.status(400).json({ message: 'Try again' });
    }
  }
}
