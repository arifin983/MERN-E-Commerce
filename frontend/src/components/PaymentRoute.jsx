import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import React, { Fragment, useEffect } from 'react'
import { Outlet } from 'react-router-dom';

const PaymentRoute = () => {
  const [stripeApiKey, setStripeApiKey] = React.useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(()=>{
    getStripeApiKey()
  },[stripeApiKey])
  return (
    <Fragment>
       {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
        <Outlet/>
        </Elements>
      )}
    </Fragment>
  )
}

export default PaymentRoute