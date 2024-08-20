import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 12px 10px 0 10px;
  padding: 15px;
  background-color: #25691f 0.12;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Text = styled.div`
  margin: 5px;
  padding: 3px;
  display: flex;
  flex-direction: row;
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
`;
