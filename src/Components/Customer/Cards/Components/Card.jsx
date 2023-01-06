import styled from "styled-components";
import Visa from "../../../../Assets/images/Icons/Card/visa.svg";
import MasterCard from "../../../../Assets/images/Icons/Card/mastercard.svg";

const Card = (props) => {
  return (
    <StyledCardWrapper>
      <StyledCard>
        <CardLogo>
          <img
            src={props.type === "visa" ? Visa : MasterCard}
            alt={props.type === "visa" ? "Visa" : "Mastercard"}
          />
        </CardLogo>
        <CardHolderInfoWrapper>
          <CardholderName>{props.cardholder}</CardholderName>
          <CardDigits>•••• {props.cardDigits}</CardDigits>
        </CardHolderInfoWrapper>
      </StyledCard>
      <DeleteButton>
        <span>ბარათის წაშლა</span>
      </DeleteButton>
    </StyledCardWrapper>
  );
};

const StyledCardWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const StyledCard = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 15px;
`;

const CardLogo = styled.div`
  width: 60px;
  img {
    width: 100%;
  }
`;

const CardHolderInfoWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
`;

const CardholderName = styled.h3`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-align: left;
  width: 100%;
`;

const CardDigits = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  width: 100%;
`;

const DeleteButton = styled.button`
  width: 100%;
  height: 25px;
  background-color: rgba(51, 100, 163, 0.1);
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  border-radius: 10px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default Card;
