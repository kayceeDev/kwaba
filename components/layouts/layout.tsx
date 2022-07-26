import { ReactNode } from "react";
import { Form, FormContainer } from "../styles";
import { MainContainer } from "./layoutStyles";


const PageLayout = ({approve, children,handleSubmit }: any) => {
  return (
    <MainContainer>
      <header className="header">
        <h3>My Rent</h3>
      </header>
      <FormContainer approve={approve}>
        <Form onSubmit={handleSubmit}  approve={approve}>{children}</Form>
      </FormContainer>
    </MainContainer>
  );
};

export default PageLayout;
