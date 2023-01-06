import React from "react";
import Layout from "../../Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import HomeCarousel from "../../Components/Home/HomeCarousel";
import Categories from "../../Components/Home/Categories";
import TireSearch from "../../Components/Home/TireSearch";
import Offers from "../../Components/Home/Offers";
import { Admd, Adlg } from "../../Components/Ads/Ads";
import CustomContainer from "../../Components/Layout/CustomContainer";

const Home = () => {
  return (
    <Layout>
      <CustomContainer>
        <Admd />
      </CustomContainer>
      <StyledCarouselContainer>
        <StyledRow>
          <StyledColumn lg={8} md={12}>
            <HomeCarousel />
          </StyledColumn>
          <StyledColumn lg={4} md={12}>
            <TireSearch />
          </StyledColumn>
        </StyledRow>
      </StyledCarouselContainer>
      <Categories />
      <CustomContainer>
        <Adlg />
      </CustomContainer>
      <Offers />
      <CustomContainer>
        <Adlg />
      </CustomContainer>
    </Layout>
  );
};

const StyledColumn = styled(Col)`
  height: 100%;
  @media only screen and (max-width: 991.98px) {
    padding: 0;
  }
  @media only screen and (max-width: 575.98px) {
    padding: 12px;
  }
`;

const StyledRow = styled(Row)`
  @media only screen and (max-width: 991.98px) {
    gap: 35px;
  }
`;

const StyledCarouselContainer = styled(Container)`
  //margin: 0 144px;
  width: 100%;
  position: relative;
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

export default Home;
