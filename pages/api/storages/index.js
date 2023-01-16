import dbConnect from '../../../db/dbConnect';
import Storage from '../../../db/models/Storage';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const storages = await Storage.find();
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
    const data = req.body;
    try {
      const newStorage = await Storage.create(data);
      res.status(201).json(newStorage);
    } catch (error) {
      res.status(400).json({ message: 'Try again' });
    }
  }
}
