import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import Modal from "react-modal";
import { Container, Dropdown } from "react-bootstrap";

import Logo from "../../Assets/images/blue-logo.svg";
import SearchIcon from "../../Assets/images/Icons/search.svg";
import ProfileIcon from "../../Assets/images/Icons/profile.svg";
import CartIcon from "../../Assets/images/Icons/cart.svg";
import SaleIcon from "../../Assets/images/Icons/sale.svg";
import GeFlag from "../../Assets/images/Flags/ge.png";
import RuFlag from "../../Assets/images/Flags/ru.png";
import EnFlag from "../../Assets/images/Flags/en.png";

const Header = () => {
  const location = useLocation();

  // const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  // const modalSearch = useRef(null);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "ge"
  );
  const [searchType, setSearchType] = useState("name");
  const [cartLength] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );

  const handleSearchType = (type) => {
    setSearchType(type);
  };

  const handleOpenBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  const handleLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert("search");
  };

  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstname: "ნიკოლოზ",
      })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("language", "ge");
  }, []);

  return (
    <StyledHeader location={location.pathname}>
      <StyledHeaderContainer>
        <Link to="/">
          <StyledLogo>
            <img src={Logo} alt="Vako Motors" />
          </StyledLogo>
        </Link>
        <StyledResponsiveContainer>
          <StyledCartButton to="/cart">
            <img src={CartIcon} alt="Cart" />
            <StyledCartCount>
              <span>{cartLength ? cartLength : 0}</span>
            </StyledCartCount>
          </StyledCartButton>
          <StyledBurgerButton onClick={handleOpenBurger}>
            <span />
            <span />
            <span />
          </StyledBurgerButton>
        </StyledResponsiveContainer>
        <StyledNav>
          <StyledSearchWrapper onSubmit={handleSearch}>
            <StyledSearchTypeDropdown>
              <StyledSearchTypeTrigger>
                {(searchType === "name" && "დასახელება") ||
                  (searchType === "vin" && "VIN კოდი") ||
                  (searchType === "part" && "ნაწილის კოდი")}
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.98145L1.63581 6.99065L7 11.9998"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg> */}
              </StyledSearchTypeTrigger>
              <StyledSearchTypeMenu>
                <StyledSearchType>
                  <button onClick={() => handleSearchType("name")}>
                    დასახელება
                  </button>
                </StyledSearchType>
                <StyledSearchType>
                  <button onClick={() => handleSearchType("vin")}>
                    VIN კოდი
                  </button>
                </StyledSearchType>
                <StyledSearchType>
                  <button onClick={() => handleSearchType("part")}>
                    ნაწილის კოდი
                  </button>
                </StyledSearchType>
              </StyledSearchTypeMenu>
            </StyledSearchTypeDropdown>
            <StyledSearchBar
              placeholder="ძებნა..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <StyledSearchButton onClick={handleSearch}>
              <img src={SearchIcon} alt="Search" />
            </StyledSearchButton>
          </StyledSearchWrapper>

          <StyledSalesButton to="/">
            <img src={SaleIcon} alt="Sale" />
            <span>ფასდაკლებები</span>
          </StyledSalesButton>
          {user ? (
            <Dropdown>
              <UserMenuTrigger>
                <img src={ProfileIcon} alt="Profile" />
                <NameWrapper>
                  <span className="greetings">გამარჯობა,</span>
                  <span className="name">{user.firstname}</span>
                </NameWrapper>
                <UserMenuIcon
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.98145L1.63581 6.99065L7 11.9998"
                    stroke="#3364A3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </UserMenuIcon>
              </UserMenuTrigger>
              <UserMenu>
                <UserLinkWrapper to="/customer/profile">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6435 1.64879C11.8453 0.787051 10.7305 0.3125 9.50004 0.3125C8.26301 0.3125 7.14451 0.78418 6.35004 1.64059C5.54695 2.50643 5.15566 3.68316 5.24754 4.95383C5.42965 7.4607 7.33729 9.5 9.50004 9.5C11.6628 9.5 13.5671 7.46111 13.7521 4.95465C13.8452 3.69547 13.4515 2.52119 12.6435 1.64879Z"
                        fill="#000000"
                      />
                      <path
                        d="M16.7187 18.6875H2.28124C2.09227 18.69 1.90512 18.6503 1.73342 18.5713C1.56172 18.4923 1.40978 18.3761 1.28866 18.231C1.02206 17.9123 0.9146 17.4771 0.99417 17.037C1.34034 15.1167 2.42069 13.5035 4.11874 12.3711C5.6273 11.3658 7.53821 10.8125 9.49999 10.8125C11.4618 10.8125 13.3727 11.3662 14.8812 12.3711C16.5793 13.5031 17.6596 15.1163 18.0058 17.0366C18.0854 17.4767 17.9779 17.9119 17.7113 18.2306C17.5902 18.3757 17.4383 18.4921 17.2666 18.5711C17.0949 18.6501 16.9077 18.6899 16.7187 18.6875Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <UserMenuLink>მომხმარებელი</UserMenuLink>
                </UserLinkWrapper>
                <UserLinkWrapper to="/customer/cards">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 2.2667C0 1.4935 0.671573 0.866699 1.5 0.866699H13.5C14.3284 0.866699 15 1.4935 15 2.2667V9.73337C15 10.5065 14.3284 11.1334 13.5 11.1334H1.5C0.671574 11.1334 0 10.5065 0 9.73337V2.2667ZM3 4.60003C3 3.5691 3.89543 2.73337 5 2.73337C6.10457 2.73337 7 3.5691 7 4.60003C7 5.63096 6.10457 6.4667 5 6.4667C3.89543 6.4667 3 5.63096 3 4.60003ZM12 4.60003H9V3.6667H12V4.60003ZM12 7.40003H9V6.4667H12V7.40003ZM5 7.40003C3.89132 7.40003 2.87779 7.98467 2.38197 8.91017L2.05279 9.52467C1.97529 9.66934 1.98357 9.84117 2.07468 9.97874C2.16578 10.1163 2.32671 10.2 2.5 10.2H7.5C7.67329 10.2 7.83422 10.1163 7.92533 9.97874C8.01643 9.84117 8.02471 9.66934 7.94721 9.52467L7.61803 8.91017C7.12222 7.98467 6.10869 7.40003 5 7.40003Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <UserMenuLink>ჩემი ბარათები</UserMenuLink>
                </UserLinkWrapper>
                <UserLinkWrapper to="/customer/cars">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5998 3.37975C21.9629 3.04631 20.2251 3.60756 19.7724 3.89884C19.6242 3.63512 19.456 3.34628 19.2737 3.05054C18.3414 1.53845 17.5508 0.662195 16.8566 0.371814C16.8287 0.360145 16.7999 0.35081 16.7705 0.343859C16.711 0.329807 15.2682 0 11.5 0C7.73181 0 6.28899 0.329856 6.2294 0.343859C6.19996 0.35081 6.17121 0.360145 6.14335 0.371814C5.44918 0.662244 4.65853 1.53845 3.72626 3.05054C3.54393 3.34628 3.3757 3.63512 3.22753 3.89884C2.77483 3.60756 1.03701 3.04631 0.400143 3.37975C-0.257036 3.7238 0.00628241 4.80672 0.400143 5.10043C0.646033 5.28375 1.32069 5.33957 2.03115 5.29235C1.87042 5.50641 1.74375 5.74733 1.658 6.00683C2.7784 6.21687 5.41214 6.20778 5.01853 7.06169C4.44263 8.31075 2.67006 8.13786 1.57741 7.58252L1.78144 11.1042C1.78144 11.9272 2.4486 12.5943 3.27157 12.5943H4.16769C4.99067 12.5943 5.65778 11.9272 5.65778 11.1042L5.62853 10.7885H17.3715L17.3422 11.1042C17.3422 11.9272 18.0093 12.5943 18.8323 12.5943H19.7284C20.5514 12.5943 21.2186 11.9272 21.2186 11.1042L21.4225 7.58252C20.3299 8.13786 18.5574 8.3108 17.9815 7.06169C17.5878 6.20778 20.2215 6.21687 21.342 6.00683C21.2563 5.74728 21.1296 5.50636 20.9689 5.29235C21.6793 5.33962 22.354 5.2838 22.5999 5.10043C22.9936 4.80672 23.257 3.7238 22.5998 3.37975ZM14.3673 9.13348H8.63254L8.03669 6.96084H14.9631L14.3673 9.13348ZM4.26387 4.29275C4.97721 3.04473 5.88877 1.71194 6.52579 1.40478C6.79289 1.3523 8.2501 1.09935 11.5 1.09935C14.7535 1.09935 16.2104 1.35289 16.474 1.40473C17.1102 1.71145 18.0219 3.04443 18.7357 4.29275H4.26387Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <UserMenuLink>ჩემი მანქანები</UserMenuLink>
                </UserLinkWrapper>
                <UserLinkWrapper to="/customer/history">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C7.29064 18 5.64935 17.5217 4.23062 16.6336C3.6528 16.2719 3.11762 15.8456 2.63567 15.3636C2.15297 14.8808 1.72614 14.3447 1.36416 13.7658C0.477504 12.3479 0 10.7079 0 9C0 8.72598 0.0122757 8.45331 0.0366864 8.18256C0.08628 7.63251 0.57239 7.2268 1.12244 7.2764C1.6725 7.32599 2.0782 7.8121 2.02861 8.36215C2.00958 8.57321 2 8.78595 2 9C2 10.3302 2.37066 11.6032 3.05992 12.7055C3.34164 13.156 3.67401 13.5735 4.04996 13.9495C4.42534 14.3249 4.84208 14.6569 5.29179 14.9384C6.39466 15.6287 7.6687 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C7.12864 2 5.38425 2.7394 4.09794 4.00204L5.49771 4.00341C6.04999 4.00341 6.49771 4.45113 6.49771 5.00341C6.49771 5.51625 6.11167 5.93892 5.61433 5.99669L5.49771 6.00341H1.49631C0.983473 6.00341 0.560802 5.61737 0.503037 5.12004L0.49631 5.00341V1.00351C0.49631 0.451227 0.944025 0.00351119 1.49631 0.00351119C2.00915 0.00351119 2.43182 0.389551 2.48958 0.88689L2.49631 1.00351L2.49589 2.77846C4.1661 1.03158 6.49557 0 9 0ZM8.25 4C8.6295 4 8.94346 4.28233 8.99315 4.64827L9 4.75V9H11.25C11.664 9 12 9.336 12 9.75C12 10.1295 11.7177 10.4435 11.3517 10.4931L11.25 10.5H8.25C7.8705 10.5 7.55654 10.2177 7.50685 9.85173L7.5 9.75V4.75C7.5 4.336 7.836 4 8.25 4Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <UserMenuLink>ჩემი ისტორია</UserMenuLink>
                </UserLinkWrapper>
                <UserLinkWrapper to="/customer/password">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.939364 20H13.0606C13.5626 20 13.9697 19.593 13.9697 19.0909V8.78788C13.9697 8.28582 13.5626 7.87879 13.0606 7.87879H12.1515V5.15152C12.1515 2.31097 9.84052 0 6.99997 0C4.15942 0 1.84846 2.31097 1.84846 5.15152V7.87879H0.939364C0.437304 7.87879 0.0302734 8.28582 0.0302734 8.78788V19.0909C0.0302734 19.593 0.437304 20 0.939364 20ZM3.66664 5.15152C3.66664 3.31352 5.16197 1.81818 6.99997 1.81818C8.83797 1.81818 10.3333 3.31352 10.3333 5.15152V7.87879H3.66664V5.15152Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <UserMenuLink>პაროლის შეცვლა</UserMenuLink>
                </UserLinkWrapper>
                <UserMenuDivider />
                <SignOutButton>გამოსვლა</SignOutButton>
              </UserMenu>
            </Dropdown>
          ) : (
            <StyledAuthButton to="/signin">
              <img src={ProfileIcon} alt="Profile" />
              <span>ავტორიზაცია</span>
            </StyledAuthButton>
          )}
          <StyledCartButton to="/cart">
            <img src={CartIcon} alt="Cart" />
            <StyledCartCount>
              <span>{cartLength ? cartLength : 0}</span>
            </StyledCartCount>
          </StyledCartButton>

          <Dropdown>
            <StyledDropdownTrigger>
              <img
                src={
                  (language === "ge" && GeFlag) ||
                  (language === "en" && EnFlag) ||
                  (language === "ru" && RuFlag)
                }
                alt="EN"
              />
            </StyledDropdownTrigger>
            <StyledLanguageDropdown>
              {language !== "en" && (
                <StyledLanguageItem>
                  <StyledLanguageButton onClick={() => handleLanguage("en")}>
                    <img src={EnFlag} alt="EN" />
                  </StyledLanguageButton>
                </StyledLanguageItem>
              )}
              {language !== "ru" && (
                <Dropdown.Item>
                  <StyledLanguageButton onClick={() => handleLanguage("ru")}>
                    <img src={RuFlag} alt="RU" />
                  </StyledLanguageButton>
                </Dropdown.Item>
              )}
              {language !== "ge" && (
                <Dropdown.Item>
                  <StyledLanguageButton onClick={() => handleLanguage("ge")}>
                    <img src={GeFlag} alt="GE" />
                  </StyledLanguageButton>
                </Dropdown.Item>
              )}
            </StyledLanguageDropdown>
          </Dropdown>

          {/* <StyledLanguage>
            <StyledDropdownTrigger>
              <img src={GeFlag} alt="GE" />
            </StyledDropdownTrigger>
            <StyledLanguageDropdown>
              <StyledLanguageItem>
                <StyledLanguageButton>
                  <img src={EnFlag} alt="EN" />
                </StyledLanguageButton>
              </StyledLanguageItem>
              <StyledLanguageItem>
                <StyledLanguageButton>
                  <img src={RuFlag} alt="RU" />
                </StyledLanguageButton>
              </StyledLanguageItem>
            </StyledLanguageDropdown>
          </StyledLanguage> */}
        </StyledNav>
      </StyledHeaderContainer>

      <StyledBurgerModal
        isOpen={burgerIsOpen}
        onRequestClose={handleOpenBurger}
        ariaHideApp={false}
      >
        <Container>
          <StyledBurgerModalHeader>
            <StyledBurgerModalUsername>
              <img src={ProfileIcon} alt="Profile" />
              <NameWrapper>
                <span className="greetings">გამარჯობა,</span>
                <span className="name">{user.firstname}</span>
              </NameWrapper>
            </StyledBurgerModalUsername>
            <StyledBurgerCloseButton onClick={handleOpenBurger}>
              <span />
              <span />
            </StyledBurgerCloseButton>
          </StyledBurgerModalHeader>
          {/* <StyledSearchWrapper>
            <StyledSearchBar
              placeholder="ძებნა..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <StyledSearchButton>
              <img src={SearchIcon} alt="Search" />
            </StyledSearchButton>
          </StyledSearchWrapper> */}
          <StyledBurgerModalButtons>
            {user ? (
              <BurgerModalNavigation>
                <BurgerModalUserLinkWrapper to="/customer/profile">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6435 1.64879C11.8453 0.787051 10.7305 0.3125 9.50004 0.3125C8.26301 0.3125 7.14451 0.78418 6.35004 1.64059C5.54695 2.50643 5.15566 3.68316 5.24754 4.95383C5.42965 7.4607 7.33729 9.5 9.50004 9.5C11.6628 9.5 13.5671 7.46111 13.7521 4.95465C13.8452 3.69547 13.4515 2.52119 12.6435 1.64879Z"
                        fill="#000000"
                      />
                      <path
                        d="M16.7187 18.6875H2.28124C2.09227 18.69 1.90512 18.6503 1.73342 18.5713C1.56172 18.4923 1.40978 18.3761 1.28866 18.231C1.02206 17.9123 0.9146 17.4771 0.99417 17.037C1.34034 15.1167 2.42069 13.5035 4.11874 12.3711C5.6273 11.3658 7.53821 10.8125 9.49999 10.8125C11.4618 10.8125 13.3727 11.3662 14.8812 12.3711C16.5793 13.5031 17.6596 15.1163 18.0058 17.0366C18.0854 17.4767 17.9779 17.9119 17.7113 18.2306C17.5902 18.3757 17.4383 18.4921 17.2666 18.5711C17.0949 18.6501 16.9077 18.6899 16.7187 18.6875Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <BurgerMenuUserMenuLink>მომხმარებელი</BurgerMenuUserMenuLink>
                </BurgerModalUserLinkWrapper>
                <BurgerModalUserLinkWrapper to="/customer/cards">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 2.2667C0 1.4935 0.671573 0.866699 1.5 0.866699H13.5C14.3284 0.866699 15 1.4935 15 2.2667V9.73337C15 10.5065 14.3284 11.1334 13.5 11.1334H1.5C0.671574 11.1334 0 10.5065 0 9.73337V2.2667ZM3 4.60003C3 3.5691 3.89543 2.73337 5 2.73337C6.10457 2.73337 7 3.5691 7 4.60003C7 5.63096 6.10457 6.4667 5 6.4667C3.89543 6.4667 3 5.63096 3 4.60003ZM12 4.60003H9V3.6667H12V4.60003ZM12 7.40003H9V6.4667H12V7.40003ZM5 7.40003C3.89132 7.40003 2.87779 7.98467 2.38197 8.91017L2.05279 9.52467C1.97529 9.66934 1.98357 9.84117 2.07468 9.97874C2.16578 10.1163 2.32671 10.2 2.5 10.2H7.5C7.67329 10.2 7.83422 10.1163 7.92533 9.97874C8.01643 9.84117 8.02471 9.66934 7.94721 9.52467L7.61803 8.91017C7.12222 7.98467 6.10869 7.40003 5 7.40003Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <BurgerMenuUserMenuLink>ჩემი ბარათები</BurgerMenuUserMenuLink>
                </BurgerModalUserLinkWrapper>
                <BurgerModalUserLinkWrapper to="/customer/cars">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5998 3.37975C21.9629 3.04631 20.2251 3.60756 19.7724 3.89884C19.6242 3.63512 19.456 3.34628 19.2737 3.05054C18.3414 1.53845 17.5508 0.662195 16.8566 0.371814C16.8287 0.360145 16.7999 0.35081 16.7705 0.343859C16.711 0.329807 15.2682 0 11.5 0C7.73181 0 6.28899 0.329856 6.2294 0.343859C6.19996 0.35081 6.17121 0.360145 6.14335 0.371814C5.44918 0.662244 4.65853 1.53845 3.72626 3.05054C3.54393 3.34628 3.3757 3.63512 3.22753 3.89884C2.77483 3.60756 1.03701 3.04631 0.400143 3.37975C-0.257036 3.7238 0.00628241 4.80672 0.400143 5.10043C0.646033 5.28375 1.32069 5.33957 2.03115 5.29235C1.87042 5.50641 1.74375 5.74733 1.658 6.00683C2.7784 6.21687 5.41214 6.20778 5.01853 7.06169C4.44263 8.31075 2.67006 8.13786 1.57741 7.58252L1.78144 11.1042C1.78144 11.9272 2.4486 12.5943 3.27157 12.5943H4.16769C4.99067 12.5943 5.65778 11.9272 5.65778 11.1042L5.62853 10.7885H17.3715L17.3422 11.1042C17.3422 11.9272 18.0093 12.5943 18.8323 12.5943H19.7284C20.5514 12.5943 21.2186 11.9272 21.2186 11.1042L21.4225 7.58252C20.3299 8.13786 18.5574 8.3108 17.9815 7.06169C17.5878 6.20778 20.2215 6.21687 21.342 6.00683C21.2563 5.74728 21.1296 5.50636 20.9689 5.29235C21.6793 5.33962 22.354 5.2838 22.5999 5.10043C22.9936 4.80672 23.257 3.7238 22.5998 3.37975ZM14.3673 9.13348H8.63254L8.03669 6.96084H14.9631L14.3673 9.13348ZM4.26387 4.29275C4.97721 3.04473 5.88877 1.71194 6.52579 1.40478C6.79289 1.3523 8.2501 1.09935 11.5 1.09935C14.7535 1.09935 16.2104 1.35289 16.474 1.40473C17.1102 1.71145 18.0219 3.04443 18.7357 4.29275H4.26387Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <BurgerMenuUserMenuLink>
                    ჩემი მანქანები
                  </BurgerMenuUserMenuLink>
                </BurgerModalUserLinkWrapper>
                <BurgerModalUserLinkWrapper to="/customer/history">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C7.29064 18 5.64935 17.5217 4.23062 16.6336C3.6528 16.2719 3.11762 15.8456 2.63567 15.3636C2.15297 14.8808 1.72614 14.3447 1.36416 13.7658C0.477504 12.3479 0 10.7079 0 9C0 8.72598 0.0122757 8.45331 0.0366864 8.18256C0.08628 7.63251 0.57239 7.2268 1.12244 7.2764C1.6725 7.32599 2.0782 7.8121 2.02861 8.36215C2.00958 8.57321 2 8.78595 2 9C2 10.3302 2.37066 11.6032 3.05992 12.7055C3.34164 13.156 3.67401 13.5735 4.04996 13.9495C4.42534 14.3249 4.84208 14.6569 5.29179 14.9384C6.39466 15.6287 7.6687 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C7.12864 2 5.38425 2.7394 4.09794 4.00204L5.49771 4.00341C6.04999 4.00341 6.49771 4.45113 6.49771 5.00341C6.49771 5.51625 6.11167 5.93892 5.61433 5.99669L5.49771 6.00341H1.49631C0.983473 6.00341 0.560802 5.61737 0.503037 5.12004L0.49631 5.00341V1.00351C0.49631 0.451227 0.944025 0.00351119 1.49631 0.00351119C2.00915 0.00351119 2.43182 0.389551 2.48958 0.88689L2.49631 1.00351L2.49589 2.77846C4.1661 1.03158 6.49557 0 9 0ZM8.25 4C8.6295 4 8.94346 4.28233 8.99315 4.64827L9 4.75V9H11.25C11.664 9 12 9.336 12 9.75C12 10.1295 11.7177 10.4435 11.3517 10.4931L11.25 10.5H8.25C7.8705 10.5 7.55654 10.2177 7.50685 9.85173L7.5 9.75V4.75C7.5 4.336 7.836 4 8.25 4Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <BurgerMenuUserMenuLink>ჩემი ისტორია</BurgerMenuUserMenuLink>
                </BurgerModalUserLinkWrapper>
                <BurgerModalUserLinkWrapper to="/customer/password">
                  <UserLinkIcon>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.939364 20H13.0606C13.5626 20 13.9697 19.593 13.9697 19.0909V8.78788C13.9697 8.28582 13.5626 7.87879 13.0606 7.87879H12.1515V5.15152C12.1515 2.31097 9.84052 0 6.99997 0C4.15942 0 1.84846 2.31097 1.84846 5.15152V7.87879H0.939364C0.437304 7.87879 0.0302734 8.28582 0.0302734 8.78788V19.0909C0.0302734 19.593 0.437304 20 0.939364 20ZM3.66664 5.15152C3.66664 3.31352 5.16197 1.81818 6.99997 1.81818C8.83797 1.81818 10.3333 3.31352 10.3333 5.15152V7.87879H3.66664V5.15152Z"
                        fill="#000000"
                      />
                    </svg>
                  </UserLinkIcon>
                  <BurgerMenuUserMenuLink>
                    პაროლის შეცვლა
                  </BurgerMenuUserMenuLink>
                </BurgerModalUserLinkWrapper>
              </BurgerModalNavigation>
            ) : (
              <StyledAuthButton to="/signin">
                <img src={ProfileIcon} alt="Profile" />
                <span>ავტორიზაცია</span>
              </StyledAuthButton>
            )}
            <StyledSalesButton to="/">
              <img src={SaleIcon} alt="Sale" />
              <span>ფასდაკლებები</span>
            </StyledSalesButton>

          </StyledBurgerModalButtons>
            <SignOutButton>გამოსვლა</SignOutButton>
          <StyledBurgerLanguageContainer>
            <StyledLanguageItem>
              <StyledLanguageButton>
                <img src={GeFlag} alt="GE" />
              </StyledLanguageButton>
            </StyledLanguageItem>{" "}
            <StyledLanguageItem>
              <StyledLanguageButton>
                <img src={EnFlag} alt="EN" />
              </StyledLanguageButton>
            </StyledLanguageItem>{" "}
            <StyledLanguageItem>
              <StyledLanguageButton>
                <img src={RuFlag} alt="RU" />
              </StyledLanguageButton>
            </StyledLanguageItem>
          </StyledBurgerLanguageContainer>
        </Container>
      </StyledBurgerModal>
      <SearchContainer>
        <StyledSearchWrapper onSubmit={handleSearch} responsive>
          <StyledSearchTypeDropdown>
            <StyledSearchTypeTrigger>
              {(searchType === "name" && "დასახელება") ||
                (searchType === "vin" && "VIN კოდი") ||
                (searchType === "part" && "ნაწილის კოდი")}
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1.98145L1.63581 6.99065L7 11.9998"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </StyledSearchTypeTrigger>
            <StyledSearchTypeMenu>
              <StyledSearchType>
                <button onClick={() => handleSearchType("name")}>
                  დასახელება
                </button>
              </StyledSearchType>
              <StyledSearchType>
                <button onClick={() => handleSearchType("vin")}>
                  VIN კოდი
                </button>
              </StyledSearchType>
              <StyledSearchType>
                <button onClick={() => handleSearchType("part")}>
                  ნაწილის კოდი
                </button>
              </StyledSearchType>
            </StyledSearchTypeMenu>
          </StyledSearchTypeDropdown>
          <StyledSearchBar
            placeholder="ძებნა..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <StyledSearchButton onClick={handleSearch}>
            <img src={SearchIcon} alt="Search" />
          </StyledSearchButton>
        </StyledSearchWrapper>
      </SearchContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  /* height: 68px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  margin-bottom: ${(props) =>
    props.location === "/signin" ||
    props.location === "/signup" ||
    props.location === "/forgot-password" ||
    props.location === "/customer/profile" ||
    props.location === "/customer/cards"
      ? "0"
      : "35px"};
  padding: 10px 0;
  @media only screen and (max-width: 991.98px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledHeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  @media only screen and (max-width: 667.98px) {
    justify-content: space-between;
  }
`;

const StyledLogo = styled.div`
  height: 18px;
  margin-right: 35px;
  @media only screen and (max-width: 388.98px) {
    height: 16px;
  }

  img {
    height: 100%;
  }
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 35px;
  width: 100%;
  @media only screen and (max-width: 667.98px) {
    display: none;
  }
`;

// const StyledSearchContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   /* max-width: 500px; */
//   width: 100%;
//   height: 40px;
// `;

const SearchContainer = styled(Container)`
  display: none;
  @media only screen and (max-width: 991.98px) {
    display: block;
  }
`;

const StyledSearchWrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  max-width: 500px;
  width: 100%;
  height: 40px;
  background-color: #ebeff6;
  border-radius: 30px;
  @media only screen and (max-width: 991.98px) {
    display: none;
  }
  ${(props) =>
    props.responsive &&
    `
    display: none;
    @media only screen and (max-width: 991.98px) { 
      display: flex !important;
      max-width: 100%;
    }
  `}
`;

const StyledSearchTypeDropdown = styled(Dropdown)`
  position: relative;
`;

const StyledSearchTypeMenu = styled(Dropdown.Menu)`
  position: absolute;
  top: 50px !important;
  left: 50% !important;
  z-index: 99999;
  transform: translateX(-50%) !important;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  border: none;
`;

const StyledSearchTypeTrigger = styled(Dropdown.Toggle)`
  padding: 6px 16px;
  border: none;
  border-radius: 30px;
  /* border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0; */
  height: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #ebeff6;
    /* outline: 2px solid ${({ theme }) => theme.colors.blue}; */
    color: ${({ theme }) => theme.colors.blue};
  }
  &:focus {
    box-shadow: none !important;
    background-color: ${({ theme }) => theme.colors.white} !important;
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    color: ${({ theme }) => theme.colors.blue} !important;
  }
  &:after {
    display: none;
  }
  svg {
    width: 12px;
    height: 12px;
    margin-left: 15px;
    transform: rotate(-90deg);
  }
