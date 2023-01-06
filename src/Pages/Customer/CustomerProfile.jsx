import Layout from "../../Layout/Layout";
import CustomerContainer from "../../Components/Customer/CustomerContainer";
import CustomerNavigation from "../../Components/Customer/CustomerNavigation";
import Profile from "../../Components/Customer/Profile/Profile";

const CustomerProfile = () => {
  return (
    <Layout>
      <CustomerContainer>
        <CustomerNavigation />
        <Profile />
      </CustomerContainer>
    </Layout>
  );
};

export default CustomerProfile;
