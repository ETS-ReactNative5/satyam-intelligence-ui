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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React base styles
import borders from "assets/theme/base/borders";

// Custom styles for OutlinedCard
import styles from "layouts/ecommerce/referral/components/OutlinedCard/styles";

// Images
import rocketShip from "assets/images/illustrations/rocket-white.png";

function OutlinedCard() {
  const { borderWidth, borderColor } = borders;
  const classes = styles();

  return (
    <SuiBox
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      borderRadius="xl"
      boxShadow="xxl"
      border={`${borderWidth[1]} dashed ${borderColor}`}
      textAlign="center"
      p={3}
    >
      <SuiBox component="img" src={rocketShip} alt="Rocketship" width="50%" mb={3} />
      <SuiTypography
        component="a"
        href="#"
        variant="button"
        textColor="white"
        textTransform="capitalize"
        fontWeight="medium"
        customClass={classes.outlinedCard_button}
      >
        Join rocketship program <Icon className=" font-bold">arrow_forward</Icon>
      </SuiTypography>
    </SuiBox>
  );
}

export default OutlinedCard;
