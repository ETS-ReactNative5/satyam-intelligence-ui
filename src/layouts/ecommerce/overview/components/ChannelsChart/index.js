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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiBadgeDot from "components/SuiBadgeDot";
import PieChart from "examples/Charts/PieChart";

// Data
import channelChartData from "layouts/ecommerce/overview/components/ChannelsChart/data";

function ChannelsChart() {
  return (
    <Card className="overflow-visible">
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6">Channels</SuiTypography>
        <Tooltip title="See traffic channels" placement="bottom" arrow>
          <SuiButton variant="outlined" buttonColor="secondary" size="small" circular iconOnly>
            <Icon className="">priority_high</Icon>
          </SuiButton>
        </Tooltip>
      </SuiBox>
      <SuiBox p={2} mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="100%" />
          </Grid>
          <Grid item xs={5}>
            <SuiBox px={1}>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="info" badgeContent="Facebook" />
              </SuiBox>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="primary" badgeContent="Direct" />
              </SuiBox>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="dark" badgeContent="Organic" />
              </SuiBox>
              <SuiBox mb={0.5}>
                <SuiBadgeDot color="secondary" badgeContent="Referral" />
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
      <SuiBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
        <SuiBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <SuiTypography variant="button" textColor="text" fontWeight="regular">
            More than <strong>1,200,000</strong> developers used Creative Tim&apos;s products and
            over <strong>700,000</strong> projects were created.
          </SuiTypography>
        </SuiBox>
        <SuiBox width={{ xs: "100%", sm: "40%" }} textAlign="right" mt={{ xs: 2, sm: "auto" }}>
          <SuiButton buttonColor="light">read more</SuiButton>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default ChannelsChart;
