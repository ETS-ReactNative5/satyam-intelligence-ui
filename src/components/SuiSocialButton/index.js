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

// clsx is a utility for constructing className string conditionally
import clsx from "clsx";

// @mui material components
import Button from "@mui/material/Button";

// Custom styles for SuiSocialButton
import styles from "components/SuiSocialButton/styles";

const SuiSocialButton = forwardRef(
  ({ buttonColor, size, iconOnly, circular, children, ...rest }, ref) => {
    const classes = styles({ buttonColor, size, iconOnly, circular });

    return (
      <Button
        {...rest}
        ref={ref}
        variant="contained"
        size={size}
        className={clsx(classes.suiSocialButton, {
          [classes.suiSocialButton_iconOnly]: iconOnly,
          [classes.suiSocialButton_circular]: circular,
        })}
      >
        {children}
      </Button>
    );
  }
);

// Setting default values for the props of SuiSocialButton
SuiSocialButton.defaultProps = {
  size: "medium",
  buttonColor: "facebook",
  iconOnly: false,
  circular: false,
};

// Typechecking props for the SuiSocialButton
SuiSocialButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  buttonColor: PropTypes.oneOf([
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "pinterest",
    "youtube",
    "github",
    "vimeo",
    "slack",
    "dribbble",
    "reddit",
    "tumblr",
  ]),
  iconOnly: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SuiSocialButton;
