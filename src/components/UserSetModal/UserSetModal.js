import { UserSetsCard } from './UserSetCard/UserSetCard';
import { UserSetsForm } from './UserSetForm/UserSetForm';
import s from './UserSetModal.module.css';

export const UserSetsModal = ({ toggleModal }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Profile settings</h2>
      <UserSetsCard />
      <UserSetsForm toggleModal={toggleModal} />
    </div>
  );
};