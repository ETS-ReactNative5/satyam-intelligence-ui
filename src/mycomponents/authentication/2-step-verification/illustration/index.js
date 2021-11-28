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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import chat from "assets/images/illustrations/danger-chat-ill.png";

function Illustration() {
  return (
    <IllustrationLayout
      color="warning"
      header={
        <SuiBox px={5} textAlign="center">
          <SuiTypography variant="h2" fontWeight="bold">
            2-Step Verification
          </SuiTypography>
        </SuiBox>
      }
      illustration={{
        image: chat,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <Grid container spacing={2}>
            <Grid item xs>
              <SuiInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <SuiInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <SuiInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
            <Grid item xs>
              <SuiInput size="large" inputProps={{ maxLength: 1 }} />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={2}>
          <SuiButton variant="gradient" buttonColor="warning" fullWidth>
            send code
          </SuiButton>
        </SuiBox>
        <SuiBox textAlign="center">
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            Haven&apos;t received it?{" "}
            <a href="#verification" className="link">
              Resend a new code
            </a>
            .
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </IllustrationLayout>
  );
}

export default Illustration;
