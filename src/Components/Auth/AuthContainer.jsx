import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import AuthBackground from "../../Assets/images/Backgrounds/auth-bg.png";

const AuthContainer = ({ children }) => {
  return <StyledBanner>{children}</StyledBanner>;
};

const StyledBanner = styled(Container)`
  padding: 120px 0;
  height: 100%;
  background-image: url(${AuthBackground});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
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
    max-width: calc(100% - 260px);
  }
`;

export default AuthContainer;
