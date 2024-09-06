import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import { Icon } from '../../Icon/Icon';


const Logo = (resetStateActiveButton) => {
   <NavLink
    onClick={resetStateActiveButton}
    to={'/'}
    className={css.logoWrapper}
  >
    <div className={css.logoIconWrapper}>
      <Icon className={css.logo} />
    </div>
    <p className={css.logoText}>ExpenseTracker</p>
  </NavLink>
}
export default Logo;