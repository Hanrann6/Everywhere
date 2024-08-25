import * as S from '../styles/home';
import { CategoryContainer, NavBar, Result, Footer } from '../components';


const Home = () => {
  return (
    <S.Root>
      <NavBar />
      <CategoryContainer /> 
    </S.Root>
  );
};

export default Home;
