import Card from '@components/common/Card.component';
import Link from 'next/link';

const Login = () => {
  return (
    <div className={`h-screen flex items-center justify-center`}>
      <Card >
        <div className='w-11/12 mx-auto'>
          <button type='button' className='relative w-full p-3 border-2 border-gray-300 rounded-md'>
            <img alt="..." className="absolute w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />
            <span className='block'>
              Sign in with Google
            </span>
          </button>
        </div>
      </Card>
    </div>);
}

export default Login;