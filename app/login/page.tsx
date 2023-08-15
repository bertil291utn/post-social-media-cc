import Button from '@components/common/Button/Button.component';
import { TERTIARY } from '@components/common/Button/button.helper';
import Card from '@components/common/Card.component';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const LoginAction = () => {
    console.log('login action')
  }

  return (
    <div className={`h-screen flex items-center justify-center w-1/2 mx-auto`}>
      <Card >
        <div className='w-full mx-auto'>
          <Button
            buttonType={TERTIARY}
            className={`relative text-center`}
            onClick={LoginAction}
          >
            <FcGoogle className={`absolute text-lg`} />
            <span className='block'>
              Sign in with Google
            </span>
          </Button>
        </div>
      </Card>
    </div>);
}

export default Login;