import Link from 'next/link';

export default function WarningPage() {
  return (
    <section>
      <Link href="/warning">
        <h3>!</h3>
      </Link>
    </section>
  );
}
