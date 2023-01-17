import StoragesPage from '../components/StoragesPage';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';
import AddStorageForm from '../components/AddStorage';
import styled from 'styled-components';

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
      <StyledDiv>
        <WarningPage warningItems={warningItems} />
        <StoragesPage
          storages={storages}
          onGetStorages={onGetStorages}
          items={items}
          onGetItems={onGetItems}
        />
        <AddStorageForm onGetStorages={onGetStorages} storages={storages} />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  @media (min-height: 700px) {
    margin-top: 130px;
  }
  @media (min-height: 1000px) {
    margin-top: 170px;
  }
  margin-top: 100px;
  margin-bottom: 100px;
`;
