import * as S from './NavBar.style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

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
    sessionStorage.removeItem('email');
    setIsLogin(false);
  };

  return (
    <S.NavBarContainer>
      <S.Logo className="navbar_logo">
        <a href="#Home" target="_self">
          <S.LogoTextE>E</S.LogoTextE>
          <S.LogoTextEverywhere>veryWhere</S.LogoTextEverywhere>
        </a>
      </S.Logo>

      <S.NavMenu className="navbar_menu">
        <ul>
          <li>
            <Link to="./Home.js">홈</Link>
          </li>
          <li>
            <Link to="#" style={{ color: '#424242' }}>
              건물별 안내
            </Link>
          </li>
          <li>
            <Link to="#">공지사항</Link>
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
