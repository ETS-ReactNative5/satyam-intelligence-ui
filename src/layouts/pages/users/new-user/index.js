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
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
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
import api from "api/api";

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

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const [requestBody, setRequestBody] = useState({isPaid:false});

  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    try{
      requestBody['createdBy']='WBHAGGAN';
      requestBody['commissionInPercentage']=requestBody['commissionInPercentage'].split('%')[0];
      

      const {data,status} = await api.post('/api/hmpr',[requestBody]);
      console.log(status);
    }catch(exception){
      console.log('Exception while creating HMPR', exception)
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
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
            >
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
                          <SuiButton
                            variant="gradient"
                            buttonColor="dark"
                            onClick={handleSubmit}
                          >
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

export default NewUser;
