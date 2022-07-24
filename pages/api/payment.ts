import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {accomodationStatus, requestAmount, earningAmount, monthlyPlan} = req.body;
  const monthlyPayment = requestAmount/parseInt(monthlyPlan.split(' ')[0]) +  requestAmount * 0.02;

  if(!accomodationStatus|| !requestAmount || !earningAmount || !monthlyPlan) {
     res.status(400).json({message: 'Some deatils are missing'});
     return; 
  }


  res.status(200).json({
    message: 'Details was sent for pre-Approval',
    data: {
      accomodationStatus,
      requestAmount,
      earningAmount,
      monthlyPlan,
      monthlyPayment,
    }

  });
}