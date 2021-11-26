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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";

// Custom styles for the ComplexStatisticsCard
import styles from "examples/Cards/StatisticsCards/ComplexStatisticsCard/styles";

function ComplexStatisticsCard({ color, icon, count, percentage, dropdown }) {
  const classes = styles({ color });
  const { size } = typography;

  return (
    <Card className={classes.complexStatisticsCard}>
      <SuiBox p={2}>
        <Grid container>
          <Grid item xs={8}>
            <SuiBox
              width="3rem"
              height="3rem"
              backgroundColor="white"
              borderRadius="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color={color}
              boxShadow="regular"
              fontSize={size.xl}
            >
              <Icon className={classes.complexStatisticsCard__icon}>{icon}</Icon>
            </SuiBox>
            <SuiBox mt={2} lineHeight={0}>
              <SuiTypography variant="h5" fontWeight="bold" textColor="white">
                {count.number}
              </SuiTypography>
              <SuiTypography
                variant="button"
                fontWeight="regular"
                textColor="white"
                textTransform="capitalize"
              >
                {count.label}
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={4}>
            <SuiBox textAlign="right">
              {dropdown && (
                <SuiBox mb={7} lineHeight={1} color="white">
                  <Icon fontSize="default" onClick={dropdown.action} className=" cursor-pointer">
                    more_horiz
                  </Icon>
                  {dropdown.menu}
                </SuiBox>
              )}
              <SuiTypography variant="button" fontWeight="bold" textColor="white" align="right">
                {percentage}
              </SuiTypography>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "dark",
  dropdown: false,
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  count: PropTypes.shape({
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  percentage: PropTypes.string.isRequired,
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default ComplexStatisticsCard;
