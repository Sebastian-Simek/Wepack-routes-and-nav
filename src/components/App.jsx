import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Users from './Users/Users.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element ={<Dashboard />}/>
          <Route path="users" element={<Users />}/>
        </Route>
      </Routes>
    </Router>
  );
}
