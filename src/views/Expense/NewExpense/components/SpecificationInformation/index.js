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
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import SuiEditor from "components/SuiEditor";

// NewUser page components

function SpecificationInformation({ formData, requestBuilder,state }) {
  const { formField, values, errors, touched } = formData;
  const { zip } = formField;
  const {gdsProvider:gdsProviderV, address1: address1V, address2: address2V, city: cityV, zip: zipV } = values;

  const handleAmount = (event)=>{
    requestBuilder({...state,amount:event.target.value})
  }

  const handleNotes = (event)=>{
    requestBuilder({...state,notes:event.target.value})
  }

  const handleCurrency = (event)=>{
    requestBuilder({...state,currency:event.target.value})
  }

  return (
    <SuiBox>
      <SuiTypography variant="h5" fontWeight="bold">
        Specification
      </SuiTypography>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SuiTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Currency
              </SuiTypography>
            </SuiBox>
            <Select input={<SuiInput />} value={state.currency}  onChange={handleCurrency}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="EUR">(€)EURO</MenuItem>
              <MenuItem value="USD">($)USD</MenuItem>
              <MenuItem value="SRD">SRD</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} sm={6}>
          <FormField
              type={"text"}
              label={"amount"}
              name={"amount"}
              value={state.amount}
              placeholder={"e.g 450"}
              onChange={handleAmount}
            />
          </Grid>
          <Grid item xs={3} sm={12}>
          <FormField
              type={"text"}
              label={"notes"}
              name={"notes"}
              value={state.notes}
              placeholder={"Notes"}
              onChange={handleNotes}
            />
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for Address
SpecificationInformation.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default SpecificationInformation;
