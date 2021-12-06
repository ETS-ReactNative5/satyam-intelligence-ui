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

// prop-type is a library for typechecking of props
import PropTypes from "views/Hmpr/NewHmpr/components/FormField/node_modules/prop-types";

// formik components
import { ErrorMessage, Field } from "views/Hmpr/NewHmpr/components/FormField/node_modules/formik";

// Soft UI Dashboard PRO React components
import SuiBox from "views/Hmpr/HmprOverview/node_modules/components/SuiBoxr/components/FormField/node_modules/components/SuiBox";
import SuiTypography from "views/Hmpr/HmprOverview/node_modules/components/SuiTypographynents/FormField/node_modules/components/SuiTypography";
import SuiInput from "views/Hmpr/NewHmpr/components/FormField/node_modules/components/SuiInput";

function FormField({ label, name, ...rest }) {
  return (
    <SuiBox mb={1.5}>
      <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <SuiTypography
          component="label"
          variant="caption"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </SuiTypography>
      </SuiBox>
      <Field {...rest} name={name} as={SuiInput} />
      <SuiBox mt={0.75}>
        <SuiTypography component="div" variant="caption" textColor="error">
          <ErrorMessage name={name} />
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
