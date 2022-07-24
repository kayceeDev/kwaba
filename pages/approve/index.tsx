import { useRouter } from "next/router"
import PaymentOption from "../../components/approve/payment-options"
import UtilityButton from "../../components/Button"
import PageLayout from "../../components/layouts/layout"
import InputComponent from "../../components/Payment/paymentForm.tsx/input"
import MonthlyOption from "../../components/Payment/paymentForm.tsx/monthlyOption"
import { useAppDispatch, useAppSelector } from "../../hooks/setup"
import { changeMonthlyPlan, changeRentAmount, payment } from "../../store/slice/paymentSlice"

const Approval = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
 userDetails,
 isLoaded
  } = useAppSelector(payment);


  const handleInputChange = (e:any) => {
    dispatch(changeRentAmount({ rentAmount: e.target.value }));
  };

  const handleChange = (e:any) => {
    dispatch(changeMonthlyPlan({ monthlyPlan: e.target.value }));
  };

    return (
      <PageLayout approve="approve">
            <h2 className="primary-color">Payment Breakdown</h2>
            <InputComponent
        label="How much is your rent request amount?"
        name="requestAmount"
        amount={userDetails.requestAmount}
        handleChange={handleInputChange}
      />
            <MonthlyOption type="handleMonthly" handleChange={handleChange}/>
            <PaymentOption/>
            <UtilityButton color="purple" text={isLoaded ? "loading..." : "Approve"} />

      </PageLayout>
    )
  }
  
  export default Approval