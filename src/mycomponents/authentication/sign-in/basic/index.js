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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "mycomponents/authentication/components/BasicLayout";
import Socials from "mycomponents/authentication/components/Socials";
import Separator from "mycomponents/authentication/components/Separator";

import SatyamHolidaysLogo from "assets/images/logos/satyamholidays.png";


// Images
import curved9 from "assets/images/curved-images/curved9.jpg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout
      title="Satyam Intelligence Platform"
      description="Welcome! "
      image={curved9}
    >
      <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}>
        <SuiBox mb={2}>
          <SuiBox display="flex" justifyContent="center">
              <img src={SatyamHolidaysLogo}></img>
          </SuiBox>
        </SuiBox>
        </SuiBox>
        <SuiBox p={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput type="text" placeholder="SID" />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="password" placeholder="Password" />
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                customClass="cursor-pointer user-select-none"
              >
                &nbsp;&nbsp;Remember me
              </SuiTypography>
            </SuiBox>
            <Separator message={''} />
            <SuiBox mt={1} mb={3}>
              <SuiButton
                component={Link}
                to="/authentication/sign-up/basic"
                variant="gradient"
                buttonColor="dark"
                fullWidth
              >
                sign up
              </SuiButton>
            </SuiBox>
            <Separator message="Satyam Holidays" />
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
