import React from 'react'
import { PaymentOptionWrapper } from './styles'
import numeral from 'numeral'

const PaymentOption = () => {

const value = numeral(200000).format("0,0")
  return (
    <PaymentOptionWrapper>
    <p className="text">Payment option</p>
    <div className="options">
        <div className="option">
            <p className="text">Pre-approved amount</p>
            <p className='amount text'>
              {value}
                </p>
        </div>
        <div className="option">
            <p className="text">Pre-approved amount </p>
            <p className='amount text'>
            {value}
                </p>
        </div>
        <div className="option">
            <p className="text">Pre-approved amount</p>
            <p className='amount text'>
            {value}
                </p>
        </div>
    </div>
    </PaymentOptionWrapper>
  )
}

export default PaymentOption