`;

const StyledSearchType = styled(Dropdown.Item)`
  padding: 0;
  &:hover {
    cursor: pointer;
    background-color: rgba(51, 100, 163, 0.1);
    button {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  button {
    border: none;
    background-color: transparent;
    text-align: left;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    height: 100%;
    padding: 15px;
  }
`;

const StyledSearchBar = styled.input`
  /* width: 567px; */
  width: 100%;
  padding: 12px 0 12px 20px;
  /* border-top-left-radius: 30px; */
  /* border-bottom-left-radius: 30px; */
  border: none;
  background-color: #ebeff6;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  transition: all 0.3s ease-in-out;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.font2};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
  }

  /* &:focus {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
  } */
`;
const StyledSearchButton = styled.button`
  width: 50px;
  height: 40px;
  padding: 0 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border: none;
  background-color: #ebeff6;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 30px; */

  /* &:before {
    content: " ";
    display: block;
    width: 1px;
    height: 16px;
    background-color: rgba(51, 100, 163, 0.5);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  } */

  &:hover {
    /* cursor: pointer; */
  }

  img {
    height: 18px;
  }
`;

const StyledBurgerModal = styled(Modal)`
  max-width: 320px;
  width: 100%;
  margin-left: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px 20px;
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
`;

const StyledAuthButton = styled(Link)`
  padding: 6px 16px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgba(51, 100, 163, 0.1);
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  border: none;
  border-radius: 40px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 1529.98px) {
    padding: 6px 9px;
  }
  @media only screen and (max-width: 359px) {
    width: 100%;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }

  span {
    @media only screen and (max-width: 1529.98px) {
      display: none;
    }
    @media only screen and (max-width: 667.98px) {
      display: block;
    }
  }

  img {
    height: 22px;
  }
