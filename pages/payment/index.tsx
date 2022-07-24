import { useState } from "react";
import UtilityButton from "../../components/Button";
import PageLayout from "../../components/layouts/layout";
import AccomodationStatus from "../../components/Payment/paymentForm.tsx/accomodationStatus";
import InputComponent from "../../components/Payment/paymentForm.tsx/input";
import MonthlyOption from "../../components/Payment/paymentForm.tsx/monthlyOption";
import ProgressCircle from "../../components/progressCircle";

const PaymentPortal = () => {
  const [progressState, setProgressState] = useState(1);
  const [progress, setProgress] = useState(3);

  const [data, setData] = useState({
    accomodationStatus: "",
    requestAmount: "",
    earningAmount: "",
    monthlyPlan: "",
  });

  // const handleStatusClick = (id: string, status: string) => {
  //     setIsActive(id);
  //     setForm({ ...form, status });
  //     if (!isStatusClicked) {
  //       setProgress((progress) => progress - 1);
  //       setProgressState((progressState) => progressState + 1);
  //       setIsStatusClicked(1);
  //     }
  //   };

  const handleChange = (e:any) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(e.target)
    setData({ ...data, [name]: value });
  };

  return (
    <PageLayout>
      <header className="form-header">
        <h2 className="primary-color">Payment Option</h2>
        <div className="progress">
          <span>{progressState} of 3</span>
          <ProgressCircle percentage={progress} />
        </div>
      </header>

      <AccomodationStatus
        accomodationStatus={data.accomodationStatus}
        handleChange={handleChange}
      />
      <InputComponent
        label="How much is your rent request amount?"
        name="requestAmount"
        amount={data.requestAmount}
        handleChange={handleChange}
      />
      <InputComponent
        label="How much do you earn monthly?"
        amount={data.earningAmount}
        name="earningAmount"
        handleChange={handleChange}
      />
      <MonthlyOption monthlyPlan={data.monthlyPlan} handleChange={handleChange} />
      <UtilityButton color="green" text={true ? "loading..." : "next"} />
    </PageLayout>
  );
};

export default PaymentPortal;
