import { useState, useEffect } from "views/Hmpr/NewHmpr/components/Specificatie/node_modules/react";
import PropTypes from "views/Hmpr/NewHmpr/components/Specificatie/node_modules/prop-types";

// @mui material components
import Grid from "views/Hmpr/NewHmpr/components/Specificatie/node_modules/@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "views/Hmpr/HmprOverview/node_modules/components/SuiBoxr/components/Specificatie/node_modules/components/SuiBox";
import SuiTypography from "views/Hmpr/HmprOverview/node_modules/components/SuiTypographynents/Specificatie/node_modules/components/SuiTypography";

// NewUser page components
import FormField from "views/Hmpr/NewHmpr/components/Specificatie/node_modules/layouts/pages/users/new-user/components/FormField";
import { Divider } from "views/Hmpr/NewHmpr/components/Specificatie/node_modules/@mui/material";

function Profile({ formData, requestBuilder, state }) {
  const { formField, values } = formData;
  const { publicEmail, fare, tax, commissionInPercentage } = formField;

  const [fareAmount, setFareAmount] = useState("");
  const [taxAmount, setTaxAmount] = useState("");
  const [commissionInPercentageAmount, setCommissionInPercentageAmount] = useState("");
  const [receviedAmount, setReceivedAmount] = useState("");

  const [totalAmount, setTotalAmount] = useState(0);
  const [commissionInValue, setCommissionInValue] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [profit, setProfit] = useState("");

  useEffect(async()=>{
    if(state.commissionInPercentage && state.fare){
      const commissionInValue = ((parseToFloat(state.commissionInPercentage.split("%")[0]) / 100) * state.fare).toFixed(2);
      setCommissionInValue(commissionInValue);
    }
    if(state.fare && state.tax){
      const totalAmount = (parseToFloat(state.fare) + parseToFloat(state.tax)).toFixed(2);
      setTotalAmount(totalAmount);
    }
    if(state.fare && state.tax && state.commissionInPercentage){
      const amountToPay = ((parseToFloat(state.fare) + parseToFloat(state.tax)) - ((parseToFloat(state.commissionInPercentage.split("%")[0]) / 100) * state.fare)).toFixed(2);
      setAmountToPay(amountToPay);    
    }
    if(state.amountReceived && state.fare && state.tax && state.commissionInPercentage){
      const profit = (state.amountReceived) - (parseToFloat(state.fare) + parseToFloat(state.tax) - ((parseToFloat(state.commissionInPercentage.split("%")[0]) / 100) * state.fare)).toFixed(2)
      setProfit(profit);
    }
  },[state.fare, state.tax, state.commissionInPercentage, state.amountReceived]);

  const handleFare = (event) => {
    requestBuilder({ ...state, fare: event.target.value });
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
              type={fare.type}
              label={fare.label}
              name={fare.name}
              value={state.fare}
              placeholder={fare.placeholder}
              onChange={handleFare}
            />
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
          {totalAmount !== 0 && (
            <SuiTypography variant="button" fontWeight="bold" textColor="text">
            Totaal: {state.currency} {" "} {totalAmount}
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

Profile.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Profile;
