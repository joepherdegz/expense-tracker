import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { selectCurrency, selectName } from '../../../redux/User/userSlice';
import { changeUserInfo } from '../../../redux/User/operations';
import { UserSetsFormSelect } from './UserSetFormSelect/UserSetFormSelect';
import { useIsLoading } from '../../../hooks';
import { userSchema } from '../../../schemas/userSchema';

import s from './UserSetForm.module.css';

export const UserSetsForm = ({ toggleModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currency, setCurrency] = useState(useSelector(selectCurrency));

  const name = useSelector(selectName);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(userSchema) });
  const customDispatch = useIsLoading();

  const onSubmit = data => {
    customDispatch(changeUserInfo, data, setIsLoading);
    toggleModal();
  };

  const totalInputClass = classNames({
    [`${s.input}`]: true,
    [`${s.inputErr}`]: errors.name?.message,
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.formWrapper}>
          <UserSetsFormSelect
            register={register}
            setValue={setValue}
            currency={currency}
            setCurrency={setCurrency}
          />
          <input
            className={totalInputClass}
            {...register('name', { required: true, minLength: 2 })}
            defaultValue={name}
          />
        </div>
        <p className={s.inputMs}>{errors.name?.message}</p>
        <button className={s.btnSubmit} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save'}
        </button>
      </form>
    </>
  );
};