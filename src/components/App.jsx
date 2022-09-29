import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Users from './Users/Users.jsx';
import Sales from './Sales/Sales.jsx';
import Deposits from './Sales/Deposits.jsx';
import Invoices from './Sales/Invoices.jsx';
import Customers from './Sales/Customers.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element ={<Dashboard />}/>
          <Route path="users" element={<Users />}/>
          <Route path="sales" element={<Sales />}>
            <Route index element ={<Deposits />} />
            <Route path="invoices" element={<Invoices />}/>
            <Route path="customers" element={<Customers />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
