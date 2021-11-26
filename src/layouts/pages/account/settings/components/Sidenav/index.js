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

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React icons
import SpaceShip from "examples/Icons/SpaceShip";
import Document from "examples/Icons/Document";
import Cube from "examples/Icons/Cube";
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Settings from "examples/Icons/Settings";
import CreditCard from "examples/Icons/CreditCard";

// Custom styles for Sidenav
import styles from "layouts/pages/account/settings/components/Sidenav/styles";

function Sidenav() {
  const classes = styles();

  const sidenavItems = [
    { icon: <SpaceShip />, label: "profile", href: "profile" },
    { icon: <Document />, label: "basic info", href: "basic-info" },
    { icon: <Cube />, label: "change password", href: "change-password" },
    { icon: <Shop />, label: "2FA", href: "2fa" },
    { icon: <Office />, label: "accounts", href: "accounts" },
    { icon: <CustomerSupport />, label: "notifications", href: "notifications" },
    { icon: <Settings />, label: "sessions", href: "sessions" },
    { icon: <CreditCard />, label: "delete account", href: "delete-account" },
  ];

  const renderSidenavItems = sidenavItems.map(({ icon, label, href }, key) => {
    const itemKey = `item-${key}`;

    return (
      <SuiBox key={itemKey} component="li" pt={key === 0 ? 0 : 1}>
        <SuiTypography
          component="a"
          href={`#${href}`}
          variant="button"
          fontWeight="regular"
          textColor="text"
          textTransform="capitalize"
          customClass={classes.sidenav_listLink}
        >
          <SuiBox mr={1.5} lineHeight={1}>
            {icon}
          </SuiBox>
          {label}
        </SuiTypography>
      </SuiBox>
    );
  });

  return (
    <Card className={classes.sidenav}>
      <SuiBox
        component="ul"
        display="flex"
        flexDirection="column"
        p={2}
        m={0}
        customClass="no-list-style"
      >
        {renderSidenavItems}
      </SuiBox>
    </Card>
  );
}

export default Sidenav;
