import axios from 'axios';
import getAxiosInstance from '../../services/axios';

interface userDetails{
  accomodationStatus: string
  requestAmount: string;
  earningAmount: string;
  monthlyPlan: string;
}


// register details
const payment = async (userDetails: userDetails) => {
  const response = await axios.post(`api/payment`, userDetails);
  return response.data;
};

// Update details
const updatePayment = async (userDetails: userDetails) => {
  const response = await axios.post(`api/update-pyment`, userDetails);
  return response.data;
};


const services = {
  payment,
  updatePayment
}

export default services
