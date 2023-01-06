import Layout from "../../Layout/Layout";
import CustomerContainer from "../../Components/Customer/CustomerContainer";
import CustomerNavigation from "../../Components/Customer/CustomerNavigation";
import Cards from "../../Components/Customer/Cards/Cards";

const CustomerCards = () => {
  return (
    <Layout>
      <CustomerContainer>
        <CustomerNavigation />
        <Cards />
      </CustomerContainer>
    </Layout>
  );
};

export default CustomerCards;