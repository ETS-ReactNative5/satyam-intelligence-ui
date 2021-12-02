
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

import { Select, MenuItem, Switch } from "@mui/material";
import SuiInput from "components/SuiInput";

function Betaling({ formData, requestBuilder,state }) {
  const { formField, values, errors, touched } = formData;
  const { twitter, facebook, instagram } = formField;
  const { twitter: twitterV, facebook: facebookV, instagram: instagramV } = values;

  const handlePaymentMethod = (event)=>{
    requestBuilder({...state,paymentMethod:event.target.value})
  }

  const handleTicketIssuedIn = (event)=>{
    requestBuilder({...state,ticketIssuedIn:event.target.value})
  }

  const handleIsPaid = (event)=>{
    requestBuilder({...state,isPaid:event.target.checked})
  }

  

  return (
    <SuiBox>
      <SuiTypography variant="h5" fontWeight="bold">
        Betaling Informatie
      </SuiTypography>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Betalings Methode
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.paymentMethod} onChange={handlePaymentMethod}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="CASH">Cash</MenuItem>
              <MenuItem value="BANK">Bank</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sm={4}>
            <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Ticket uitgegeven in
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.ticketIssuedIn} onChange={handleTicketIssuedIn}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="SURINAME">Suriname</MenuItem>
              <MenuItem value="NEDERLAND">Nederland</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sm={2}>
            <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Is betaald
              </SuiTypography>
            </SuiBox>
            <SuiBox ml={0.5} mb={0.25}>
              <Switch onChange={handleIsPaid} checked={state.isPaid}/>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for Socials
Betaling.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Betaling;
