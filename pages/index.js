import StoragesPage from '../components/StoragesPage';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';
import AddStorageForm from '../components/AddStorage';
import Container from '../components/Container';

export default function Home({
  storages,
  items,
  onStorage,
  warningItems,
  onItems,
}) {
  return (
    <>
      <Header storages={storages} />
      <Container>
        <WarningPage warningItems={warningItems} />
        <StoragesPage
          storages={storages}
          onStorage={onStorage}
          items={items}
          onItems={onItems}
        />
        <AddStorageForm onStorage={onStorage} storages={storages} />
      </Container>
    </>
  );
}
