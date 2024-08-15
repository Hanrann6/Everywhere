import * as S from './Category.style';
import theme from '../../../styles/theme';

export function Category({ name, color }) {
  const onClick = () => {
    // TODO: 버튼 클릭시 함수 구현
  };

  return (
    <S.CategoryUlLi>
      <S.Category onClick={onClick} color={color || theme.gray}>
        {name}
      </S.Category>
    </S.CategoryUlLi>
  );
}
