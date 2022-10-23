import styled from '@emotion/styled';

export const StyledBackground = styled.div`
  position: fixed;
  top: 0; 
  bottom: 0; 
  right: 0; 
  left: 0;
  z-index: 1000;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const StyledDefaultWrapper = styled.div`
  padding: 0 30px;
  background-color: white;
  border-radius: 8px;
  width: 65%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 0 10px #000;
`;

export const StyledQuit = styled.button`
  position: absolute;
  top: -15px; 
  right: -15px; 
  border-radius: 100px;
  width: 30px;
  height: 30px;
  background-color: black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;