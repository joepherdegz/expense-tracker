import { styled } from 'styled-components';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
// import s from './Register.module.css';

const Container = styled.div`
@media only screen and (min-width: 1440px) {
      padding: 0 121px 100px;
  }
`

const Register = () => {
    return (
    <Container>
      <RegisterForm signUp />
    </Container>
  );
};

export default Register;