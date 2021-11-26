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

export default makeStyles(({ functions }) => {
  const { pxToRem } = functions;

  return {
    session_action: {
      "& .material-icons": {
        transform: `translateX(${pxToRem(0)})`,
        transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
      },

      "&:hover .material-icons, &:focus .material-icons": {
        transform: `translateX(${pxToRem(4)})`,
      },
    },
  };
});
