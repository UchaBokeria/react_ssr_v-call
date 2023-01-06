import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChevronLeft from "../../Assets/images/Icons/chevron-left.svg";
import ChevronRight from "../../Assets/images/Icons/chevron-right.svg";

const Offers = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 471,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "CHEVRON-ის ძრავის ზეთები",
      image:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-special-offer-banner-promotion-background-with-gradient-abstract-shape-png-image_5204095.jpg",
      url: "/",
    },
    {
      id: 2,
      title: "CHEVRON-ის ძრავის ზეთები",
      image:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-special-offer-banner-promotion-background-with-gradient-abstract-shape-png-image_5204095.jpg",
      url: "/",
    },
    {
      id: 3,
      title: "CHEVRON-ის ძრავის ზეთები",
      image:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-special-offer-banner-promotion-background-with-gradient-abstract-shape-png-image_5204095.jpg",
      url: "/",
    },
    {
      id: 4,
      title: "CHEVRON-ის ძრავის ზეთები",
      image:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-special-offer-banner-promotion-background-with-gradient-abstract-shape-png-image_5204095.jpg",
      url: "/",
    },
    {
      id: 5,
      title: "CHEVRON-ის ძრავის ზეთები",
      image:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-special-offer-banner-promotion-background-with-gradient-abstract-shape-png-image_5204095.jpg",
      url: "/",
    },
  ];

  return (
    <StyledOffersContainer>
      <StyledTitleWrapper>
        <StyledTitle>სპეციალური შეთავაზებები</StyledTitle>
        <StyledSliderButtons>
          <StyledSliderButton onClick={() => sliderRef?.current?.slickPrev()}>
            <img src={ChevronLeft} alt="chevron-left" />
          </StyledSliderButton>
          <StyledSliderButton onClick={() => sliderRef?.current?.slickNext()}>
            <img src={ChevronRight} alt="chevron-right" />
          </StyledSliderButton>
        </StyledSliderButtons>
      </StyledTitleWrapper>

      <StyledSlider {...settings} ref={sliderRef}>
        {slides.map((slide) => {
          return (
            <StyledSlide key={slide.id}>
              <Offer
                key={slide.id}
                id={slide.id}
                title={slide.title}
                image={slide.image}
                url={slide.url}
              />
            </StyledSlide>
          );
        })}
      </StyledSlider>
    </StyledOffersContainer>
  );
};

const Offer = (props) => {
  return (
    <StyledOffer>
      <StyledOfferImage>
        <img src={props.image} alt={props.title} />
      </StyledOfferImage>
      <StyledOfferTitle>{props.title}</StyledOfferTitle>
      <StyledOfferUrl to={props.url}>
        გაიგე მეტი
        <span>
          <img src={ChevronRight} alt="chevron-right" />
        </span>
      </StyledOfferUrl>
    </StyledOffer>
  );
};

const StyledSlide = styled.div`
  width: 100%;
  padding: 15px;
`;
const StyledOffer = styled.div`
  max-width: 375px;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;
const StyledOfferTitle = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.blue};
  margin-top: 25px;
  margin-bottom: 30px;
`;
const StyledOfferUrl = styled(Link)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    transition: all 0.3s ease-in-out;
  }

  img {
    width: 7px;
  }
`;

const StyledOfferImage = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const StyledOffersContainer = styled(Container)`
  width: 100%;
  position: relative;
  margin-top: 75px;
  margin-bottom: 75px;
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
const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;
const StyledSliderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
const StyledSliderButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  background-color: rgba(51, 100, 163, 0.1);

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }

  &:focus {
    transition: all 0.3s ease-in-out;
    background-color: rgba(51, 100, 163, 0.1);
    outline: 2px solid transparent !important;

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: ${({ theme }) => theme.colors.white};
      outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  img {
    width: 7px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const StyledSlider = styled(Slider)`
  //position: relative;
  min-height: 400px;

  .slick-track {
    height: 100%;
  }

  .slick-slide {
    //display: flex;

    //justify-content: center;
    //align-items: center;
  }
`;

export default Offers;
