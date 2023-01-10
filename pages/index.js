import StoragesPage from '../components/StoragesPage';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';

export default function Home({
  storages,
  items,
  onStorage,
  warningItems,
  onItems,
}) {
  return (
    <>
      <Header />
      <StoragesPage
        storages={storages}
        onStorage={onStorage}
        items={items}
        onItems={onItems}
      />
      <WarningPage warningItems={warningItems} />
    </>
  );
}
