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
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for RankingList
import styles from "examples/Lists/RankingsList/styles";

function RankingList({ title, date, rankings }) {
  const classes = styles();

  const renderRankings = rankings.map(({ color, icon, name, description, value }, key) => (
    <SuiBox key={name} component="li" pt={1} pr={2}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center">
        <SuiBox display="flex" alignItems="center">
          <SuiBox mr={2}>
            <SuiButton
              variant="outlined"
              buttonColor={color}
              size="small"
              customClass={classes.rankingsList_button}
              iconOnly
              circular
            >
              <Icon className="">{icon}</Icon>
            </SuiButton>
          </SuiBox>
          <SuiBox display="flex" flexDirection="column">
            <SuiTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </SuiTypography>
            <SuiTypography variant="caption" textColor="text">
              {description}
            </SuiTypography>
          </SuiBox>
        </SuiBox>
        <SuiTypography variant="button" textColor={color} fontWeight="medium" textGradient>
          {value}
        </SuiTypography>
      </SuiBox>
      {key === rankings.length - 1 ? null : <Divider className={classes.rankingsList_divider} />}
    </SuiBox>
  ));

  return (
    <Card className="h-100">
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SuiTypography>
        <SuiTypography
          variant="button"
          textColor="text"
          fontWeight="regular"
          customClass={classes.rankingsList_date}
        >
          <Icon color="inherit" fontSize="small" className={classes.rankingsList_icon}>
            date_range
          </Icon>
          {date}
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          customClass="no-list-style"
        >
          {renderRankings}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the RankingList
RankingList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rankings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
