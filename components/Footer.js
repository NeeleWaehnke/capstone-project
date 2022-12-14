import AddButton from './AddButton';
import AddForm from './AddForm';
import { useState } from 'react';

export default function Footer({ onAddItem }) {
  const [addActive, setAddActive] = useState(false);
  return (
    <footer>
      {addActive === true ? (
        <AddForm onAddItem={onAddItem} setAddActive={setAddActive} />
      ) : (
        <AddButton setAddActive={setAddActive} />
      )}
    </footer>
  );
}
