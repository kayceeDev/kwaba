import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    accomodationStatus,
    requestAmount,
    earningAmount,
    monthlyPlan,
    monthlyPayment,
  
  } = req.body;

  if (
    !accomodationStatus ||
    !requestAmount ||
    !earningAmount ||
    !monthlyPlan ||
    !monthlyPayment
  ) {
    res.status(400).json({ error: "Some fields are missing" });
    return;
  }

  res.status(200).json({
    error: "Details has been successfully Approved",
    data: {
      accomodationStatus,
      requestAmount,
      earningAmount,
      monthlyPlan,
      monthlyPayment,
    },
  });
}