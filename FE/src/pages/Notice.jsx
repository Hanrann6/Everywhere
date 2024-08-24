import * as S from '../styles/notice';
import { useNavigate } from 'react-router';
import { NavBar } from '../components';
import { GoBack } from '../components/common/GoBack';
import { Footer } from '../components/common/Footer';
import { FiVolume2 } from 'react-icons/fi';

function Notice() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <NavBar />

      <S.Header>
        <S.Button>
          <GoBack />
        </S.Button>

        <S.Title>공지사항</S.Title>
      </S.Header>

      <S.List>
        <S.Notice>
          <FiVolume2 size={20} style={{ marginRight: '10px' }}></FiVolume2>
          <S.Text onClick={() => navigate('/termofuse')}>이용약관</S.Text>
        </S.Notice>
        <S.Notice>
          <FiVolume2 size={20} style={{ marginRight: '10px' }}></FiVolume2>
          <S.Text onClick={() => navigate('/privacypolicy')}>
            개인정보처리방침
          </S.Text>
        </S.Notice>
        <S.Notice>
          <FiVolume2 size={20} style={{ marginRight: '10px' }}></FiVolume2>
          <S.Text
            onClick={() =>
              window.open('https://www.ewha.ac.kr/ewha/life/place.do')
            }
          >
            공간 사용 안내
          </S.Text>
        </S.Notice>
        <S.Notice>
          <S.Text
            onClick={() =>
              window.open('https://lib.ewha.ac.kr/bbs/content/1_37285')
            }
          >
            [중앙도서관] 도서관 1층 라운지, 노트북실 이용중지 (8/1~9/14)
          </S.Text>
        </S.Notice>
      </S.List>

      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  );
}

export default Notice;
