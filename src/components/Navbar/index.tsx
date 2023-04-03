import logo from '../../assets/images/logo.svg';
import { NavbarContainer, NavLogo, NavLink } from './styles';

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavLogo src={logo} alt="Logo" />
      <NavLink to="/">Home</NavLink>
    </NavbarContainer>
  );
}
