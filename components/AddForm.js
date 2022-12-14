import CheckIcon from '../public/assets/check.svg';

export default function AddForm() {
  return (
    <section>
      <form>
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
