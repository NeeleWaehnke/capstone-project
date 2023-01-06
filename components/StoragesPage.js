import { nanoid } from 'nanoid';
import Link from 'next/link';

export default function Storages({ storages, onStorage, items }) {
  function handleSubmitAdd(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newStorage = {
      name: form.storage.value,
      id: nanoid(),
    };
    onStorage([newStorage, ...storages]);

    event.target.reset();
  }

  function getNumberOfItems(place, items) {
    const filteredItems = items.filter((item) => item.storage === place);
    return filteredItems.length;
  }

  return (
    <>
      <form onSubmit={handleSubmitAdd}>
        <label htmlFor="storage">Add a new storage option: </label>
        <input type="text" id="storage" name="storage" required />

        <button>Add</button>
      </form>

      {storages.map((storage) => {
        return (
          <section key={storage.id}>
            <Link href={`/${storage.name}`}>
              <h3>{storage.name}</h3>
            </Link>
            <p> {getNumberOfItems(storage.name, items)} items</p>
          </section>
        );
      })}
    </>
  );
}
