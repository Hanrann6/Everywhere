import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  padding: 12px;
`;

export const Logo = styled.div`
  padding-left: 10px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }
`;

export const LogoTextE = styled.span`
  color: ${({ theme }) => theme.ewhaGreen};
  font-weight: bold;
  font-size: 1.7em;
`;

export const LogoTextEverywhere = styled.span`
  color: ${({ theme }) => theme.black};
  font-weight: bold;
  font-size: 1.3em;
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
    padding-left: 0;
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
    width: 80px;
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
`;
