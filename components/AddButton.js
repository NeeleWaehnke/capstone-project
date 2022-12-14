import AddIcon from '../public/assets/add-icon.svg';
import CheckIcon from '../public/assets/check.svg';

export default function AddButton({ setAddActive }) {
  return (
    <button
      onClick={() => {
        setAddActive(true);
        console.log(true);
      }}
    >
      <AddIcon />
    </button>
  );
}
