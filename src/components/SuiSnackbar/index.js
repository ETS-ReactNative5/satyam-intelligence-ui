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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for the SuiSnackbar
import styles from "components/SuiSnackbar/styles";

function SuiSnackbar({ type, icon, title, dateTime, content, close, ...rest }) {
  const classes = styles({ type });
  let titleColor;

  if (type === "info") {
    titleColor = "white";
  } else if (type === "error") {
    titleColor = "error";
  } else {
    titleColor = "dark";
  }

  return (
    <Snackbar
      TransitionComponent={Fade}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      {...rest}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
          <Icon fontSize="small">close</Icon>
        </IconButton>
      }
    >
      <SuiBox
        backgroundColor={type === "info" ? "info" : "white"}
        minWidth="21.875rem"
        maxWidth="100%"
        boxShadow="regular"
        borderRadius="md"
        backgroundGradient
        p={1}
      >
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="dark"
          p={1.5}
        >
          <SuiBox display="flex" alignItems="center" lineHeight={0}>
            <Icon className={classes.suiSnackbar_icon} fontSize="small">
              {icon}
            </Icon>
            <SuiTypography
              variant="button"
              fontWeight="medium"
              textColor={titleColor}
              textGradient={type === "error"}
            >
              {title}
            </SuiTypography>
          </SuiBox>
          <SuiBox display="flex" alignItems="center" lineHeight={0}>
            <SuiTypography variant="caption" textColor={type === "info" ? "white" : "text"}>
              {dateTime}
            </SuiTypography>
            <Icon
              className={` font-bold ${classes.suiSnackbar_close}`}
              color="inherit"
              onClick={close}
            >
              close
            </Icon>
          </SuiBox>
        </SuiBox>
        <Divider className={classes.suiSnackbar_divider} light={type === "info"} />
        <SuiBox p={1.5} customClass={classes.suiSnackbar_content}>
          {content}
        </SuiBox>
      </SuiBox>
    </Snackbar>
  );
}

// Setting default values for the props of SuiSnackbar
SuiSnackbar.defaultProps = {
  type: "info",
};

// Typechecking props for SuiSnackbar
SuiSnackbar.propTypes = {
  type: PropTypes.oneOf(["info", "success", "warning", "error"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default SuiSnackbar;
