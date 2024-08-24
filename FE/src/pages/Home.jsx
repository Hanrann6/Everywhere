import * as S from '../styles/home';
import { CategoryContainer, NavBar, Result, Footer } from '../components';


const Home = () => {

  return (
    <S.Root>
      <NavBar />
      <CategoryContainer /> 
     
      <Footer />
    </S.Root>
  );
};

export default Home;
