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

function ExpenseData({ requestBuilder, state }) {

  const handleCountry = (event)=>{
    requestBuilder({...state,country:event.target.value})
  }

  const handleType = (event)=>{
    requestBuilder({...state,type:event.target.value})
  }

  const handleName = (event) => {
    requestBuilder({ ...state, name: event.target.value });
  };

  return (
    <SuiBox>
      <SuiBox lineHeight={0}>
        <SuiTypography variant="h5" fontWeight="bold">
          New Expense
        </SuiTypography>
        <SuiTypography variant="button" fontWeight="regular" textColor="text">
          Verplichte Velden
        </SuiTypography>
      </SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div style={{ marginTop: "2px" }}>
              <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Country
                </SuiTypography>
              </SuiBox>
              <Select
                input={<SuiInput />}
                value={state.country}
                onChange={handleCountry}
              >
                <MenuItem value="...">...</MenuItem>
                <MenuItem value="NEDERLAND">Nederland</MenuItem>
                <MenuItem value="SURINAME">Suriname</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ marginTop: "2px" }}>
            <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SuiTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Type
                </SuiTypography>
              </SuiBox>
              <Select
                input={<SuiInput />}
                value={state.type}
                onChange={handleType}
              >
                <MenuItem value="...">...</MenuItem>
                <MenuItem value="SALARIS">Salaris</MenuItem>
                <MenuItem value="TELEFOONKOSTEN">Telefoonkosten</MenuItem>
                <MenuItem value="HUISVESTINGSKOSTEN">Huisvestingskosten</MenuItem>
                <MenuItem value="ABONNEMENTEN">Abonnementen</MenuItem>
                <MenuItem value="RECLAMEKOSTEN">Reclamekosten</MenuItem>
                <MenuItem value="AFLOSSING">Aflossing</MenuItem>
                <MenuItem value="ADMINISTRATIEKOSTEN">Administratiekosten</MenuItem>
                <MenuItem value="VERVOERKOSTEN">Vervoerskosten</MenuItem>
                <MenuItem value="PINTRANSACTIEKOSTEN">Pintransaciekosten</MenuItem>
                <MenuItem value="KANTINEKOSTEN">Kantinekosten</MenuItem>
                <MenuItem value="DONATIE">Donatie</MenuItem>
                <MenuItem value="OTHER">Other</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ marginTop: "2px" }}>
              <FormField
              type={"text"}
              label={"Expense name"}
              name={"expenseName"}
              value={state.name}
              placeholder={"e.g Huur/Telesur/EBS"}
              onChange={handleName}
            />
            </div>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for UserInfo
ExpenseData.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ExpenseData;
