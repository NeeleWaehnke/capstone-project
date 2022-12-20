import Storages from '../components/Storages';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <Link href="/ItemList">
        <Storages />
      </Link>
    </>
  );
}
