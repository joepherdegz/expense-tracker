import { useRef, useState } from 'react';
import { UserSetsFormList } from './UserSetFormList';
import { Icon } from '../../../Icon/Icon';
import { choseLabel, options } from '../../../../utils/chooseLabel';
import s from './UserSetFormSelect.module.css';

export const UserSetsFormSelect = ({
  register,
  setValue,
  setCurrency,
  currency,
}) => {
  const box = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    setIsOpen(!isOpen);
  };

  const handleChose = element => {
    setCurrency(element.value);
    setValue('currency', element.value);
  };

  return (
    <div ref={box} onClick={handleToggle} className={s.container}>
      <p className={s.text}>{choseLabel(currency)}</p>
      <div className={s.iconWrapper}>
        <Icon
          className={s.icon}
          name={`${isOpen ? 'chevron-up' : 'chevron-down'}`}
          size={16}
        />
      </div>
      {isOpen && (
        <UserSetsFormList
          options={options}
          handleChose={handleChose}
          boxRef={box}
          handleToggle={handleToggle}
        />
      )}
      <input className={s.input} {...register('currency')} value={currency} />
    </div>
  );
};