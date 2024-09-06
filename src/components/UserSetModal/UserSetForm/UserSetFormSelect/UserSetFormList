import { useEffect } from 'react';
import s from './UserSetsFormList.module.css';

export const UserSetsFormList = ({
  options,
  handleChose,
  boxRef,
  handleToggle,
}) => {
  useEffect(() => {
    const handleCloseList = e => {
      if (e.target.closest('div') !== boxRef.current) {
        handleToggle();
      }
    };
    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, [boxRef, handleToggle]);

  return (
    <ul className={s.menu}>
      {options.map(element => (
        <li
          className={s.listItem}
          key={element.value}
          onClick={() => handleChose(element)}
        >
          <p className={s.menuItem}>{element.label}</p>
        </li>
      ))}
    </ul>
  );
};