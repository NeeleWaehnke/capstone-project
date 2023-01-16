import dbConnect from '../../../db/dbConnect';
import Item from '../../../db/models/Item';

export default async function handler(req, res) {
  await dbConnect();
  const id = req.query.id;

  if (req.method === 'GET') {
    try {
      const item = await Item.findById(id);
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ message: 'Not found', details: error.message });
    }
  } else if (req.method === 'DELETE') {
    const item = await Item.findByIdAndDelete(id);
    if (item) {
      return res.status(200).json({ message: 'Item deleted' });
    } else {
      return res.status(404).json({ message: 'not found' });
    }
  } else if (req.method === 'PUT') {
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        date: req.body.date,
        quantity: req.body.quantity,
        storage: req.body.storage,
      },
      { returnDocument: 'after' }
    );
    if (updatedItem) {
      return res.status(200).json(updatedItem);
    } else {
      return res.status(404).json({ message: 'not found' });
    }
  }
}
