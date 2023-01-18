import StoragesPage from '../components/StoragesPage';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';
import AddStorageForm from '../components/AddStorage';
import Container from '../components/Container';

export default function Home({
  storages,
  items,
  onGetStorages,
  warningItems,
  onGetItems,
}) {
  return (
    <>
      <Header storages={storages} />
      <Container>
        <WarningPage warningItems={warningItems} />
        <StoragesPage
          storages={storages}
          onGetStorages={onGetStorages}
          items={items}
          onGetItems={onGetItems}
        />
        <AddStorageForm onGetStorages={onGetStorages} storages={storages} />
      </Container>
    </>
  );
}
