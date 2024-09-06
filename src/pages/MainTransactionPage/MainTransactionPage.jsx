import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCurrentUser } from '../../redux/User/operations';
import { TransactionForm } from '../../components/TransactionForm/TransactionForm';
import { TransactionsChart } from '../../components/TransactionChart/TransactionChart';
import { TransactionsTotal } from '../../components/TransactionTotal/TransactionTotal';
import { addTransaction, getTransactions } from '../../redux/Transaction/operations';
import s from './MainTransactionPage.module.css';

const MainTransactions = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();

  useEffect(() => {
    dispatch(getTransactions({ type: transactionsType }));
  }, [dispatch, transactionsType]);

  const capitalizedType =
    transactionsType[0].toUpperCase() + transactionsType.slice(1);

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        toast.success('Transaction added successfully!');
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>{capitalizedType.slice(0, -1)} Log</h2>
          <p className={s.descr}>
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </p>
        </div>
        <div className={s.total}>
          <TransactionsTotal />
        </div>
        <div className={s.form}>
          <TransactionForm
            transactionsType={transactionsType}
            onSubmitForm={onSubmitForm}
          />
        </div>
        <div className={s.chart}>
          <TransactionsChart transactionsType={capitalizedType} />
        </div>
      </div>
    </div>
  );
};

export default MainTransactions;