import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.div`
  top: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  margin-top: 0px;
  margin-right: 30px;
  z-index: 10;
`;

export const NavLogo = styled.div`
  
  margin-left: 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }
`;


const StyledLink = styled(Link)`
  color: #424242;

  &:hover {
    color: ${({ theme }) => theme.ewhaGreen};
    font-weight: 900;
  }
`;

export const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 40px;
  }

  li {
    padding: 10px 50px;
    font-weight: bold;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.black};

      &:hover {
        color: ${({ theme }) => theme.ewhaGreen};
        font-weight: 900;
      }
    }
  }
`;

export const MemberMenu = styled.div`
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
    width: 90px;
    border-width: thin;
    border-radius: 3px;
    padding: 5px 15px;
    cursor: pointer;
  }
`;

export const SignUpButton = styled.button`
  background-color: #ffffff;
  color: ${({ theme }) => theme.ewhaGreen};
  border-color: ${({ theme }) => theme.ewhaGreen};
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.ewhaGreen};
  color: #ffffff;
  border-color: ${({ theme }) => theme.ewhaGreen};
  width: 90px;
  margin-right: 30px;
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.ewhaGreen};
  color: #ffffff;
  border-color: ${({ theme }) => theme.ewhaGreen};
  width: 90px;
  margin-right: 30px;
`;
