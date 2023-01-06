import React from "react";
import Layout from "../../Layout/Layout";
import AuthContainer from "../../Components/Auth/AuthContainer";
import SignInForm from "../../Components/Auth/SignIn/SignInForm";

const SignIn = () => {
  return (
    <Layout>
      <AuthContainer>
        <SignInForm />
      </AuthContainer>
    </Layout>
  );
};

export default SignIn;
