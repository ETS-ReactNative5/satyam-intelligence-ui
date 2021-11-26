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

const styles = makeStyles(({ palette, functions, borders }) => {
  const { gradients } = palette;
  const { pxToRem, linearGradient, rgba } = functions;
  const { borderRadius } = borders;

  return {
    backgroundBlogCard: {
      padding: pxToRem(16),
    },

    backgroundBlogCard_content: {
      backgroundImage: ({ color, image }) =>
        `${linearGradient(
          rgba(gradients[color].main, 0.8),
          rgba(gradients[color].state, 0.8)
        )}, url(${image})`,
      backgroundSize: "cover",
      padding: pxToRem(16),
      borderRadius: borderRadius.lg,
    },
  };
});

export default styles;
