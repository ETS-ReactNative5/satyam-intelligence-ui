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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

function StatusCell({ icon, color, status }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiBox mr={1}>
        <SuiButton variant="outlined" buttonColor={color} size="small" iconOnly circular>
          <Icon className=" font-bold">{icon}</Icon>
        </SuiButton>
      </SuiBox>
      <SuiTypography
        variant="caption"
        fontWeight="medium"
        textColor="text"
        customClass="line-height-0"
      >
        {status}
      </SuiTypography>
    </SuiBox>
  );
}

// Typechecking props for the StatusCell
StatusCell.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusCell;
