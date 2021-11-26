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
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

function ReferralCode() {
  const { secondary } = colors;
  const { borderWidth } = borders;

  return (
    <>
      <SuiBox lineHeight={1}>
        <SuiTypography variant="h6" fontWeight="medium">
          Referral Code
        </SuiTypography>
        <SuiTypography variant="button" fontWeight="regular" textColor="text">
          Copy the code bellow to your registered provider.
        </SuiTypography>
      </SuiBox>
      <SuiBox
        borderRadius="md"
        border={`${borderWidth[1]} dashed ${secondary.main}`}
        pt={2}
        pb={1.5}
        px={2}
        mt={2}
      >
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Generated 23 days ago by <span className="font-bold">softuidash23</span>
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text" fontWeight="bold">
            (Used one time)
          </SuiTypography>
        </SuiBox>
        <SuiBox display="flex" alignItems="center" mb={2}>
          <SuiBox width="70%" mr={1}>
            <SuiInput
              size="small"
              defaultValue="soft-ui-dashboard-vmsk392"
              withIcon={{ icon: "lock", direction: "right" }}
              inputProps={{ disabled: true }}
              disabled
            />
          </SuiBox>
          <Tooltip title="Referral code expires in 24 hours" placement="top">
            <SuiButton
              variant="outlined"
              buttonColor="secondary"
              size="small"
              sx={{ padding: "0.5rem 1rem" }}
            >
              copy
            </SuiButton>
          </Tooltip>
        </SuiBox>
        <SuiBox mb={0.5} lineHeight={1.2}>
          <SuiTypography component="p" variant="caption" textColor="text">
            You cannot generate codes.
          </SuiTypography>
          <SuiTypography variant="caption" textColor="text">
            <a href="#link" className="link">
              Contact us
            </a>{" "}
            to generate more referrals link.
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </>
  );
}

export default ReferralCode;
