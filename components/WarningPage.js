import Link from 'next/link';

export default function WarningPage({ warningItems }) {
  console.log(warningItems);

  return (
    <section>
      <Link href="/warning">
        <h3>!</h3>
      </Link>
      <p> {warningItems.length} items</p>
    </section>
  );
}
