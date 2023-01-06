import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Card from "./Components/Card";
import PlusIcon from "../../../Assets/images/Icons/plus.svg";
import CardForm from "./Components/CardForm";

const Cards = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const CustomerCards = [
    {
      id: 1,
      cardDigits: "3456",
      cardholder: "მარია მარიაშვილი",
      cardType: "visa",
    },
    {
      id: 2,
      cardDigits: "1234",
      cardholder: "ნუგზარ ნუგზარიაშვილი",
      cardType: "mastercard",
    },
    {
      id: 3,
      cardDigits: "5652",
      cardholder: "ელპიტე ელპიტიაშვილი",
      cardType: "visa",
    },
    {
      id: 4,
      cardDigits: "5326",
      cardholder: "ჯემალ ჯემალიაშვილი",
      cardType: "mastercard",
    },
    {
      id: 5,
      cardDigits: "2234",
      cardholder: "გელა გელაშვილი",
      cardType: "visa",
    },
  ];

  return (
    <ComponentContainer>
      <ComponentTitle>ჩემი ბარათები</ComponentTitle>
      <CardsContainer>
        {CustomerCards.map((card) => {
          return (
            <Card
              key={card.id}
              type={card.cardType}
              cardholder={card.cardholder}
              cardDigits={card.cardDigits}
            />
          );
        })}
        <AddCard onClick={handleModal}>
          <PlusIconWrapper>
            <img src={PlusIcon} alt="plus" />
          </PlusIconWrapper>
          <span>ბარათის დამატება</span>
        </AddCard>
        <CardModal isOpen={modalIsOpen} onRequestClose={handleModal}>
          <AddCardWrapper>
            <ModalTitleWrapper>
              <ModalTitle>ბარათის დამატება</ModalTitle>
              <ModalCloseButton onClick={handleModal}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16596 14L15 1M1 1.00003L14.6818 14"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </ModalCloseButton>
            </ModalTitleWrapper>
            <CardForm closeModal={handleModal} />
          </AddCardWrapper>
        </CardModal>
      </CardsContainer>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  padding: 0 70px;
  border-left: 1px solid rgba(51, 100, 163, 0.3);
`;

const ComponentTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 50px;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  row-gap: 50px;
  width: 100%;
`;

const AddCard = styled.button`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23B3B3B3' strokeWidth='3' stroke-dasharray='6%2c 14' stroke-dashoffset='3' strokeLinecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
  width: 250px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  /* border: 3px dashed ${({ theme }) => theme.colors.gray}; */
  border: none;
  &:focus {
    outline: none;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const PlusIconWrapper = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='53' ry='53' stroke='%23B3B3B3FF' strokeWidth='3' stroke-dasharray='6%2c 14' stroke-dashoffset='3' strokeLinecap='square'/%3e%3c/svg%3e");
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  img {
    width: 20px;
  }
`;

const CardModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const AddCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 670px;
  width: 100%;
  padding: 50px 70px;
  border-radius: 10px;
`;

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ModalTitle = styled.h1`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.blue};
  @media only screen and (max-width: 498.98px) {
    font-size: 20px;
  }
`;

const ModalCloseButton = styled.button`
  background-color: rgba(51, 100, 163, 0.1);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 498.98px) {
    width: 30px;
    height: 30px;
  }
  svg {
    @media only screen and (max-width: 498.98px) {
    width: 10px;
    height: 10px;
  }
    path {
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    svg {
      path {
        transition: all 0.3s ease-in-out;
        stroke: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;

export default Cards;
