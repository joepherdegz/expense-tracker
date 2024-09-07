import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/Auth/operations';
import s from './Logout.module.css';

export const LogOut = ({ toggleLogOutModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    console.log("Attempting to log out...");
    dispatch(logOut())
      .unwrap()
      .then(() => {
        console.log("Logged out, navigating to /");
        navigate('/');
        toggleLogOutModal();
        toast.warning('In order to use the application you must log in');
      })
      .catch(() => {
        toast.error('Something wrong');
      })
      .finally(() => {
        setIsLoading(false);
        console.log("Loading state reset");
      });
  };

  return (
    <>
      <p className={s.title}>Are you sure you want to log out?</p>
      <div className={s.container}>
        <button
          className={s.button}
          onClick={handleLogout}
          disabled={isLoading}
        >
          Log out
        </button>
        <button className={s.buttonCansel} onClick={toggleLogOutModal}>
          Cancel
        </button>
      </div>
    </>
  );
};