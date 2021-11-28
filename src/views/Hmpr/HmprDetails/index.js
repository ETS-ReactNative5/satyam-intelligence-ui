
import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "mycomponents/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import api from "api/api";
import CustomAlert from "mycomponents/Alert";
import { fireAlert } from "utils/Alert";
import { Select, MenuItem } from "@mui/material";
import { getUserInformation } from "utils/Utils";
import { useHistory } from "react-router-dom";

function HmprDetails(props) {

  const history = useHistory();
  const [id, setId] = useState(null);
  const [hmpr, setHmpr] = useState(null);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailedAlert, setShowFailedAlert] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const [userInformation, setUserInformation] = useState(null);

  useEffect(async()=>{
    const state = props.location.state;
    if(state){
      const id = state.id;
      setId(id);
      await handleFetchHmpr(id);
    }
    const userInformation = getUserInformation();
    if(!userInformation){
      history.push("/authentication/sign-in/basic");
    }
    setUserInformation(userInformation);
  },[]);

  const handleFetchHmpr = async (id) => {
      try {
        const { data, status } = await api.get(`/api/hmpr/${id}`);
        if (status === 200) {
          displaySuccessMessage();
          setHmpr(data[0]);
        }
      } catch (exception) {
        displayFailureMessage(`Hmpr with id:${id} does not exist`);
        setHmpr(null);
        console.log("Failed to get hmpr by id", exception);
      }
  };

  const displayFailureMessage = (error) => {
    setShowFailedAlert(true);
    setFailureMessage(error);
    setTimeout(() => {
      setShowFailedAlert(false);
    }, 2000);
  };

  const displaySuccessMessage = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 2000);
  };

  const handleSearch = (event) => {
    const searchId = event.target.value;
    setId(searchId);
    if (searchId.length >= 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleUdate = () => {
    const id = hmpr.id;
    removeFieldFromRequest(hmpr);
    hmpr["updatedBy"] = userInformation.sId; 
    updateHmpr(id, hmpr);
  };

  const updateHmpr = async (id, newHmpr) => {
    try {
      const headers = {
        headers: {Authorization:`Bearer ${userInformation.jwt}`},
      };
      const { status } = await api.put("/api/hmpr/" + id, newHmpr,headers);
      if (status === 200) {
        fireAlert(`Hmpr Successfully Updated`, ``, "success", "Okay!");
        handleFetchHmpr(id);
      }
    } catch (exception) {
      console.log(exception.response)
      if(exception.response && exception.response.status === 401){
        fireAlert(`Failed Updating HMPR`, `Please request L2/L1 to update this record`, "error", "Okay!");  
      }else{
        fireAlert(`Failed Creating HMPR`, `Contact Widjesh Shiva Bhaggan.`, "error", "Okay!");
        console.log("Exception while updating HMPR", exception);
      }
    }finally{
      handleFetchHmpr(id);
    }
  };

  const removeFieldFromRequest = (hmpr) => {
    delete hmpr.id;
    delete hmpr.createdAt;
    delete hmpr.updatedAt;
    delete hmpr.total;
    delete hmpr.commissionInValue;
    delete hmpr.amountToPay;
    delete hmpr.profit;
    delete hmpr.createdBy;
  };

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <SuiBox mt={3} mb={4}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={9}>
              <Card className="overflow-visible">
                <SuiBox p={2} lineHeight={1}>
                  <SuiTypography variant="h6" fontWeight="medium">
                    {showSuccessAlert && (
                      <CustomAlert severity={"success"} message={"Hmpr retrieved successfully"} />
                    )}
                    {showFailedAlert && <CustomAlert severity={"error"} message={failureMessage} />}
                    HMPR Details {hmpr && <span>with reference #{hmpr.id}</span>}
                  </SuiTypography>
                  <SuiTypography variant="button" fontWeight="regular" textColor="text">
                    Fetch HMPR details by id
                  </SuiTypography>
                  <Divider />
                  <Grid container spacing={6}>
                    <Grid item xs={4}>
                      <SuiBox>
                        <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0}>
                          <SuiTypography component="label" variant="caption" fontWeight="bold">
                            HMPR ID #
                          </SuiTypography>
                        </SuiBox>
                        <SuiInput onChange={handleSearch} placeholder="HMPR ID #" value={id} />
                      </SuiBox>
                    </Grid>
                  </Grid>
                  <Grid container spacing={6}>
                    <Grid item xs={4}>
                      <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0}>
                        <SuiButton
                          variant="gradient"
                          buttonColor="dark"
                          onClick={()=>{handleFetchHmpr(id)}}
                          disabled={isDisabled}
                        >
                          Retrieve
                        </SuiButton>
                      </SuiBox>
                    </Grid>
                  </Grid>
                  <Divider />
                  {hmpr && (
                    <>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox
                          display="flex"
                          flexDirection="column"
                          justifyContent="flex-end"
                          height="100%"
                        ></SuiBox>
                        <SuiTypography component="label" variant="caption" fontWeight="bold">
                          Audit Information
                        </SuiTypography>
                        <SuiTypography variant="button" fontWeight="regular" textColor="secondary">
                          Created By: {hmpr.createdBy}
                        </SuiTypography>
                        {hmpr.updatedBy && (
                          <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            textColor="secondary"
                          >
                            Updated By: {hmpr.updatedBy}
                          </SuiTypography>
                        )}
                        <SuiTypography variant="button" fontWeight="regular" textColor="secondary">
                          Created At: {hmpr.createdAt}
                        </SuiTypography>
                        <SuiTypography variant="button" fontWeight="regular" textColor="secondary">
                          Updated At: {hmpr.updatedAt}
                        </SuiTypography>
                      </SuiBox>
                      <Divider />
                      {/*-----------Passenger Information------------*/}
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Passenger Information
                            </SuiTypography>
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                First Name
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.firstName}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, firstName: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Last Name
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.lastName}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, lastName: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                      </Grid>
                      <Divider />
                      {/*--------------System Information---------------------- */}
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <SuiBox mb={1} ml={0.5} lineHeight={0}>
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              System Information
                            </SuiTypography>
                          </SuiBox>
                          <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Gds Provider
                            </SuiTypography>
                          </SuiBox>
                          <Select
                            input={<SuiInput />}
                            value={hmpr.gdsProvider}
                            onChange={(event) =>
                              setHmpr({ ...hmpr, gdsProvider: event.target.value })
                            }
                          >
                            <MenuItem value="...">...</MenuItem>
                            <MenuItem value="AMADEUS">Amadeus</MenuItem>
                            <MenuItem value="GALILEO">Galileo</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Sold in branch
                              </SuiTypography>
                            </SuiBox>
                            <Select
                              input={<SuiInput />}
                              value={hmpr.branchSold}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, branchSold: event.target.value })
                              }
                            >
                              <MenuItem value="...">...</MenuItem>
                              <MenuItem value="Hoofd Filiaal">Hoofd Filiaal</MenuItem>
                              <MenuItem value="Filiaal Commewijne">Filiaal Commewijne</MenuItem>
                              <MenuItem value="Filiaal Pad Van Wanica">
                                Filiaal Pad Van Wanica
                              </MenuItem>
                              <MenuItem value="Filiaal Nickerie">Filiaal Nickerie</MenuItem>
                              <MenuItem value="Filiaal Combe">Filiaal Combe</MenuItem>
                              <MenuItem value="Filiaal Den Haag">Filiaal Den Haag</MenuItem>
                              <MenuItem value="Filiaal Curacao">Filiaal Curacao</MenuItem>
                            </Select>
                            {/* <SuiInput
                              value={hmpr.branchSold}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, branchSold: event.target.value })
                              }
                            /> */}
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Airline
                              </SuiTypography>
                            </SuiBox>

                            <Select
                              input={<SuiInput />}
                              value={hmpr.airline}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, airline: event.target.value })
                              }
                            >
                              <MenuItem value="...">...</MenuItem>
                              <MenuItem value="SLM">SLM</MenuItem>
                              <MenuItem value="KLM">KLM</MenuItem>
                            </Select>
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Currency
                              </SuiTypography>
                            </SuiBox>
                            <Select
                              input={<SuiInput />}
                              value={hmpr.currency}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, currency: event.target.value })
                              }
                            >
                              <MenuItem value="...">...</MenuItem>
                              <MenuItem value="USD">($)USD</MenuItem>
                              <MenuItem value="EUR">(€)EURO</MenuItem>
                            </Select>
                          </SuiBox>
                        </Grid>
                      </Grid>
                      <Divider />
                      {/*-------------PAYMENT INFORMATIE--------------------- */}
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Payment Information
                            </SuiTypography>
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Payment Method
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.paymentMethod}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, paymentMethod: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Ticket Issued In
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.ticketIssuedIn}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, ticketIssuedIn: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Bookings Card Number
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.bookingsCardNumber ? hmpr.bookingsCardNumber : ""}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, bookingsCardNumber: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Is Paid
                              </SuiTypography>
                            </SuiBox>
                            <SuiBox ml={0.5} mb={0.25}>
                              <Switch
                                checked={hmpr.isPaid}
                                onChange={(event) =>
                                  setHmpr({ ...hmpr, isPaid: event.target.checked })
                                }
                              />
                            </SuiBox>
                          </SuiBox>
                        </Grid>
                      </Grid>
                      <Divider />
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Specification
                            </SuiTypography>
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Basic Fare ({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.fare}
                              onChange={(event) => setHmpr({ ...hmpr, fare: event.target.value })}
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Tax({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.tax}
                              onChange={(event) => setHmpr({ ...hmpr, tax: event.target.value })}
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Commission(%)
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.commissionInPercentage}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, commissionInPercentage: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Amount Received ({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput
                              value={hmpr.amountReceived}
                              onChange={(event) =>
                                setHmpr({ ...hmpr, amountReceived: event.target.value })
                              }
                            />
                          </SuiBox>
                        </Grid>
                      </Grid>
                      <Divider />
                      {/*Calculation */}
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiTypography component="label" variant="caption" fontWeight="bold">
                              Calculation
                            </SuiTypography>
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Total ({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput value={hmpr.total} />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Commission In Value({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput value={hmpr.commissionInValue} />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Amount To Pay({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput value={hmpr.amountToPay} />
                          </SuiBox>
                        </Grid>
                        <Grid item xs={6}>
                          <SuiBox
                            display="flex"
                            flexDirection="column"
                            justifyContent="flex-end"
                            height="100%"
                          >
                            <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                              <SuiTypography component="label" variant="caption" fontWeight="bold">
                                Profit ({hmpr.currency})
                              </SuiTypography>
                            </SuiBox>
                            <SuiInput value={hmpr.profit} />
                          </SuiBox>
                        </Grid>
                      </Grid>
                      <SuiBox display="flex" justifyContent="flex-end" mt={3}>
                        <SuiBox mr={1}>
                          <SuiButton buttonColor="light">cancel</SuiButton>
                        </SuiBox>
                        <SuiButton variant="gradient" buttonColor="primary" onClick={handleUdate}>
                          Update HMPR
                        </SuiButton>
                      </SuiBox>
                    </>
                  )}
                  {/* <SuiBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    height="100%"
                  >
                    <SuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SuiTypography component="label" variant="caption" fontWeight="bold">
                        Project Name
                      </SuiTypography>
                    </SuiBox>
                    <SuiInput placeholder="Soft UI Dashboard PRO Material" />
                  </SuiBox> */}
                  {/* <SuiBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    height="100%"
                  >
                    <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                      <SuiTypography component="label" variant="caption" fontWeight="bold">
                        Project Description
                      </SuiTypography>
                    </SuiBox>
                    <SuiBox mb={1.5} ml={0.5} mt={0.5} lineHeight={0} display="inline-block">
                      <SuiTypography
                        component="label"
                        variant="caption"
                        fontWeight="regular"
                        textColor="text"
                      >
                        This is how others will learn about the project, so make it good!
                      </SuiTypography>
                    </SuiBox>
                    <SuiEditor value={editorValue} onChange={setEditorValue} />
                  </SuiBox> */}

                  {/* <SuiBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    height="100%"
                  >
                    <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                      <SuiTypography component="label" variant="caption" fontWeight="bold">
                        Project Tags
                      </SuiTypography>
                    </SuiBox>
                    <SuiSelect
                      defaultValue={[
                        { value: "choice 1", label: "Choice 1" },
                        { value: "label two", label: "label two" },
                      ]}
                      options={[
                        { value: "choice 1", label: "Choice 1" },
                        { value: "choice 2", label: "Choice 2" },
                        { value: "choice 3", label: "Choice 3" },
                        { value: "choice 4", label: "Choice 4" },
                        { value: "label one", label: "Label One", isDisabled: true },
                        { value: "label two", label: "Tabel Two" },
                        { value: "label three", label: "Label Three" },
                      ]}
                      isMulti
                    />
                  </SuiBox> */}

                  {/* <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                          <SuiTypography component="label" variant="caption" fontWeight="bold">
                            Start Date
                          </SuiTypography>
                        </SuiBox>
                        <SuiDatePicker value={startDate} onChange={handleSetStartDate} />
                      </SuiBox>
                    </Grid>
                    <Grid item xs={6}>
                      <SuiBox
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-end"
                        height="100%"
                      >
                        <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                          <SuiTypography component="label" variant="caption" fontWeight="bold">
                            End Date
                          </SuiTypography>
                        </SuiBox>
                        <SuiDatePicker value={endDate} onChange={handleSetEndDate} />
                      </SuiBox>
                    </Grid>
                  </Grid> */}
                  <SuiBox></SuiBox>
                </SuiBox>
              </Card>
            </Grid>
          </Grid>
        </SuiBox>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default HmprDetails;
