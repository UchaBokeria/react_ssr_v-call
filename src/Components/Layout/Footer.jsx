import React from "react";
import styled from "styled-components";
import {Container, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../Assets/images/white-logo.svg";

// Socials
import Facebook from '../../Assets/images/Icons/Socials/facebook.svg'
import WhatsApp from '../../Assets/images/Icons/Socials/whatsapp.svg'
import Instagram from '../../Assets/images/Icons/Socials/instagram.svg'


const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterContainer>
                <Row>
                    <StyledCol lg={3} md={6} sm={12}>
                        <StyledFooterTitle>კატეგორიები</StyledFooterTitle>
                        <StyledFooterUl>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">
                                    მსუბუქი ავტომობილების საბურავები
                                </StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">
                                    მსუბუქი ავტომობილის ძრავის ზეთი
                                </StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">აკუმულატორები</StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">ავტოქიმია</StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">ფილტრები</StyledFooterLink>
                            </StyledFooterLi>
                        </StyledFooterUl>
                    </StyledCol>
                    <StyledCol lg={2} md={6} sm={12}>
                        <StyledFooterTitle>ონლაინ სერვისები</StyledFooterTitle>
                        <StyledFooterUl>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">ჩემი პროფილი</StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">
                                    ჩემი ავტომობილის ისტორია
                                </StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">ონლაინ რეზერვაცია</StyledFooterLink>
                            </StyledFooterLi>
                        </StyledFooterUl>
                    </StyledCol>
                    <StyledCol lg={2} md={6} sm={12}>
                        <StyledFooterTitle>ინფორმაცია</StyledFooterTitle>
                        <StyledFooterUl>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">ჩვენს შესახებ</StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">წესები და პირობები</StyledFooterLink>
                            </StyledFooterLi>
                        </StyledFooterUl>
                    </StyledCol>
                    <StyledCol lg={2} md={6} sm={12}>
                        <StyledFooterTitle>კონტაქტი</StyledFooterTitle>
                        <StyledFooterUl>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">info@vakomotors.ge</StyledFooterLink>
                            </StyledFooterLi>
                            <StyledFooterLi>
                                <StyledFooterLink to="/">
                                    ქოლ ცენტრი (+995 32) 244 44 44
                                </StyledFooterLink>
                            </StyledFooterLi>
                        </StyledFooterUl>
                        <StyledFooterSocials>
                            <StyledFooterSocialsItem>
                                <a href="/" target="_blank">
                                    <img src={Facebook} alt="Facebook"/>
                                </a>
                            </StyledFooterSocialsItem>
                            <StyledFooterSocialsItem>
                                <a href="/" target="_blank">
                                    <img src={WhatsApp} alt="WhatsApp"/>
                                </a>
                            </StyledFooterSocialsItem>
                            <StyledFooterSocialsItem>
                                <a href="/" target="_blank">
                                    <img src={Instagram} alt="Instagram"/>
                                </a>
                            </StyledFooterSocialsItem>
                        </StyledFooterSocials>
                    </StyledCol>
                    <StyledCol lg={3} md={6} sm={12}>
                        <StyledFooterTitle>ოფიციალური პარტნიორები</StyledFooterTitle>
                    </StyledCol>
                </Row>
            </StyledFooterContainer>
            <StyledCopyright>
                <StyledCopyrightContainer>
                    <StyledLogo to="/">
                        <img src={Logo} alt="Vako Motors"/>
                    </StyledLogo>
                    <span>Copyright © 2022 Vako Motors. All Rights Reserved.</span>
                </StyledCopyrightContainer>
            </StyledCopyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.darkGray};
`;

const StyledFooterContainer = styled(Container)`
  padding: 60px 12px;
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

const StyledCol = styled(Col)`
  @media only screen and (min-width: 768px) {
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
  @media only screen and (max-width: 768px) {
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
`;

const StyledFooterTitle = styled.h5`
  color: ${({theme}) => theme.colors.white};
  font-size: 12px;
  font-family: ${({theme}) => theme.fontFamily.font2};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`;

const StyledFooterUl = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 35px;
`;
const StyledFooterLi = styled.li``;

const StyledFooterSocials = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 35px;
`
const StyledFooterSocialsItem = styled.li`
  width: 32px;
  height: 32px;
  transition: all 0.3s ease-in-out;
  &:hover {
    img {
    fill: ${({theme}) => theme.colors.orange};
    transition: all 0.3s ease-in-out;
    }
  }
  img {
    width: 100%;
  }
`


const StyledFooterLink = styled(Link)`
  color: ${({theme}) => theme.colors.gray};
  font-size: 12px;
  font-family: ${({theme}) => theme.fontFamily.font2};
  font-weight: ${({theme}) => theme.fontWeight.light};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.orange};
    transition: all 0.3s ease-in-out;
  }
`;

const StyledCopyright = styled.div`
  background-color: ${({theme}) => theme.colors.darkerGray};
  padding: 28px 0;
  border-top: 4px solid ${({theme}) => theme.colors.orange};
`;

const StyledCopyrightContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 28px;
  }

  span {
    color: ${({theme}) => theme.colors.white};
    font-size: 12px;
    font-family: ${({theme}) => theme.fontFamily.font2};
    text-transform: uppercase;
    @media only screen and (max-width: 388.98px) {
      font-size: 10px;
      text-align: center;
      word-wrap: break-word;
      line-height: 1.6;
    }
  }
`;

const StyledLogo = styled(Link)`
  height: 18px;
  @media only screen and (max-width: 388.98px) {
    height: 16px;
  }
  img {
    height: 100%;
  }
`;

export default Footer;
