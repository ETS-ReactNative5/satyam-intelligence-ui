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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for ComplexBackgroundCard
import styles from "examples/Cards/BackgroundCards/ComplexBackgroundCard/styles";

function ComplexBackgroundCard({ color, image, description, action }) {
  const classes = styles({ color, image });

  return (
    <Card className={classes.complexBackgroundCard}>
      <SuiBox textAlign="center" p={2}>
        <SuiBox display="flex" flexDirection="column" mt={6} p={3}>
          <SuiBox mb={2}>
            <SuiTypography variant="body2" textColor="white" fontWeight="bold">
              {description}
            </SuiTypography>
          </SuiBox>
          {action.type === "internal" ? (
            <SuiBox mt={3}>
              <SuiTypography
                component={Link}
                to={action.route}
                variant="button"
                textColor="white"
                textTransform="capitalize"
                fontWeight="medium"
                customClass={classes.complexBackgroundCard_button}
              >
                {action.label} <Icon className=" font-bold">arrow_forward</Icon>
              </SuiTypography>
            </SuiBox>
          ) : (
            <SuiBox mt={3}>
              <SuiTypography
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="button"
                textColor="white"
                textTransform="capitalize"
                fontWeight="medium"
                customClass={classes.complexBackgroundCard_button}
              >
                {action.label} <Icon className=" font-bold">arrow_forward</Icon>
              </SuiTypography>
            </SuiBox>
          )}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of ComplexBackgroundCard
ComplexBackgroundCard.defaultProps = {
  color: "dark",
};

// Typechecking props for the ComplexBackgroundCard
ComplexBackgroundCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  image: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default ComplexBackgroundCard;
