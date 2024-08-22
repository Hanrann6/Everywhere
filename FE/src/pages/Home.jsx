import * as S from '../styles/home';
import { CategoryContainer, NavBar, Result, Footer } from '../components';

const Home = () => {
  const searchResults = [
    {
      // 검색 결과 테스트 데이터
      // TODO: Request
      id: 1,
      post: {
        postId: 1,
        postName: '공대도서관',
        imagepath: '????',
        content: '공대생들을 위한 도서관',
        location: '아산공학관 2층',
        time: '08:00~22:00',
      },
    },
    {
      id: 5,
      post: {
        postId: 5,
        postName: '이화상점',
        imagepath: '????',
        content: '공대에 위치한 편의점',
        location: '아산공학관 1층',
        time: '24시간(심야 시간 무인 운영)',
      },
    },
  ];

  return (
    <S.Root>
      <NavBar />
      <CategoryContainer />
      <Result results={searchResults} />
      <Footer />
    </S.Root>
  );
};

export default Home;
