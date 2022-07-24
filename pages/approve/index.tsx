import { useRouter } from "next/router"
import PaymentOption from "../../components/approve/payment-options"
import UtilityButton from "../../components/Button"
import PageLayout from "../../components/layouts/layout"
import InputComponent from "../../components/Payment/paymentForm.tsx/input"
import MonthlyOption from "../../components/Payment/paymentForm.tsx/monthlyOption"
import { useAppDispatch, useAppSelector } from "../../hooks/setup"
import { payment } from "../../store/slice/paymentSlice"

const Approval = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
 userDetails
  } = useAppSelector(payment);


  const onChangeInput = (e) => {
    dispatch(changeRentAmount({ rentAmount: e.target.value }));
  };

  const updateMonthly = (plan) => {
    dispatch(changeMonthlyPlan({ monthlyPlan: plan }));
  };

    return (
      <PageLayout approve="approve">
            <h2 className="primary-color">Payment Breakdown</h2>
            <InputComponent
        label="How much is your rent request amount?"
        name="requestAmount"
        amount={userDetails.requestAmount}
        handleChange={handleChange}
      />
            <MonthlyOption/>
            <PaymentOption/>
            <UtilityButton color="purple" text={true ? "loading..." : "next"} />

      </PageLayout>
    )
  }
  
  export default Approval