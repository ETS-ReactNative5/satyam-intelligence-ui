import React, { useState, useEffect } from "react";

// Soft UI Dashboard PRO React components

// Soft UI Dashboard PRO React example components

// Data
import { Card, Grid } from "@mui/material";
import { Link } from 'react-router-dom'
import api from "api/api";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DataTable from "examples/Tables/DataTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "mycomponents/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import LoadingBar from "mycomponents/LoadingBar";
import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
import SuiButton from "components/SuiButton";
import SuiDatePicker from "components/SuiDatePicker";

const HmprOverview = () => {
  const [requestFilter, setRequestFilter] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().setDate(new Date().getDate()+1),
  });
  const [formattedHmpr, setFormattedHmpr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    fetchHmprDataAndFormat();
    return () => {
      "";
    };
  }, []);

  const fetchHmprDataAndFormat = async () => {
    try {
      setLoading(true);
      const { data, status } = await api.post("/api/hmpr/filter", requestFilter);
      if (status === 200) {
        formatHmprDataForTable(data);
        setLoading(false);
      }
    } catch (exception) {
      console.log("Failed to fetch hmpr overview");
    }
  };

  const formatHmprDataForTable = (hmprRawDdata) => {
    const formatted = {
      columns: [
        {id:"id", Header: "id", accessor: (data) =>
         (<Link to={{pathname:`/hmpr/details/`,state:{id:data.id}}}>{data.id}</Link>), width: "20%" },
        { Header: "Aangemaakt Door", accessor: "createdBy", width: "25%" },
        { Header: "Geupdate Door", accessor: "updatedBy" },
        { Header: "Voornaam", accessor: "firstName", width: "7%" },
        { Header: "Achternaam", accessor: "lastName" },
        // { Header: "gdsProvider", accessor: "gdsProvider" },
        { Header: "Currency", accessor: "currency" },
        // { Header: "Airline", accessor: "airline" },
        { Header: "BK-Nummer", accessor: "bookingsCardNumber" },
        { Header: "Verkocht In", accessor: "branchSold" },
        { Header: "Basic Fare", accessor: "fare" },
        { Header: "Tax", accessor: "tax" },
        { Header: "Totaal", accessor: "total" },
        { Header: "Commissie(%)", accessor: "commissionInPercentage" },
        { Header: "Commissie", accessor: "commissionInValue" },
        { Header: "Bedrag Doorbetalen", accessor: "amountToPay" },
        { Header: "Bedrag Ontvangen", accessor: "amountReceived" },
        { Header: "Winst", accessor: "profit" },
        // { Header: "Betalings Methode", accessor: "paymentMethod" },
        {
          id: "isPaid",
          Header: "Is Betaald",
          accessor: (data) =>
            data.isPaid ? (
              <StatusCell icon="done" color="success" status="Paid" />
            ) : (
              <StatusCell icon="close" color="error" status="Not Paid" />
            ),
        },
        { Header: "Ticket Uitgegeven In", accessor: "ticketIssuedIn" },
        { Header: "Gemaakt Op", accessor: "createdAt" },
        { Header: "Geupdate Op", accessor: "updatedAt" },
      ],
      rows: [],
    };

    hmprRawDdata.forEach((hmpr) => {
      formatted.rows.push(hmpr);
    });
    setFormattedHmpr(formatted);
  };

  const handleSelectedDate = (date)=>{
    const startDate = new Date(date).toISOString().split('T')[0];
    const endDate = getEndDate(date);
    setRequestFilter({startDate,endDate});
    setButtonDisabled(false);
  }

  const getEndDate = (date)=>{
    const endDate = new Date(date);
    return endDate.setDate(endDate.getDate()+1);
  }

  const handleFilterRetrieve = ()=>{
    fetchHmprDataAndFormat();
    setButtonDisabled(true);
  }

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <SuiBox pt={6} pb={3}>
          <Card>
            {loading && <LoadingBar />}
            <SuiBox p={3} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                HMPR Overzicht
              </SuiTypography>
              <SuiTypography variant="button" fontWeight="regular" textColor="text">
                Select Date Range
              </SuiTypography>
            </SuiBox>
            <Grid item xs={4}>
              <SuiBox ml={2} display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
                <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                  <SuiTypography component="label" variant="caption" fontWeight="bold">
                    Selected Date (yyyy-mm-dd)
                  </SuiTypography>
                </SuiBox>
                <SuiDatePicker value={requestFilter.startDate} onChange={handleSelectedDate} />
              </SuiBox>
            </Grid>
            <SuiBox p={2} lineHeight={1}>
              <SuiButton variant="gradient" buttonColor="dark" disabled={buttonDisabled} onClick={handleFilterRetrieve}>
                Retrieve
              </SuiButton>
            </SuiBox>
            {formattedHmpr && <DataTable table={formattedHmpr} canSearch />}
          </Card>
        </SuiBox>
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default HmprOverview;
