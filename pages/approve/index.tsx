import PaymentOption from "../../components/approve/payment-options"
import UtilityButton from "../../components/Button"
import PageLayout from "../../components/layouts/layout"
import InputComponent from "../../components/Payment/paymentForm.tsx/input"
import MonthlyOption from "../../components/Payment/paymentForm.tsx/monthlyOption"

const Approval = () => {
    return (
      <PageLayout approve="approve">
            <h2 className="primary-color">Payment Breakdown</h2>
            <InputComponent label="Rent request amount" approve={"approve"}/>
            <MonthlyOption/>
            <PaymentOption/>
            <UtilityButton color="purple" text={true ? "loading..." : "next"} />

      </PageLayout>
    )
  }
  
  export default Approval