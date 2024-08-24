import * as S from './NavBar.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLogo } from '../common/Logo';

export const NavBar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    return sessionStorage.getItem('email') !== null;
  }

  useEffect(() => {
    setIsLogin(checkLogin());
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user_id');
    setIsLogin(false);
  };

  return (
    <S.NavBarContainer>
      <NavLogo />
      <S.NavMenu className="navbar_menu">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/building" style={{ color: '#424242' }}>
              건물별 안내
            </Link>
          </li>
          <li>
            <Link to="/notice">공지사항</Link>
          </li>
        </ul>
      </S.NavMenu>

      <S.MemberMenu className="navbar_member">
        <div>
          {isLogin ? (
            <S.LogoutButton type="button" onClick={handleLogout}>
              로그아웃
            </S.LogoutButton>
          ) : (
            <ul>
              <li>
                <div className="signup">
                  <S.SignUpButton
                    type="button"
                    onClick={() => navigate('/signup')}
                  >
                    회원가입
                  </S.SignUpButton>
                </div>
              </li>
              <li>
                <div className="login">
                  <S.LoginButton
                    type="button"
                    onClick={() => navigate('/login')}
                  >
                    로그인
                  </S.LoginButton>
                </div>
              </li>
            </ul>
          )}
        </div>
      </S.MemberMenu>
    </S.NavBarContainer>
  );
};
