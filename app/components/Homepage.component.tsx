import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <p>
        this is home page
      </p>
      <Link href={'/about'}> go to about page</Link>
    </div>
  );
}

export default HomePage;