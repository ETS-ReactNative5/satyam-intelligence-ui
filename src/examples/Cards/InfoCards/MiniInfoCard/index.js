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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function MiniInfoCard({ color, icon, title, description }) {
  return (
    <Card>
      <SuiBox p={3}>
        <SuiBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          backgroundColor={color}
          color="white"
          width="3rem"
          height="3rem"
          boxShadow="regular"
          borderRadius="lg"
          backgroundGradient
        >
          <Icon className="" fontSize="default">
            {icon}
          </Icon>
        </SuiBox>
        <SuiBox mt={2}>
          <SuiTypography variant="h5" fontWeight="medium" textTransform="capitalize">
            {title}
          </SuiTypography>
          <SuiTypography variant="body2" textColor="text" fontWeight="regular">
            {description}
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of MiniInfoCard
MiniInfoCard.defaultProps = {
  color: "info",
};

// Typechecking props for the MiniInfoCard
MiniInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default MiniInfoCard;
