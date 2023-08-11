import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <p>
        this is home page
      </p>
      <Link href={'/login'}> go to login page</Link>
    </div>
  );
}

export default HomePage;