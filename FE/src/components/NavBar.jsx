import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 12px;
`;

const Logo = styled.div`
  padding-left: 10px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
  }
`;

const LogoTextE = styled.span`
  color: ${({ theme }) => theme.ewhaGreen};
  font-weight: bold;
  font-size: 1.7em;
`;

const LogoTextEverywhere = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  font-size: 1.3em;
`;

const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 0;
  }

  li {
    padding: 10px 30px;
    font-weight: bold;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor};

      &:hover {
        color: ${({ theme }) => theme.ewhaGreen};
        font-weight: 900;
      }
    }
  }
`;

const MemberMenu = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 0;
  }

  li {
    padding: 10px 5px;
  }

  button {
    width: 80px;
    border-width: thin;
    border-radius: 3px;
    padding: 5px 15px;
    cursor: pointer;
  }
`;

const SignUpButton = styled.button`
  background-color: #ffffff;
  color: ${({ theme }) => theme.ewhaGreen};
  border-color: ${({ theme }) => theme.ewhaGreen};
`;

const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.ewhaGreen};
  color: #ffffff;
  border-color: ${({ theme }) => theme.ewhaGreen};
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo className="navbar_logo">
        <a href="#Home" target="_self">
          <LogoTextE>E</LogoTextE>
          <LogoTextEverywhere>veryWhere</LogoTextEverywhere>
        </a>
      </Logo>

      <NavMenu className="navbar_menu">
        <ul>
          <li>
            <a href="./Home.js">홈</a>
          </li>
          <li>
            <a href="#">건물별 안내</a>
          </li>
          <li>
            <a href="#">공지사항</a>
          </li>
        </ul>
      </NavMenu>

      <MemberMenu className="navbar_member">
        <ul>
          <li>
            <div className="signup">
              <SignUpButton type="button">회원가입</SignUpButton>
            </div>
          </li>
          <li>
            <div className="login">
              <LoginButton type="button">로그인</LoginButton>
            </div>
          </li>
        </ul>
      </MemberMenu>
    </NavBarContainer>
  );
};

export default NavBar;
