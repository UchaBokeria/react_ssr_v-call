import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import UserIcon from "../../Assets/images/Icons/user.svg";
import CardIcon from "../../Assets/images/Icons/id-card.svg";
import CarIcon from "../../Assets/images/Icons/car.svg";
import HistoryIcon from "../../Assets/images/Icons/history.svg";
import LockIcon from "../../Assets/images/Icons/lock.svg";
import UserDetails from "./UserDetails";

const CustomerNavigation = () => {
  const location = useLocation();

  console.log(location);

  const navigation = [
    {
      id: 0,
      name: "მომხმარებელი",
      icon: UserIcon,
      route: "/customer/profile",
    },
    {
      id: 1,
      name: "ჩემი ბარათები",
      icon: CardIcon,
      route: "/customer/cards",
    },
    {
      id: 2,
      name: "ჩემი მანქანები",
      icon: CarIcon,
      route: "/customer/cars",
    },
    {
      id: 3,
      name: "ჩემი ისტორია",
      icon: HistoryIcon,
      route: "/customer/history",
    },
    {
      id: 4,
      name: "პაროლის შეცვლა",
      icon: LockIcon,
      route: "/customer/password",
    },
  ];

  return (
    <StyledNav>
      <UserDetails />
      <NavWrapper>
        {navigation.map((item) => {
          return (
            <LinkWrapper key={item.id}>
              <LinkIcon>
                <img src={item.icon} alt="" />
              </LinkIcon>
              <StyledLink
                className={item.route === location.pathname ? "active" : ""}
                to={item.route}
              >
                {item.name}
              </StyledLink>
            </LinkWrapper>
          );
        })}
      </NavWrapper>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 275px;
  gap: 50px;
  /* width: 100%; */
  height: 100%;
  /* border-right: 1px solid rgba(51, 100, 163, 0.3); */
  /* padding: 0 70px; */
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 100%; */
  gap: 10px;
`;

const LinkIcon = styled.div`
  width: 18px;
  ${(props) =>
    props.password &&
    `
            width: 16px;
        `}
  img {
    width: 100%;
  }
`;
const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  &.active {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export default CustomerNavigation;
