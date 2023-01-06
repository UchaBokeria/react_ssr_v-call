import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import CartItem from "../../Components/Cart/CartItem";
import { Container } from "react-bootstrap";

import { Admd } from "../../Components/Ads/Ads";
import CustomContainer from "../../Components/Layout/CustomContainer";

const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const cartTotal = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const setQuantity = (product, quantity) => {
    const newCartData = [...cartData];
    newCartData.find((item) => item.id === product.id).quantity = quantity;
    setCartData(newCartData);
    localStorage.setItem("cart", JSON.stringify(newCartData));
  };

  const removeItem = (product) => {
    const newCartData = cartData.filter((item) => item !== product);
    setCartData(newCartData);
    localStorage.setItem("cart", JSON.stringify(newCartData));
  };

  const addQty = (product) => {
    const exist = cartData.find((item) => item.id === product.id);

    if (exist) {
      let sum = cartData.map((p) => p.price * p.quantity).reduce((a) => a);
      // console.log(sum);

      setCartData(
        cartData.map((item) => {
          return item.id === product.id
            ? {
                ...exist,
                quantity: exist.quantity + 1,
                total: sum + exist.price,
              }
            : item;
        })
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cartData.map((item) => {
            return item.id === product.id
              ? {
                  ...exist,
                  quantity: exist.quantity + 1,
                  total: sum + exist.price,
                }
              : item;
          })
        )
      );
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
    console.log(exist);
  };

  const removeQty = (product) => {
    const exist = cartData.find((item) => item.id === product.id);

    if (exist.quantity === 1) {
      setCartData(cartData.filter((item) => item.id !== product.id));

      localStorage.setItem(
        "cart",
        JSON.stringify(cartData.filter((item) => item.id !== product.id))
      );
    } else {
      let sum = cartData.map((p) => p.price * p.quantity).reduce((a) => a);
      setCartData(
        cartData.map((item) =>
          item.id === product.id
            ? {
                ...exist,
                quantity: exist.quantity - 1,
                total: sum - exist.price,
              }
            : item
        )
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cartData.map((item) =>
            item.id === product.id
              ? {
                  ...exist,
                  quantity: exist.quantity - 1,
                  total: sum - exist.price,
                }
              : item
          )
        )
      );
    }
  };

  const clearCart = () => {
    setCartData([]);
    localStorage.removeItem("cart");
  };

  // const getProductTotal = (product) => {
  //   const exist = cartData.find((item) => item.id === product.id);
  //   return exist.total ? exist.quantity * product.price : 0;
  // };

  const CartArray = [
    {
      id: 59,
      title: "Spring and summershoes",
      price: 20,
      quantity: 1,
      // total: 29,
    },
    {
      id: 88,
      title: "TC Reusable Silicone Magic Washing Gloves",
      price: 29,
      quantity: 1,
      // total: 29,
    },
    {
      id: 18,
      title: "Oil Free Moisturizer 100ml",
      price: 40,
      quantity: 1,
      // total: null,
    },
    {
      id: 95,
      title: "Wholesale cargo lashing Belt",
      price: 930,
      quantity: 1,
      // total: null,
    },
    {
      id: 39,
      title: "Women Sweaters Wool",
      price: 600,
      quantity: 1,
      // total: null,
    },
  ];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartArray));
  }, []);

  return (
    <Layout>
      <CustomContainer>
        <Admd />
      </CustomContainer>
      <StyledCartContainer>
        <StyledTitle>კალათა</StyledTitle>
        {cartData.length === 0 ? (
          <h1>კალათა ცარიელია</h1>
        ) : (
          <>
            <CartTable>
              <TableHead head>
                <TableRow>
                  <TableHeader productTitle>დასახელება</TableHeader>
                  <TableHeader>პროდუქტის კოდი</TableHeader>
                  <TableHeader>ერთეულის ფასი</TableHeader>
                  <TableHeader>რაოდენობა</TableHeader>
                  <TableHeader>ღირებულება</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartData.map((item) => {
                  return (
                    <CartItem
                      item={item}
                      key={item.id}
                      title={item.title}
                      id={item.id}
                      price={item.price}
                      quantity={item.quantity}
                      total={item.total}
                      setQuantity={setQuantity}
                      removeItem={removeItem}
                      addQty={addQty}
                      removeQty={removeQty}
                      // getProductTotal={getProductTotal}
                    />
                  );
                })}
              </TableBody>
            </CartTable>
            <TotalPriceWrapper>
              <p>სრული ღირებულება:</p>
              <p>{cartTotal} ₾</p>
            </TotalPriceWrapper>
            <ButtonsWrapper>
              <CartClearButton onClick={() => clearCart()}>
                კალათის გასუფთავება
              </CartClearButton>
              <CartCheckoutButton to="/">შეკვეთის გაფორმება</CartCheckoutButton>
            </ButtonsWrapper>
          </>
        )}
      </StyledCartContainer>
    </Layout>
  );
};

const StyledCartContainer = styled(Container)`
  /* display: flex; */
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

const StyledTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fontFamily.font2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 25px;
`;

const ItemTitlesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartTable = styled.table`
  width: 100%;
  text-align: center;
  margin-bottom: 35px;
`;

const TableHeader = styled.th`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: 18px;
  ${({ productTitle }) =>
    productTitle &&
    `
      text-align: left;
      padding-left: 35px;
    `}
`;

const TableHead = styled.thead`
  border-bottom: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;


const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily.font1};
    /* font-weight: ${({ theme }) => theme.fontWeight.bold}; */
  }
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily.font2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 35px 0;
`;

const CartClearButton = styled.button`
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
    @media only screen and (max-width: 1529.98px) {
      display: none;
    }
    @media only screen and (max-width: 667px) {
      display: block;
    }
  }

  img {
    height: 22px;
  }
`;

const CartCheckoutButton = styled(Link)`
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
    @media only screen and (max-width: 667px) {
      display: block;
    }
  }

  img {
    height: 22px;
  }
`;

export default Cart;
