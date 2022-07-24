import type { NextPage } from "next";
import Meta from "../components/Meta";
import AccomodationStatus from "../components/Payment/paymentForm.tsx/accomodationStatus";
import InputComponent from "../components/Payment/paymentForm.tsx/input";
import MonthlyOption from "../components/Payment/paymentForm.tsx/monthlyOption";
import UtilityButton from "../components/Button";

const Home: NextPage = () => {
  return (
    <div className={""}>
      <Meta />
      <AccomodationStatus />
      <InputComponent label={"hellllo"} />
      <InputComponent label={"hello 2"} />
      <MonthlyOption />
      <UtilityButton color="green" text={true ? "loading..." : "next"} />
    </div>
  );
};

export default Home;
