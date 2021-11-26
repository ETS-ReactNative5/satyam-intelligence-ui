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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

const SuiBadgeDot = forwardRef(({ color, size, badgeContent, gradient, font, ...rest }, ref) => {
  let finalSize;
  let fontSize;
  let padding;

  if (size === "small") {
    finalSize = "0.375rem";
    fontSize = "caption";
    padding = "0.45em 0.775em";
  } else if (size === "large") {
    finalSize = "0.625rem";
    fontSize = "body2";
    padding = "0.85em 1.375em";
  } else if (size === "medium") {
    finalSize = "0.5rem";
    fontSize = "button";
    padding = "0.65em 1emm";
  } else {
    finalSize = "0.5rem";
    fontSize = "caption";
    padding = "0.45em 0.775em";
  }

  return (
    <SuiBox ref={ref} display="flex" alignItems="center" p={padding} {...rest}>
      <SuiBox
        component="i"
        display="inline-block"
        width={finalSize}
        height={finalSize}
        borderRadius="50%"
        backgroundColor={color}
        backgroundGradient={gradient}
        mr={1}
      />
      <SuiTypography
        variant={fontSize}
        fontWeight={font.weight ? font.weight : "regular"}
        textColor={font.color ? font.color : "dark"}
        customClass="line-height-0"
      >
        {badgeContent}
      </SuiTypography>
    </SuiBox>
  );
});

// Setting default values for the props of SuiBadge
SuiBadgeDot.defaultProps = {
  color: "info",
  size: "default",
  gradient: false,
  font: {},
};

// Typechecking props of the SuiBadge
SuiBadgeDot.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["default", "small", "medium", "large"]),
  badgeContent: PropTypes.string.isRequired,
  font: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.string,
  }),
  gradient: PropTypes.bool,
};

export default SuiBadgeDot;
