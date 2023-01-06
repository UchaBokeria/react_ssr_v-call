import styled from "styled-components";

const CartItem = (props) => {

  return (
    <TableRow>
      <TableData
        productTitle
        image="https://www.freepnglogos.com/uploads/tire-png/tire-assurance-weatherready-tires-goodyear-tires-15.png"
      >
        <button onClick={() => props.removeItem(props.item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#E44C21"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              fill="#E44C21"
            ></path>{" "}
          </svg>
        </button>
        <div className="product-image" />
        <h1>{props.title}</h1>
      </TableData>
      <TableData>
        <p>{props.id}</p>
      </TableData>
      <TableData>
        <p>{props.price}₾</p>
      </TableData>
      <TableData quantity>
        <button onClick={() => props.removeQty(props.item)}>
          <svg
            className="left"
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
        </button>
        <Quantity
        //   value={props.quantity}
        //   onChange={(e) =>
        //     props.setQuantity(props.item, parseInt(e.target.value))
        //   }
        >
          {" "}
          {props.quantity}
        </Quantity>
        <button onClick={() => props.addQty(props.item)}>
          <svg
            className="right"
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
        </button>
      </TableData>
      <TableData>
        <p>{props.quantity === 1 ? props.price : props.total} ₾</p>
      </TableData>
    </TableRow>
  );
};

const TableRow = styled.tr`
  border-bottom: 1px solid #f1f1f3;
`;

const TableData = styled.td`
  min-height: 150px;
  vertical-align: middle;
  padding: 20px 0;
  ${(props) =>
    props.productTitle &&
    `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    .product-image {
      min-width: 100px;
      min-height: 100px;
      // object-fit: cover;
      background-image: url(${props.image});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      img {
        width: 100%;
        height: 100%;
      }
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 5px;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #f1f1f3;
        transition: all 0.3s ease-in-out;
      }
      svg {
        width: 25px;
        height: 25px;
      }
    }
    `}

  ${(props) => props.code && ``}
    ${(props) => props.price && ``}
    ${(props) =>
    props.quantity &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        &:hover {
          svg {
            path {
              stroke: #E44C21;
              transition: all 0.3s ease-in-out;
            }
          }
        }
        svg {
          width: 8px;
          &.left {
            transform: rotate(-90deg);
          }
          &.right {
            transform: rotate(90deg);
          }
            path {
              transition: all 0.3s ease-in-out;
              stroke: #3364A3;
            }
        }
      }
    `}
    ${(props) => props.total && ``}

  h1 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fontFamily.font2};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily.font2};
  }
`;

const Quantity = styled.div`
  height: 30px !important;
  min-width: 30px;
  width: 30px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fontFamily.font2};
`;

export default CartItem;
