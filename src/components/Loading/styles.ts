import styled from 'styled-components';
import { gray } from 'src/styles/colors';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    border-radius: 100%;
    width: 70px;
    height: 70px;
  }

  p {
    color: ${gray[200]};
  }
`;
