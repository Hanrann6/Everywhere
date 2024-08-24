import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export const MenuBar = styled.div`
  width: calc(100% - 60px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledGoback = styled.div``;

export const StyledMenu = styled.div`
  margin-right: 8px;
  margin-bottom: 5px;
  font-size: 14px;
  background-color: #979797;
  color: white;
  display: flex;
  border-radius: 20px;
  padding: 10px 18px;
  white-space: nowrap;
  cursor: pointer;
  &:hover,
  &.active {
    background-color: #25691f;
  }
`;

export const Body = styled.div`
  padding: 30px 280px;
  height: 470px;
`;
export const BuildingName = styled.div`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const FlourBox = styled.div`
  padding: 11px 0;
  border-bottom: 1px solid #979797;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

export const Flour = styled.div`
  width: fit-content;
  border-radius: 20px;
  padding: 9px 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  background-color: black;
  color: white;
  margin-left: 10px;
`;

export const Facility = styled.div`
  position: absolute;
  left: 112px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const FacilityItem = styled.div`
  margin: 5px 25px 5px 0;
`;
