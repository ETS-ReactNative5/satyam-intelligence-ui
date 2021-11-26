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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";

// Custom styles for the Sessions
import styles from "layouts/pages/account/settings/components/Sessions/styles";

function Sessions() {
  const classes = styles();

  return (
    <Card id="sessions">
      <SuiBox p={3} lineHeight={1}>
        <SuiBox mb={1}>
          <SuiTypography variant="h5">Sessions</SuiTypography>
        </SuiBox>
        <SuiTypography variant="button" textColor="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove those that you do not
          recognize.
        </SuiTypography>
      </SuiBox>
      <SuiBox pb={3} px={3} customClass="overflow-auto">
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <SuiBox display="flex" alignItems="center">
            <SuiBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon className="" fontSize="default">
                desktop_windows
              </Icon>
            </SuiBox>
            <SuiBox height="100%" ml={2} lineHeight={1.4} mr={2}>
              <SuiTypography display="block" variant="button" fontWeight="regular" textColor="text">
                Bucharest 68.133.163.201
              </SuiTypography>
              <SuiTypography variant="caption" textColor="text">
                Your current session
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
            <SuiBadge
              variant="contained"
              size="extra-small"
              badgeContent="active"
              color="success"
              container
            />
            <SuiBox mx={2} lineHeight={1}>
              <SuiTypography variant="button" textColor="secondary" fontWeight="regular">
                EU
              </SuiTypography>
            </SuiBox>
            <SuiTypography
              component="a"
              href="#"
              variant="button"
              textColor="info"
              fontWeight="regular"
              customClass={classes.session_action}
            >
              See more&nbsp;
              <Icon className=" font-bold vertical-middle">arrow_forward</Icon>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Divider />
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <SuiBox display="flex" alignItems="center" mr={2}>
            <SuiBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon className="" fontSize="default">
                desktop_windows
              </Icon>
            </SuiBox>
            <SuiBox ml={2}>
              <SuiTypography display="block" variant="body2" fontWeight="regular" textColor="text">
                Chrome on macOS
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
            <SuiBox mx={2} lineHeight={1}>
              <SuiTypography variant="button" textColor="secondary" fontWeight="regular">
                US
              </SuiTypography>
            </SuiBox>
            <SuiTypography
              component="a"
              href="#"
              variant="button"
              textColor="info"
              fontWeight="regular"
              customClass={classes.session_action}
            >
              See more&nbsp;
              <Icon className=" font-bold vertical-middle">arrow_forward</Icon>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <Divider />
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <SuiBox display="flex" alignItems="center" mr={2}>
            <SuiBox textAlign="center" color="text" px={{ xs: 0, md: 1.5 }} opacity={0.6}>
              <Icon className="" fontSize="default">
                phone_iphone
              </Icon>
            </SuiBox>
            <SuiBox ml={2}>
              <SuiTypography display="block" variant="body2" fontWeight="regular" textColor="text">
                Safari on iPhone
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox display="flex" alignItems="center">
            <SuiBox mx={2} lineHeight={1}>
              <SuiTypography variant="button" textColor="secondary" fontWeight="regular">
                US
              </SuiTypography>
            </SuiBox>
            <SuiTypography
              component="a"
              href="#"
              variant="button"
              textColor="info"
              fontWeight="regular"
              customClass={classes.session_action}
            >
              See more&nbsp;
              <Icon className=" font-bold vertical-middle">arrow_forward</Icon>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Sessions;
