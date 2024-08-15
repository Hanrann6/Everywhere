import * as S from './NavBar.style';

export const NavBar = () => {
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
            {/* TODO: a 태그를 링크로 바꾸기 */}
            <a href="./Home.js">홈</a>
          </li>
          <li>
            <a href="#">건물별 안내</a>
          </li>
          <li>
            <a href="#">공지사항</a>
          </li>
        </ul>
      </S.NavMenu>

      <S.MemberMenu className="navbar_member">
        <ul>
          <li>
            <div className="signup">
              <S.SignUpButton type="button">회원가입</S.SignUpButton>
            </div>
          </li>
          <li>
            <div className="login">
              <S.LoginButton type="button">로그인</S.LoginButton>
            </div>
          </li>
        </ul>
      </S.MemberMenu>
    </S.NavBarContainer>
  );
};
