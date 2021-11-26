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

// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Custom styles for SuiTagInput
import styles from "components/SuiTagInput/styles";

const SuiTagInput = forwardRef(({ size, error, success, ...rest }, ref) => {
  const classes = styles({ size, error, success });

  return (
    <SuiBox customClass={classes.suiTagInput}>
      <ReactTagInput {...rest} ref={ref} />
    </SuiBox>
  );
});

// Setting default values for the props of SuiTagInput
SuiTagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the SuiTagInput
SuiTagInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default SuiTagInput;
