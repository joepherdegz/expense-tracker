import { styled } from 'styled-components';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import LoginForm from '../components/LoginForm/LoginForm';
// import s from './Login.module.css';

const Container = styled.div`
@media only screen and (min-width: 1440px) {
      padding: 0 121px 100px;
  }
`
const Login = () => {
  return (
    <Container>
        <RegisterForm signIn />  
    </Container>
  ) 
};

export default Login;