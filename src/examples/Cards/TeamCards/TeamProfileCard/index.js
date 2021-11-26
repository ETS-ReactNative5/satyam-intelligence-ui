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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";
import SuiAvatar from "components/SuiAvatar";

// Custom styles for TeamProfileCard
import style from "examples/Cards/TeamCards/TeamProfileCard/styles";

function TeamProfileCard({ color, title, description, industry, rating, members, dropdown }) {
  const classes = style();

  const ratings = {
    0.5: [
      <Icon className="" key={1}>
        star_outline
      </Icon>,
      <Icon className="" key={2}>
        star_outline
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    1: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star_outline
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    1.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star_half
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    2: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star_outline
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    2.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star_half
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    3: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star_outline
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    3.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star_half
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    4: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star
      </Icon>,
      <Icon className="" key={5}>
        star_outline
      </Icon>,
    ],
    4.5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star
      </Icon>,
      <Icon className="" key={5}>
        star_half
      </Icon>,
    ],
    5: [
      <Icon className="" key={1}>
        star
      </Icon>,
      <Icon className="" key={2}>
        star
      </Icon>,
      <Icon className="" key={3}>
        star
      </Icon>,
      <Icon className="" key={4}>
        star
      </Icon>,
      <Icon className="" key={5}>
        star
      </Icon>,
    ],
  };

  const renderMembers = members.map(({ image, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <SuiAvatar src={image} alt={name} size="xs" customClass={classes.teamProfileCard_avatar} />
    </Tooltip>
  ));

  return (
    <Card>
      <SuiBox p={3}>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <SuiTypography
            variant="h5"
            fontWeight="medium"
            textColor={color}
            textTransform="capitalize"
            textGradient
          >
            {title}
          </SuiTypography>
          {dropdown && (
            <SuiTypography
              textColor="secondary"
              onClick={dropdown.action}
              customClass={classes.teamProfileCard_dropdownIcon}
            >
              <Icon fontSize="default">more_vert</Icon>
            </SuiTypography>
          )}
          {dropdown.menu}
        </SuiBox>
        <SuiBox mb={2}>
          <SuiTypography variant="body2" textColor="text">
            {description}
          </SuiTypography>
        </SuiBox>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {industry ? (
            <SuiBox component="li" display="flex" flexDirection="column">
              <SuiBox display="flex" justifyContent="space-between" alignItems="center">
                <SuiTypography variant="body2" textColor="text">
                  Industry:
                </SuiTypography>
                <SuiBadge
                  variant="contained"
                  color="secondary"
                  size="medium"
                  badgeContent={industry}
                  container
                />
              </SuiBox>
              <Divider />
            </SuiBox>
          ) : null}
          {rating ? (
            <SuiBox component="li" display="flex" flexDirection="column">
              <SuiBox display="flex" justifyContent="space-between" alignItems="center">
                <SuiTypography variant="body2" textColor="text">
                  Rating:
                </SuiTypography>
                <SuiBox customClass={classes.teamProfileCard_rating}>{ratings[rating]}</SuiBox>
              </SuiBox>
              <Divider />
            </SuiBox>
          ) : null}
          {members ? (
            <SuiBox
              component="li"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <SuiTypography variant="body2" textColor="text">
                Members:
              </SuiTypography>
              <SuiBox display="flex">{renderMembers}</SuiBox>
            </SuiBox>
          ) : null}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of TeamProfileCard
TeamProfileCard.defaultProps = {
  color: "info",
  industry: "",
  rating: 0,
  members: [],
  dropdown: false,
};

// Typechecking props for the TeamProfileCard
TeamProfileCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  industry: PropTypes.string,
  rating: PropTypes.number,
  members: PropTypes.arrayOf(PropTypes.object),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
    }),
  ]),
};

export default TeamProfileCard;
