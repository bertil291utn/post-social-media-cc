import Link from 'next/link';

const About = () => {
  return (<div>
    <p>
      this is about page
    </p>
    <Link href={'/'}>return to home page</Link>
  </div>);
}

export default About;