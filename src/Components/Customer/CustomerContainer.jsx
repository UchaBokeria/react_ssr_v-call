import styled from "styled-components";
import { Container } from "react-bootstrap";

const CustomerContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled(Container)`
  padding: 0;
  width: calc(100% - 30px);
  height: 100%;
  border: 1px solid rgba(51, 100, 163, 0.3);
  border-radius: 30px;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 70px 0;
  margin-bottom: 80px;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    //max-width: 1320px;
    max-width: calc(100% - 330px);
  }
`;

export default CustomerContainer;
