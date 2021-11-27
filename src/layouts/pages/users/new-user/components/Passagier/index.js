import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// NewUser page components
import { Input } from "@mui/material";
import {useState} from 'react';

function UserInfo({requestBuilder,state }) {

  const ariaLabel = { "aria-label": "description" };

  const handleFirstName = (event)=>{
    requestBuilder({...state,firstName:event.target.value})
  }

  const handleLastName = (event)=>{
    requestBuilder({...state,lastName:event.target.value})
  }

  return (
    <SuiBox>
      <SuiBox lineHeight={0}>
        <SuiTypography variant="h5" fontWeight="bold">
          Nieuw HMPR Record
        </SuiTypography>
        <SuiTypography variant="button" fontWeight="regular" textColor="text">
          Verplichte Velden
        </SuiTypography>
      </SuiBox>
      <SuiBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div style={{ marginTop: "2px" }}>
              <SuiTypography variant="button" fontWeight="bold" textColor="text">
                Voornaam
              </SuiTypography>
              <Input placeholder="Voornaam" value={state.firstName} inputProps={ariaLabel} onChange={(event)=>{handleFirstName(event)}}/>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ marginTop: "2px" }}>
              <SuiTypography variant="button" fontWeight="bold" textColor="text">
                Achternaam
              </SuiTypography>
              <Input placeholder="Achternaam" value={state.lastName} inputProps={ariaLabel} onChange={(event)=>{handleLastName(event)}} />
            </div>
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
