import CheckIcon from '../public/assets/check.svg';

export default function AddForm({ onAddItem, setAddActive }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const data = {
      name: form.name.value,
      date: form.date.value,
      quantity: form.quantity.value,
    };
    onAddItem(data);
    event.target.reset();
    setAddActive(false);
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" placeholder="name" required />
        <label htmlFor="date"></label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="quantity"></label>
        <input type="number" id="quantity" name="quantity" />
        <button type="submit">
          <CheckIcon />
        </button>
      </form>
    </section>
  );
}
