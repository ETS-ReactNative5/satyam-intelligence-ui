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

// Soft UI Dashboard PRO React base styles

// Custom styles for CategoriesList
import styles from "examples/Lists/CategoriesList/styles";

function CategoriesList({ title, categories }) {
  const classes = styles();

  const renderItems = categories.map(({ color, icon, name, description, route }, key) => (
    <SuiBox
      key={name}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={1}
      pr={2}
      mb={categories.length - 1 === key ? 0 : 1}
    >
      <SuiBox display="flex" alignItems="center">
        <SuiBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          backgroundColor={color}
          borderRadius="lg"
          boxShadow="md"
          color="white"
          width="2rem"
          height="2rem"
          mr={2}
          backgroundGradient
        >
          <Icon className={classes.categoriesCard_icon}>{icon}</Icon>
        </SuiBox>
        <SuiBox display="flex" flexDirection="column">
          <SuiTypography variant="button" textColor={color} fontWeight="medium" gutterBottom>
            {name}
          </SuiTypography>
          <SuiTypography variant="caption" textColor="text">
            {description}
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox display="flex">
        <SuiTypography
          component={Link}
          variant="button"
          textColor={color}
          to={route}
          customClass={classes.categoriesCard_button}
        >
          <Icon className=" font-bold">chevron_right</Icon>
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  ));

  return (
    <Card>
      <SuiBox pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
