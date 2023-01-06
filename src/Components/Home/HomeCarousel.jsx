import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components'

const HomeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // fade: true,
        adaptiveHeight: true,
        arrows: false,
    }

    const slides = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit amet',
        },
    ]

    return (
        <StyledCarouselWrapper>
            <StyledSlider {...settings}>
                {slides.map(slide => {
                    return (
                        <StyledSlide key={slide.id}>
                            <a href={"/" + slide.id} target="_blank" rel="noreferrer">

                                {/*<img src="https://vakomotors.ge/image/catalog/slider4.jpg" alt="s"/>*/}
                            </a>
                        </StyledSlide>
                    )
                })}
            </StyledSlider>
        </StyledCarouselWrapper>
    );
};

const StyledCarouselWrapper = styled.div`
  position: relative;
  max-height: 425px;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 1199.98px) {
   max-height: 465px;
  }
`
const StyledSlider = styled(Slider)`
  height: 425px;
  @media only screen and (max-width: 1199.98px) {
    height: 465px;
  }
  .slick-list {
    border-radius: 30px;
  }
  .slick-slide {
    height: 425px;
    @media only screen and (max-width: 1199.98px) {
      height: 465px;
    }
    img {
      height: 100%;
    }
  }

  .slick-dots {
    background-color: ${({theme}) => theme.colors.white};
    width: unset;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    border-radius: 10px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;

    li {
      display: block;
      margin: 0;
      width: 10px;
      height: 10px;

      &.slick-active {
        button {
          background-color: ${({theme}) => theme.colors.blue};
        }
      }

      button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colors.gray};

        &:before {
          display: none;
        }
      }
    }
  }
`
const StyledSlide = styled.div`
  //height: 100%;
  height: 425px;
  width: 100%;
  background-image: url('https://vakomotors.ge/image/catalog/slider4.jpg');
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 1199.98px) {
    height: 465px;
  }
  img {
    //width: 100%;
    height: 100%;
  }
`


export default HomeCarousel;