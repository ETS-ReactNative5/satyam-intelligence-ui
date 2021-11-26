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

// react-tilt components
import Tilt from "react-tilt";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";
import SuiButton from "components/SuiButton";

// Custom styles for the AnimatedStatisticsCard
import styles from "examples/Cards/StatisticsCards/AnimatedStatisticsCard/styles";

function AnimatedStatisticsCard({ color, title, count, percentage, action }) {
  const classes = styles({ color });

  return (
    <Tilt
      options={{
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(0.03,0.98,0.52,0.99)",
      }}
      className={classes.animatedStatisticsCard}
    >
      <Card className={classes.animatedStatisticsCard_card}>
        <SuiBox p={3} display="flex" flexDirection="column" alignItems="center">
          <SuiBox mt={1}>
            <SuiTypography
              variant="h2"
              textColor="white"
              textTransform="capitalize"
              fontWeight="bold"
              customClass={classes.animatedStatisticsCard_title}
            >
              {title}
            </SuiTypography>
          </SuiBox>
          <SuiTypography
            variant="h1"
            fontWeight="bold"
            textColor="white"
            customClass={classes.animatedStatisticsCard_count}
          >
            {count}
          </SuiTypography>
          <SuiBox customClass={classes.animatedStatisticsCard_badge}>
            <SuiBadge
              color={percentage.color}
              badgeContent={<>&nbsp;{percentage.label}&nbsp;</>}
              size="large"
              container
            />
          </SuiBox>
          {action.type === "internal" ? (
            <SuiButton
              component={Link}
              to={action.route}
              variant="outlined"
              buttonColor="white"
              customClass={classes.animatedStatisticsCard_button}
            >
              {action.label}
            </SuiButton>
          ) : (
            <SuiButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              buttonColor="white"
              size="small"
              customClass={classes.animatedStatisticsCard_button}
            >
              {action.label}
            </SuiButton>
          )}
        </SuiBox>
      </Card>
    </Tilt>
  );
}

// Setting default values for the props of AnimatedStatisticsCard
AnimatedStatisticsCard.defaultProps = {
  color: "info",
};

// Typechecking props for the AnimatedStatisticsCard
AnimatedStatisticsCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"])
      .isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default AnimatedStatisticsCard;
