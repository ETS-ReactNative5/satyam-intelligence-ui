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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Custom styles for the MediaPlayer
import styles from "layouts/pages/widgets/components/MediaPlayer/styles";

function MediaPlayer() {
  const classes = styles();

  return (
    <Card className={classes.mediaPlayer}>
      <SuiBox p={3} position="relative" lineHeight={0}>
        <SuiTypography variant="h5" textColor="white" fontWeight="bold">
          نوع من البلوز
        </SuiTypography>
        <SuiTypography variant="button" textColor="white" fontWeight="medium">
          ديفتونز
        </SuiTypography>
        <SuiBox display="flex" mt={3} pt={1}>
          <SuiBox display="flex" alignItems="center" justifyContent="center">
            <SuiButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              customClass={classes.mediaPlayer_button}
            >
              <Icon className="">skip_previous</Icon>
            </SuiButton>
            <SuiButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              customClass={classes.mediaPlayer_button}
            >
              <Icon className="">play_arrow</Icon>
            </SuiButton>
            <SuiButton
              variant="outlined"
              size="large"
              circular
              iconOnly
              customClass={classes.mediaPlayer_button}
            >
              <Icon className="">skip_next</Icon>
            </SuiButton>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default MediaPlayer;
