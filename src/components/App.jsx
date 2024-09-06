import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import Layout from './Layout/Layout';
import { refreshUser } from '../redux/Auth/operations';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { selectIsRefreshing, selectIsLoggedIn } from '../redux/Auth/authSlice';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Login = lazy(() => import('../pages/LogInPage/LogInPage'));
const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const MainTransaction = lazy(() => import('../pages/MainTransactionPage/MainTransactionPage'));
const TransactionsHistory = lazy(() => import('../pages/TransactionHistoryPage/TransactionHistoryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute
              isLoggedIn={isLoggedIn}
              component={<Home />}
              redirectTo="/transactions/expenses"
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              isLoggedIn={isLoggedIn}
              component={<Login />}
              redirectTo="/transactions/expenses"
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
            isLoggedIn={isLoggedIn}
            component={<Register />} redirectTo="/login" />
          }
        />
        <Route
          path="/transactions/:transactionsType"
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={<MainTransaction />}
              redirectTo="/login"
            />
          }
        />
        <Route
          path="/transactions/history/:transactionsType"
          element={
            <PrivateRoute
              isLoggedIn={isLoggedIn}
              component={<TransactionsHistory />}
              redirectTo="/login"
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

// export default App;