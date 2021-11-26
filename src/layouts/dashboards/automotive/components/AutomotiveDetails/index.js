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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Images
import mercedesEQC from "assets/images/mercedes-eqc.png";
import wavesWhite from "assets/images/shapes/waves-white.svg";

function AutomotiveDetails() {
  return (
    <SuiBox
      position="relative"
      backgroundColor="secondary"
      py={3}
      px={{ xs: 3, sm: 6 }}
      mt={3}
      borderRadius="xl"
      backgroundGradient
    >
      <SuiBox
        component="img"
        src={wavesWhite}
        alt="pattern-line"
        width="100%"
        position="absolute"
        left="0"
        top="0"
        opacity={0.4}
      />
      <Grid container alignItems="center" position="relative">
        <Grid item xs={12} lg={3}>
          <SuiBox px={{ xs: 0, md: 1.5 }}>
            <SuiTypography variant="h4" textColor="white" textTransform="capitalize" opacity={0.9}>
              since last charge
            </SuiTypography>
            <Divider light />
            <SuiBox display="flex">
              <SuiBox>
                <SuiTypography
                  variant="h6"
                  textColor="white"
                  textTransform="capitalize"
                  opacity={0.7}
                >
                  distance
                </SuiTypography>
                <SuiTypography variant="h3" fontWeight="bold" textColor="white">
                  145{" "}
                  <SuiTypography variant="button" textColor="white" verticalAlign="top">
                    Km
                  </SuiTypography>
                </SuiTypography>
              </SuiBox>
              <SuiBox ml={{ xs: 3, md: 8 }} mb={{ xs: 1, md: 0 }}>
                <SuiTypography
                  variant="h6"
                  textColor="white"
                  textTransform="capitalize"
                  opacity={0.7}
                >
                  average energy
                </SuiTypography>
                <SuiTypography variant="h3" fontWeight="bold" textColor="white">
                  300{" "}
                  <SuiTypography variant="button" textColor="white" verticalAlign="top">
                    Kw
                  </SuiTypography>
                </SuiTypography>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={6}>
          <SuiBox textAlign="center">
            <SuiBox
              component="img"
              src={mercedesEQC}
              alt="car image"
              display={{ xs: "none", md: "block" }}
              width="auto"
              mt={{ xs: 0, lg: -16 }}
            />
            <SuiBox
              display="flex"
              justifyContent={{ xs: "flex-start", md: "center" }}
              alignItems="center"
              mb={1}
            >
              <SuiTypography
                variant="h4"
                textColor="white"
                textTransform="capitalize"
                opacity={0.7}
              >
                available range
              </SuiTypography>
              <SuiBox ml={1}>
                <SuiTypography variant="h2" fontWeight="bold" textColor="white">
                  70
                  <SuiTypography
                    variant="button"
                    fontWeight="bold"
                    textColor="white"
                    verticalAlign="top"
                  >
                    %
                  </SuiTypography>
                </SuiTypography>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SuiBox px={{ xs: 0, md: 1.5 }}>
            <SuiTypography variant="h4" textColor="white" textTransform="capitalize" opacity={0.9}>
              nearest charger
            </SuiTypography>
            <Divider light />
            <SuiBox display="flex">
              <SuiBox>
                <SuiTypography variant="h6" textColor="white">
                  Miclan, DW
                </SuiTypography>
                <SuiTypography variant="h6" textColor="white">
                  891 Limarenda road
                </SuiTypography>
              </SuiBox>
              <SuiBox ml={8}>
                <SuiButton variant="outlined" circular iconOnly>
                  <Icon className="">map</Icon>
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </SuiBox>
        </Grid>
      </Grid>
    </SuiBox>
  );
}

export default AutomotiveDetails;
