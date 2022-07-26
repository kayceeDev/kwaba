import type { NextPage } from "next";
import Meta from "../components/Meta";
import PaymentPortal from "./payment";


const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <PaymentPortal/>
    </div>
  );
};

export default Home;
