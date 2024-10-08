import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TransactionsList } from '../../components/TransactionList/TransactionList';
import { TransactionsSearchTools } from '../../components/TransactionSearchTool/TransactionSearchTool';
import { Modal } from '../../components/Modal/Modal';
import { TransactionForm } from '../../components/TransactionForm/TransactionForm';
import { TransactionsTotal } from '../../components/TransactionTotal/TransactionTotal';
import { selectTotalTransExpenses, selectTotalTransIncomes} from '../../redux/Transaction/transactionSlice';
import { addTransaction, getTransactions } from '../../redux/Transaction/operations';
import { resetFilter, selectDate } from '../../redux/Filter/filterSlice';
import { useModal } from '../../hooks/useModal';
import { fetchCurrentUser } from '../../redux/User/operations';
import s from './TransactionHistoryPage.module.css';

const TransactionsHistory = () => {
  const { transactionsType } = useParams();
  const totalExpenses = useSelector(selectTotalTransExpenses);
  const totalIncomes = useSelector(selectTotalTransIncomes);

  const onSubmitForm = transaction => {
    dispatch(addTransaction(transaction))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        dispatch(getTransactions({ type: transactionsType }));
        toggleIsAddModal();
        toast.success('Transaction added successfully!');
        dispatch(resetFilter());
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };

  const dispatch = useDispatch();
  const filterDate = useSelector(selectDate);

  let text = 'All Expense';
  let description =
    'View and manage every transaction seamlessly! Your entire financial landscape, all in one place.';
  if (transactionsType === 'incomes') {
    text = 'All incomes';
    description =
      'Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap.';
  }

  useEffect(() => {
    if (filterDate) {
      dispatch(getTransactions({ type: transactionsType, date: filterDate }));
    } else {
      dispatch(getTransactions({ type: transactionsType }));
    }
  }, [filterDate, dispatch, transactionsType]);

  const [isAddModal, toggleIsAddModal] = useModal();

  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.historyTitle}>{text}</h2>
        <p className={s.historyText}>{description}</p>
      </div>
      <div className={s.historyAmount}>
        <TransactionsTotal
          totalAllExpenses={totalExpenses}
          totalAllIncomes={totalIncomes}
        />
      </div>
      <TransactionsSearchTools
        handleOpenModal={toggleIsAddModal}
        type={transactionsType}
      />
      <TransactionsList />
      {isAddModal && (
        <Modal toggleModal={toggleIsAddModal}>
          <TransactionForm
            onSubmitForm={onSubmitForm}
            transactionsType={transactionsType}
            history={transactionsType}
          />
        </Modal>
      )}
    </div>
  );
};

export default TransactionsHistory;