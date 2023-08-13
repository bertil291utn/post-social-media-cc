import Button from '@components/common/Button/Button.component';
import { TERTIARY } from '@components/common/Button/button.helper';
import Card from '@components/common/Card.component';

const Login = () => {
  return (
    <div className={`h-screen flex items-center justify-center w-1/2 mx-auto`}>
      <Card >
        <div className='w-full mx-auto'>
          <Button
            type={TERTIARY}
          >
            <img alt="..." className="absolute w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />
            <span className='block'>
              Sign in with Google
            </span>
          </Button>
        </div>
      </Card>
    </div>);
}

export default Login;