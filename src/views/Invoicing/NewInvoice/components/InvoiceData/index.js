import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// NewUser page components
import { Input, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import SuiInput from "components/SuiInput";
import FormField from "layouts/applications/wizard/components/FormField";

function InvoiceData({ requestBuilder, state }) {

  // const handleCountry = (event)=>{
  //   requestBuilder({...state,country:event.target.value})
  // }

  // const handleType = (event)=>{
  //   requestBuilder({...state,type:event.target.value})
  // }

  const handleCustomerName = (event) => {
    requestBuilder({ ...state, customerName: event.target.value });
  };
  const handleCustomerEmail = (event) => {
    requestBuilder({ ...state, email: event.target.value });
  };

  return (
    <SuiBox>
      <SuiBox lineHeight={0}>
        <SuiTypography variant="h5" fontWeight="bold">
          Nieuw Invoice
        </SuiTypography>
        <SuiTypography variant="button" fontWeight="regular" textColor="text">
          Verplichte Velden
        </SuiTypography>
      </SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div style={{ marginTop: "2px" }}>
              <FormField
              type={"text"}
              label={"Klant naam:"}
              name={"klantNaam"}
              value={state.customerName}
              placeholder={"John Doe"}
              onChange={handleCustomerName}
            />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ marginTop: "2px" }}>
              <FormField
              type={"text"}
              label={"Klant Email Adres:"}
              name={"klantEmailAdres"}
              value={state.email}
              placeholder={"john.doe@satyamholidays.net"}
              onChange={handleCustomerEmail}
            />
            </div>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for UserInfo
InvoiceData.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default InvoiceData;
