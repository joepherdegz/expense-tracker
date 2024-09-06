 import { NavLink } from 'react-router-dom';
import { BgImageWrapper } from '../../components/BgImageWrapper/BgImageWrapper';
import users1x from '../../assets/images/images_users_1x@.png';
import users2x from '../../assets/images/images_users_2x@.png';
import css from './Homepage.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <BgImageWrapper />
      <div className={css.containerHome}>
        <div className={css.containerText}>
          <p className={css.text}>Expense log</p>
          <h1 className={css.title}>
            Manage Your <span className={css.span}>Finances</span> Masterfully!
          </h1>
          <p className={css.textDesc}>
            ExpenseTracker effortlessly empowers you to take control of your
            finances! With intuitive features, it simplifies the process of
            tracking and managing expenses, allowing for a stress-free mastery
            over your financial world.
          </p>
          <div className={css.containerButton}>
            <NavLink to="/register" className={css.buttonUp}>
              Sign Up
            </NavLink>
            <NavLink to="/login" className={css.buttonIn}>
              Sign In
            </NavLink>
          </div>
        </div>
        <div className={css.containerImg}>
          <picture>
            <source srcSet={`${users1x}, ${users2x} 2x`} type="image/png" />
            <img className={css.img} src={users1x} alt="Users photos" />
          </picture>
          <div className={css.containerUsers}>
            <h2 className={css.titleUsers}>1000 users +</h2>
            <p className={css.tx}>
              Trusted by users for reliable expense tracking!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;