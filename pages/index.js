import StoragesPage from '../components/StoragesPage';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';
import AddStorageForm from '../components/AddStorage';
import LoginSection from '../components/LoginSection';
import Container from '../components/Container';
import { useSession } from 'next-auth/react';

export default function Home({
  storages,
  items,
  onGetStorages,
  warningItems,
  onGetItems,
}) {
  const { data: session } = useSession();
  return (
    <>
      <Header storages={storages} />
      <LoginSection />
      <Container>
        {session && (
          <>
            <WarningPage warningItems={warningItems} />
            <StoragesPage
              storages={storages}
              onGetStorages={onGetStorages}
              items={items}
              onGetItems={onGetItems}
            />
            <AddStorageForm onGetStorages={onGetStorages} storages={storages} />
          </>
        )}
      </Container>
    </>
  );
}
