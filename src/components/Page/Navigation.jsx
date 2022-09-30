import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="sales">Sales</NavLink>
        <NavLink to="users">Users</NavLink>
      </nav>
    </div>
  );
}
