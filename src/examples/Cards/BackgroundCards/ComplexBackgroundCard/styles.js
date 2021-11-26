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

const styles = makeStyles(({ palette, functions, typography, borders }) => {
  const { gradients, white } = palette;
  const { linearGradient, rgba, pxToRem } = functions;
  const { size } = typography;
  const { borderRadius } = borders;

  return {
    complexBackgroundCard: {
      backgroundImage: ({ color, image }) =>
        `${linearGradient(
          rgba(gradients[color].main, 0.6),
          rgba(gradients[color].state, 0.6)
        )}, url(${image})`,
      backgroundSize: "cover",
      borderRadius: borderRadius.lg,
    },

    complexBackgroundCard_button: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      color: `${white.main} !important`,

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
