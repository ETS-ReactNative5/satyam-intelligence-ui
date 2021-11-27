/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Address({ formData, requestBuilder,state }) {
  const { formField, values, errors, touched } = formData;
  const { zip } = formField;
  const {gdsProvider:gdsProviderV, address1: address1V, address2: address2V, city: cityV, zip: zipV } = values;


  const handleGdsProviderState = (event)=>{
    requestBuilder({...state,gdsProvider:event.target.value})
  }

  const handleSoldTicketInBranch = (event)=>{
    requestBuilder({...state,branchSold:event.target.value})
  }

  const handleAirline = (event)=>{
    requestBuilder({...state,airline:event.target.value})
  }

  const handleCurrency = (event)=>{
    requestBuilder({...state,currency:event.target.value})
  }

  return (
    <SuiBox>
      <SuiTypography variant="h5" fontWeight="bold">
        Systeem Informatie
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
                GDS Provider
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.gdsProvider} onChange={handleGdsProviderState}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="AMADEUS">Amadeus</MenuItem>
              <MenuItem value="GALILEO">Galileo</MenuItem>
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
                Verkocht in
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.branchSold}  onChange={handleSoldTicketInBranch}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="Hoofd Filiaal">Hoofd Filiaal</MenuItem>
              <MenuItem value="Filiaal Commewijne">Filiaal Commewijne</MenuItem>
              <MenuItem value="Filiaal Pad Van Wanica">Filiaal Pad Van Wanica</MenuItem>
              <MenuItem value="Filiaal Nickerie">Filiaal Nickerie</MenuItem>
              <MenuItem value="Filiaal Combe">Filiaal Combe</MenuItem>
              <MenuItem value="Filiaal Den Haag">Filiaal Den Haag</MenuItem>
              <MenuItem value="Filiaal Curacao">Filiaal Curacao</MenuItem>
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
                Airline
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.airline} onChange={handleAirline} >
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="SLM">SLM</MenuItem>
              <MenuItem value="KLM">KLM</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sm={2}>
          <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Munteenheid
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.currency} onChange={handleCurrency}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="USD">($)USD</MenuItem>
              <MenuItem value="EUR">(€)EURO</MenuItem>
            </Select>
          </Grid>
          
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
