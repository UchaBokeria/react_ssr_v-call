import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
      <Preloader>
        <PreloaderDots>
          <Dots></Dots>
          <Dots></Dots>
          <Dots></Dots>
          <Dots></Dots>
          <Dots></Dots>
        </PreloaderDots>
      </Preloader>
  );
};

const moveit = keyframes`
0% {
    transform: translateY(0px);
  }
  35% {
    transform: translateY(0px);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.8;
  }
  70% {
    transform: translateY(3px);
    opacity: 0.8;
  }
  85% {
    transform: translateY(-3px);
  }
`;

const Preloader = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  z-index: 99999;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PreloaderDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Dots = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  height: 20px;
  width: 20px;
  opacity: 0.3;
  border-radius: 50%;
  animation: ${moveit} 1.8s infinite;
  &:nth-child(2) {
    animation-delay: 0.15s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.45s;
  }
  &:nth-child(5) {
    animation-delay: 0.6s;
  }
`;

export default Loader;