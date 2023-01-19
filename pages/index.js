import StoragesPage from '../components/StoragesPage';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';
import AddStorageForm from '../components/AddStorage';
import LoginSection from '../components/LoginSection';
import styled from 'styled-components';
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
      <StyledDiv>
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
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  @media (min-height: 700px) {
    margin-top: 150px;
  }
  @media (min-height: 1000px) {
    margin-top: 170px;
  }
  margin-top: 140px;
  margin-bottom: 100px;
`;
