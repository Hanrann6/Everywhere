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
  margin: 5px 0 6px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`;
