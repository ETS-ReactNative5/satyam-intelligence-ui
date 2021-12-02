import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

import SuiTypography from "components/SuiTypography";

// NewUser page components
import { Divider, Input } from "@mui/material";
import FormField from "layouts/pages/users/new-user/components/FormField";

function Specificatie({ formData, requestBuilder, state }) {
  const { formField, values } = formData;
  const { fare, tax, commissionInPercentage } = formField; 

  const [fareAmount, setFareAmount] = useState(null);
  const [taxAmount, setTaxAmount] = useState("");
  const [commissionInPercentageAmount, setCommissionInPercentageAmount] = useState("");
  const [receviedAmount, setReceivedAmount] = useState("");

  const [totalAmount, setTotalAmount] = useState(null);
  const [commissionInValue, setCommissionInValue] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [profit, setProfit] = useState("");


  useEffect(async()=>{
    if(state.totalAmount && state.tax){
      const basicFare = (parseToFloat(state.totalAmount) - parseToFloat(state.tax)).toFixed(2);
      setFareAmount(basicFare);
      handleFare(basicFare);
    }
    if(state.commissionInPercentage && fareAmount){
      const commissionInValue = ((parseToFloat(state.commissionInPercentage.split("%")[0]) / 100) * fareAmount).toFixed(2);
      setCommissionInValue(commissionInValue);
    }
    if(fareAmount && state.tax && state.commissionInPercentage){
      const amountToPay = ((parseToFloat(fareAmount) + parseToFloat(state.tax)) - ((parseToFloat(state.commissionInPercentage.split("%")[0]) / 100) * fareAmount)).toFixed(2);
      setAmountToPay(amountToPay);    
    }
    if(state.amountReceived && fareAmount && state.tax && state.commissionInPercentage){
      const profit = (state.amountReceived) - (parseToFloat(fareAmount) + parseToFloat(state.tax) - ((parseToFloat(state.commissionInPercentage.split("%")[0]) / 100) * fareAmount)).toFixed(2)
      setProfit(profit);
    }
  },[fareAmount, state.tax, state.commissionInPercentage, state.amountReceived, state.totalAmount]);

  const handleTotal = (event)=>{
    requestBuilder({ ...state, totalAmount:event.target.value });
  }

  const handleFare = (fare) => {
    requestBuilder({ ...state, fare });
  };

  const handleTax = (event) => {
    requestBuilder({ ...state, tax: event.target.value });
  };

  const handleCommissionInPercentage = (event) => {
    requestBuilder({ ...state, commissionInPercentage: event.target.value + "%" });
  };

  const handleAmountReceived = (event) => {
    requestBuilder({ ...state, amountReceived: event.target.value });
  };

  const parseToFloat = (value) => {
    return (value / 100) * 100;
  };


  return (
    <SuiBox>
      <SuiTypography variant="h5" fontWeight="bold">
        Specificatie in {state.currency}
      </SuiTypography>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
          <FormField
              type={tax.type}
              label={'Total Amount'}
              name={'totalAmount'}
              placeholder={'Total Amount'}
              placeholder={`${state.currency ? state.currency : ''} Total Amount`} 
              value={state.totalAmount} 
              onChange={(event)=>{handleTotal(event)}}
            />
          {/* <SuiTypography variant="button" fontWeight="bold" textColor="text">
            Total Amount({state.currency})
              </SuiTypography>
              <Input placeholder={`${state.currency ? state.currency : ''} Total Amount`} value={totalAmount} inputProps={ariaLabel} onChange={(event)=>{handleTotal(event)}}/> */}
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type={tax.type}
              label={tax.label}
              name={tax.name}
              value={state.tax}
              placeholder={tax.placeholder}
              onChange={handleTax}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type={commissionInPercentage.type}
              label={commissionInPercentage.label}
              name={commissionInPercentage.name}
              value={state.commissionInPercentage}
              placeholder={commissionInPercentage.placeholder}
              onChange={handleCommissionInPercentage}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type={"text"}
              label={"Ontvangen Bedrag"}
              name={"amountReceived"}
              value={state.amountReceived}
              placeholder={"Ontvagen Bedrag"}
              onChange={handleAmountReceived}
            />
          </Grid>
        </Grid>
        <Divider />
        <div>
          {fareAmount && (
            <SuiTypography variant="button" fontWeight="bold" textColor="text">
            Basic Fare: {state.currency} {" "} {fareAmount}
          </SuiTypography>
          )}
        </div>
        <div>
          {commissionInValue && (
            <SuiTypography variant="button" fontWeight="bold" textColor="text">
            Commissie in bedrag: {state.currency}{" "}{commissionInValue}
          </SuiTypography>
          )}
        </div>
        <div>
          {amountToPay && (
            <SuiTypography variant="button" fontWeight="bold" textColor="text">
            Bedrag door te betalen: {state.currency} {" "} {amountToPay}
          </SuiTypography>
          )}
        </div>
        <div>
          {profit  && (
            <SuiTypography variant="button" fontWeight="bold" textColor="text">
            Winst: {state.currency} {" "} {profit.toFixed(2)}
          </SuiTypography>
          )}
        </div>
        <Divider />
      </SuiBox>
    </SuiBox>
  );
}

Specificatie.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Specificatie;
