import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "mycomponents/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewUser page components
import UserInfo from "layouts/pages/users/new-user/components/Passagier";
import Address from "layouts/pages/users/new-user/components/Systeem";
import Socials from "layouts/pages/users/new-user/components/Betaling";
import Profile from "layouts/pages/users/new-user/components/Specificatie";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";
// My Imports
import api from "api/api";
import { getUserInformation } from "utils/Utils";
import { fireAlert } from "utils/Alert";
import { useHistory } from "react-router-dom";

function getSteps() {
  return ["Passagiers", "Systeem", "Betaling", "Specificatie"];
}

function getStepContent(stepIndex, formData, setRequestBody, requestBody) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} requestBuilder={setRequestBody} state={requestBody} />;
    case 1:
      return <Address formData={formData} requestBuilder={setRequestBody} state={requestBody} />;
    case 2:
      return <Socials formData={formData} requestBuilder={setRequestBody} state={requestBody} />;
    case 3:
      return <Profile formData={formData} requestBuilder={setRequestBody} state={requestBody} />;
    default:
      return null;
  }
}

function NewHmpr() {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [requestBody, setRequestBody] = useState({ isPaid: false });

  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    try {
      const userInformation = getUserInformation();
      if (!userInformation) {
        history.push("/authentication/sign-in/basic");
        return;
      }
      requestBody["commissionInPercentage"] = requestBody["commissionInPercentage"].split("%")[0];
      const headers = {
        headers: {Authorization:`Bearer ${userInformation.jwt}`},
      };
      const { data, status } = await api.post("/api/hmpr", [requestBody], headers);
      if (status === 200) {
        fireAlert(`Hmpr Successfully Created`, `Reference #${data[0].id}`, "success", "Okay!");
      }
    } catch (exception) {
      fireAlert(`Failed Creating HMPR`, `Contact Widjesh Shiva Bhaggan.`, "error", "Okay!");
      console.log("Exception while creating HMPR", exception);
    }
    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3} mb={20}>
        <Grid container justifyContent="center" className="h-100">
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik initialValues={initialValues} validationSchema={currentValidation}>
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card className="h-100">
                    <SuiBox p={2}>
                      <SuiBox>
                        {getStepContent(
                          activeStep,
                          {
                            values,
                            touched,
                            formField,
                            errors,
                          },
                          setRequestBody,
                          requestBody
                        )}
                        <SuiBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {activeStep === 0 ? (
                            <SuiBox />
                          ) : (
                            <SuiButton variant="gradient" buttonColor="light" onClick={handleBack}>
                              terug
                            </SuiButton>
                          )}
                          <SuiButton variant="gradient" buttonColor="dark" onClick={handleSubmit}>
                            {isLastStep ? "Hmpr Aanmaken" : "Volgende"}
                          </SuiButton>
                        </SuiBox>
                      </SuiBox>
                    </SuiBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewHmpr;
