import styled from 'react-emotion';
export const Menu = styled.nav`
  height: 36px;
  
  @media (min-width: 320px) {
    height: 40px;
  }
  
  @media (min-width: 600px) {
    height: 54px;
  }
  
  @media (min-width: 1024px) {
    height: 120px;
  }
  
  @media print {
    height: 20px;
  }
`;