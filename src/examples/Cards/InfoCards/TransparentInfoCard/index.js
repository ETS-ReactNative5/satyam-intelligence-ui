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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function TransparentInfoCard({ color, icon, description, value }) {
  return (
    <SuiBox display="flex" flexDirection="column" alignItems="center" textAlign="center" p={3}>
      <SuiBox
        display="grid"
        justifyContent="center"
        alignItems="center"
        backgroundColor={color}
        color="white"
        width="3rem"
        height="3rem"
        boxShadow="regular"
        borderRadius="md"
        backgroundGradient
        mb={1}
      >
        <Icon className="" fontSize="default">
          {icon}
        </Icon>
      </SuiBox>
      <SuiBox mb={1} lineHeight={0}>
        <SuiTypography variant="button" textColor="text" fontWeight="medium">
          {description}
        </SuiTypography>
      </SuiBox>
      {value && (
        <SuiTypography variant="h5" fontWeight="bold">
          {value}
        </SuiTypography>
      )}
    </SuiBox>
  );
}

// Setting default values for the props of TransparentInfoCard
TransparentInfoCard.defaultProps = {
  color: "info",
  value: "",
};

// Typechecking props for the TransparentInfoCard
TransparentInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
};

export default TransparentInfoCard;
