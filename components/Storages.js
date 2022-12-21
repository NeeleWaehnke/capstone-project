import { nanoid } from 'nanoid';
import Link from 'next/link';

export default function Storages({ storages, setStorages }) {
  function handleSubmitAdd(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newStorage = {
      name: form.storage.value,
      id: nanoid(),
    };
    setStorages([{ name, ...newStorage }, ...storages]);

    event.target.reset();
  }
  console.log(storages);

  return (
    <>
      <form onSubmit={handleSubmitAdd}>
        <label htmlFor="storage">Add a new storage option: </label>
        <input type="text" id="storage" name="storage" required />

        <button>Add</button>
      </form>

      {storages.map((storage) => {
        return (
          <Link href={`/${storage.name}`}>
            <section key={storage.id}>
              <h3>{storage.name}</h3>
            </section>
          </Link>
        );
      })}
    </>
  );
}
