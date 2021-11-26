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
    categoriesCard_icon: {
      display: "grid",
      placeItems: "center",
    },

    categoriesCard_button: {
      lineHeight: 0,
      transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
      padding: pxToRem(4),

      "&:hover, &:focus": {
        transform: `translateX(${pxToRem(5)})`,
      },
    },
  };
});

export default styles;
