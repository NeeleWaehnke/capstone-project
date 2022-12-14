import AddButton from './AddButton';

export default function Footer({ setAddActive }) {
  return (
    <footer>
      <AddButton setAddActive={setAddActive} />
    </footer>
  );
}
