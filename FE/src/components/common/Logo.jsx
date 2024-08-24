import { Link } from 'react-router-dom';
import Login from '../../assets/logo/logo_login.svg';
import Nav from '../../assets/logo/logo_nav.svg';
import Main from '../../assets/logo/logo_mainNav.svg';
import Footer from '../../assets/logo/logo_footer.svg';

//홈화면 1
export const Logo = () => {
  return (
    <Link to="/">
      <img src={Main} alt="Everywhere" width="173" height="30" />
    </Link>
  );
};

//홈화면 2
export const NavLogo = () => {
  return (
    <Link to="/">
      <img src={Nav} alt="Everywhere" width="124" height="21" padding-left="20px" />
    </Link>
  );
};

//로그인 화면
export const LoginLogo = () => {
  return (
    <Link to="/">
      <img src={Login} alt="Everywhere" width="215" height="38" />
    </Link>
  );
};

//푸터
export const FooterLogo = () => {
  return (
    <Link to="/">
      <img src={Footer} alt="Everywhere" width="155" height="27" />
    </Link>
  );
};
