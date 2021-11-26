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

export default makeStyles(({ functions, typography }) => {
  const { pxToRem } = functions;
  const { size } = typography;

  return {
    vrDefault_link: {
      display: "flex",
      alignItems: "center",

      "& .material-icons": {
        fontSize: size.regular,
        transform: `translate(${pxToRem(1)}, ${pxToRem(-1)})`,
        transition: "all 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
      },

      "&:hover .material-icons, &:focus .material-icons": {
        transform: `translate(${pxToRem(5)}, ${pxToRem(-1)})`,
      },
    },
  };
});
