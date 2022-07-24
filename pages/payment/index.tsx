import { useState } from "react";
import UtilityButton from "../../components/Button";
import AccomodationStatus from "../../components/Payment/paymentForm.tsx/accomodationStatus";
import InputComponent from "../../components/Payment/paymentForm.tsx/input";
import MonthlyOption from "../../components/Payment/paymentForm.tsx/monthlyOption";
import ProgressCircle from "../../components/progressCircle";
import { Form,FormContainer } from "./styles";

const PaymentPortal = () => {
    const [progressState, setProgressState] = useState(0);
    const [progress, setProgress] = useState(3);

    // const handleStatusClick = (id: string, status: string) => {
    //     setIsActive(id);
    //     setForm({ ...form, status });
    //     if (!isStatusClicked) {
    //       setProgress((progress) => progress - 1);
    //       setProgressState((progressState) => progressState + 1);
    //       setIsStatusClicked(1);
    //     }
    //   };
  return (
    <>
    <header className="header">
        <h3>My Rent</h3>
    </header>
    <FormContainer>
    <Form>
        <header className="form-header">
            <h2>Payment Option</h2>
            <div className="progress">
            <span>{progressState} of 3</span>
            <ProgressCircle percentage={progress} />
          </div>
        </header>
       
        <AccomodationStatus/>
        <InputComponent label="How much is your rent request amount?"/>
        <InputComponent label="How much do you earn monthly?"/>
        <MonthlyOption/>
        <UtilityButton color="green" text={true ? "loading..." : "next"} />
        </Form>
        
    </FormContainer>
    </>
  )
}

export default PaymentPortal
