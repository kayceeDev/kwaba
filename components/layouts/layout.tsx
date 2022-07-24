import { ReactNode } from "react";
import { Form, FormContainer } from "../../pages/payment/styles";
import { MainContainer } from "./layoutStyles";

const PageLayout = ({approve, children }: any) => {
  return (
    <MainContainer>
      <header className="header">
        <h3>My Rent</h3>
      </header>
      <FormContainer approve={approve}>
        <Form  approve={approve}>{children}</Form>
      </FormContainer>
    </MainContainer>
  );
};

export default PageLayout;
