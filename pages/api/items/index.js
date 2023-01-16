import dbConnect from '../../../db/dbConnect';
import Item from '../../../db/models/Item';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const items = await Item.find();
    // const itemsArray = items.map((item) => {
    //   return {
    //     id: item._id,
    //     name: item.name,
    //     date: item.date,
    //     quantity: item.quantity,
    //     storage: item.storage,
    //     warningActive: item.warningActive,
    //   };
    // });
    res.status(200).json(items);
  }
  if (req.method === 'POST') {
    const data = req.body;
    try {
      const newItem = await Item.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: 'Try again' });
    }
  }
}
