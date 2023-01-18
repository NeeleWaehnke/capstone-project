import dbConnect from '../../../db/dbConnect';
import Storage from '../../../db/models/Storage';

export default async function handler(req, res) {
  await dbConnect();
  const id = req.query.id;

  if (req.method === 'GET') {
    try {
      const storage = await Storage.findById(id);
      res.status(200).json(storage);
    } catch (error) {
      res.status(404).json({ message: 'Not found', details: error.message });
    }
  } else if (req.method === 'DELETE') {
    const storage = await Storage.findByIdAndDelete(id);
    if (storage) {
      return res.status(200).json({ message: 'Question deleted' });
    } else {
      return res.status(404).json({ message: 'not found' });
    }
  } else if (req.method === 'PUT') {
    const updatedStorage = await Storage.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
      },
      { returnDocument: 'after' }
    );
    if (updatedStorage) {
      return res.status(200).json(updatedStorage);
    } else {
      return res.status(404).json({ message: 'not found' });
    }
  }
}
