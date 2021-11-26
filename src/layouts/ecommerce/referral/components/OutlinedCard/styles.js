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

const styles = makeStyles(({ palette, functions, typography }) => {
  const { secondary } = palette;
  const { pxToRem } = functions;
  const { size } = typography;

  return {
    outlinedCard_button: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      color: `${secondary.main} !important`,

      "& .material-icons": {
        fontSize: size.regular,
        marginLeft: pxToRem(4),
        transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
      },

      "&:hover .material-icons": {
        transform: `translateX(${pxToRem(5)})`,
      },
    },
  };
});

export default styles;
