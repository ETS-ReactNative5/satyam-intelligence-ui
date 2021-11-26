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

// @mui material components
import { makeStyles } from "@mui/styles";

const styles = makeStyles(({ functions }) => {
  const { pxToRem } = functions;

  return {
    rankingsList_button: {
      width: pxToRem(34),
      minWidth: pxToRem(34),
      height: pxToRem(34),
      minHeight: pxToRem(34),
    },

    rankingsList_divider: {
      marginTop: pxToRem(16),
      marginBottom: pxToRem(8),
    },

    rankingsList_date: {
      display: "flex",
    },

    rankingsList_icon: {
      marginRight: pxToRem(6),
      marginTop: pxToRem(-1),
    },
  };
});

export default styles;