`;

const UserMenu = styled(Dropdown.Menu)`
  /* padding: 20px; */
  width: 320px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  position: absolute;
  top: 50px !important;
  left: 50% !important;
  z-index: 99999;
  transform: translateX(-50%) !important;
  display: none;
  opacity: 0;
  /* visibility: hidden; */
  transition: opacity 0.5s ease;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  border: none;
  &.show {
    display: flex !important;
    opacity: 1 !important;
  }
  &:focus {
    display: flex !important;
    gap: 10px !important;
    opacity: 1 !important;
  }
`;

const UserMenuDivider = styled.div`
  width: calc(100% - 40px);
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  /* padding: 10px 20px; */
  margin: 10px 20px;
`;

const UserLinkWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;
  /* height: 30px; */
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
    background-color: rgba(51, 100, 163, 0.1);
    div {
      transition: all 0.3s ease-in-out;
      color: ${({ theme }) => theme.colors.blue};
    }
    svg {
      path {
        transition: all 0.3s ease-in-out;
        fill: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;

const UserLinkIcon = styled.div`
  /* max-width: 25px; */
  /* width: 100%; */
  svg {
    path {
      transition: all 0.3s ease-in-out;
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;

const UserMenuLink = styled.div`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

const SignOutButton = styled.button`
  width: calc(100% - 40px);
  height: 40px;
  padding: 6px 9px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 40px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const UserMenuTrigger = styled(Dropdown.Toggle)`
  padding: 6px 16px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: rgba(51, 100, 163, 0.1) !important;
  color: ${({ theme }) => theme.colors.blue} !important;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  line-height: 1;
  border: none;
  border-radius: 40px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 1529.98px) {
    padding: 6px 9px;
  }
  @media only screen and (max-width: 1199.98px) {
    gap: 0;
    svg {
      display: none;
    }
  }
  @media only screen and (max-width: 991.98px) {
    gap: 15px;
    svg {
      display: block;
    }
  }
  @media only screen and (max-width: 767.98px) {
    gap: 0;
    svg {
      display: none;
    }
  }
  @media only screen and (max-width: 359px) {
    width: 100%;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.white} !important;
    outline: 2px solid ${({ theme }) => theme.colors.blue} !important;
    color: ${({ theme }) => theme.colors.blue} !important;
  }
  &:after {
    display: none;
  }
  /* &:focus + ${UserMenu} {
    display: flex;
    opacity: 1;
  } */
  span {
    /* @media only screen and (max-width: 1529.98px) { */
    @media only screen and (max-width: 1199.98px) {
      display: none;
    }
    @media only screen and (max-width: 991.98px) {
      display: block;
    }
    @media only screen and (max-width: 767.98px) {
      display: none;
    }
  }

  img {
    height: 22px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  flex-direction: column;
  .greetings {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    color: ${({ theme }) => theme.colors.blue};
  }
  .name {
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.font1};
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const UserMenuIcon = styled.svg`
  transform: rotate(-90deg);
`;

const StyledSalesButton = styled(Link)`
  padding: 6px 16px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: rgba(228, 76, 33, 0.1);
  color: ${({ theme }) => theme.colors.orange};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  border: none;
  border-radius: 40px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  @media only screen and (max-width: 1529.98px) {
    padding: 6px 9px;
  }
  @media only screen and (max-width: 667.98px) {
    width: 100% !important;
    padding: 6px 16px;
    gap: 25px;
    font-weight: normal;
    }
  @media only screen and (max-width: 359px) {
    width: 100%;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }

  span {
    @media only screen and (max-width: 1199.98px) {
      display: none;
    }
    @media only screen and (max-width: 991.98px) {
      display: block;
    }
    @media only screen and (max-width: 767.98px) {
      display: none;
    }
    @media only screen and (max-width: 667.98px) {
      display: block;
      width: 100%;
    }
  }

  img {
    height: 22px;
  }
`;

const StyledCartButton = styled(Link)`
  padding: 19px 0;
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* &:after {
    content: " ";
    display: block;
    width: 1px;
    height: 16px;
    background-color: rgba(51, 100, 163, 0.5);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  } */

  &:hover {
    cursor: pointer;
  }

  img {
    height: 22px;
  }
`;

const StyledCartCount = styled.div`
  min-width: 14px;
  height: 14px;
  border-radius: 9px;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  position: absolute;
  top: 20%;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: ${({ theme }) => theme.fontFamily.font1};
    color: ${({ theme }) => theme.colors.white};
    font-size: 11px;
  }
`;

const StyledLanguageDropdown = styled(Dropdown.Menu)`
  padding: 10px 6px;
  width: 50px;
  min-width: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  position: absolute;
  top: 50px !important;
  left: 50% !important;
  z-index: 99999;
  transform: translateX(-50%) !important;
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 6px 4px rgba(51, 100, 163, 0.25);
  border: none;
  &.show {
    display: flex !important;
    opacity: 1 !important;
  }
  &:focus {
    display: flex !important;
    gap: 10px !important;
    opacity: 1 !important;
  }
  a {
    padding: 0;
    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledDropdownTrigger = styled(Dropdown.Toggle)`
  position: relative;
  border: none;
  width: 40px;
  height: 40px;
  padding: 4px;
  background-color: rgba(51, 100, 163, 0.2) !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(51, 100, 163, 0.5);
    transition: all 0.5s ease;
  }

  /* &:focus + ${StyledLanguageDropdown} {
    display: flex;
    opacity: 1;
  } */

  &:after {
    display: none;
  }
  /* &:after {
    content: "›";
    position: absolute;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 24px;
    font-weight: bold;
    transform: rotate(90deg);
    top: -5px;
    right: -15px;
  } */

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    /* outline: 0.3px solid rgba(0, 0, 0, 0.25); */
  }
`;

const StyledLanguageItem = styled(Dropdown.Item)`
  cursor: pointer;
  /* padding: 1em;   */
  text-align: center;
  @media only screen and (max-width: 667.98px) {
    width: unset !important;
    padding: 0;
  }
  &:hover {
    background-color: darken(#ed3e44, 5%);
  }
`;

const StyledLanguageButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  padding: 4px;
  background-color: rgba(51, 100, 163, 0.2);
  border-radius: 50%;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(51, 100, 163, 0.5);
    transition: all 0.5s ease;
  }

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

const StyledResponsiveContainer = styled.div`
  display: none;
  @media only screen and (max-width: 667.98px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
  @media only screen and (max-width: 388.98px) {
    gap: 20px;
  }
`;

const StyledBurgerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-width: 20px;
  height: 14px;
  padding: 0;
  border: none;
  background-color: transparent;

  span {
    width: 100%;
    height: 2px;
    background-color: #000;
    display: block;
  }
`;

const StyledBurgerModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  padding: 0 16px;
`;

const StyledBurgerModalUsername = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const StyledBurgerModalButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 25px;
  @media only screen and (max-width: 359px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledBurgerCloseButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-width: 20px;
  height: 14px;
  padding: 0;
  border: none;
  background-color: transparent;
  transform: rotate(45deg);

  span {
    width: 100%;
    height: 2px;
    background-color: #000;
    display: block;

    &:nth-child(1) {
      transform: translateY(5px);
    }

    &:nth-child(2) {
      transform: translateY(-7px) rotate(90deg);
    }
  }
`;

const BurgerModalNavigation = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

const StyledBurgerLanguageContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 50px;
`;

const BurgerModalUserLinkWrapper = styled(Link)`
  padding: 6px 16px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: rgba(51, 100, 163, 0.1);
  color: ${({ theme }) => theme.colors.blue};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  text-transform: uppercase;
  border: none;
  border-radius: 40px;
  outline: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    outline: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
  svg {
    path {
      fill: #3364A3;
    }
  }
  img {
    height: 22px;
  }
`;

const BurgerMenuUserMenuLink = styled.div`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

export default Header;
