import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link
        href={{
          pathname: '/auth/login',
        }}
      >
        Route to Login page
      </Link>
    </main>
  );
}
