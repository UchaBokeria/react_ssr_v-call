import styled from "styled-components";

const UserDetails = () => {
  return (
    <UserDetailsWrapper>
      <UserInfoWrapper>
        {/* <UserIcon></UserIcon> */}
        <UserName>მარია მარიაშვილი</UserName>
        <UserType>ფიზიკური პირი</UserType>
      </UserInfoWrapper>
      <UserBalanceWrapper>
        <UserBalanceTitle>ბალანსი</UserBalanceTitle>
        <UserBalance>
          <span>₾</span> 0.00
        </UserBalance>
      </UserBalanceWrapper>
      <UserBalanceWrapper>
        <UserBalanceTitle>ლიმიტი</UserBalanceTitle>
        <UserBalance>
          <span>₾</span> 0.00
        </UserBalance>
      </UserBalanceWrapper>
    </UserDetailsWrapper>
  );
};

const UserDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserName = styled.h3`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  text-align: center;
  margin-top: 25px;
`;

const UserType = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  /* font-weight: ${({ theme }) => theme.fontWeight.light}; */
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  text-align: center;
  margin-top: 10px;
`;

const UserIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

const UserBalanceWrapper = styled.div`
  width: 230px;
  height: 85px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 30px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const UserBalanceTitle = styled.span`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  margin-top: 10px;
`;

const UserBalance = styled.h4`
  font-size: 26px;
  font-family: ${({ theme }) => theme.fontFamily.font1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  span {
    font-size: 18px;
  }
`;

export default UserDetails;
