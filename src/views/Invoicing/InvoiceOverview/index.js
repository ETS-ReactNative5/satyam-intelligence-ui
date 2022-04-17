import React, { useState, useEffect } from "react";

// Soft UI Dashboard PRO React components

// Soft UI Dashboard PRO React example components

// Data
import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
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
import { getUserInformation } from "utils/Utils";

const HmprOverview = () => {
  const [requestFilter, setRequestFilter] = useState({
    startDate: new Date(),
    endDate: new Date().setDate(new Date().getDate() + 1),
  });
  const [formattedHmpr, setFormattedHmpr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetchHmprDataAndFormat();
    // setInterval(fetchHmprDataAndFormat(),10000)
    return () => {
      "";
    };
  }, []);



  const fetchHmprDataAndFormat = async () => {
    try {
      setLoading(true);
      const userInformation = getUserInformation();
      const headers = {
        headers: { Authorization: `Bearer ${userInformation.jwt}` },
      };
      const { data, status } = await api.get("/api/payment/invoice", {}, headers);
      if (status === 200) {
        formatHmprDataForTable(data);
        setLoading(false);
      }
    } catch (exception) {
      console.log("Failed to fetch invoice overview", exception);
    }
  };

  const formatHmprDataForTable = (hmprRawDdata) => {
    const formatted = {
      columns: [
        { id: "id", Header: "id", accessor: (data) => <div>{data.id}</div>, width: "2%" },
        { Header: "Betaling Id", accessor: "paymentId", width: "15%" },
        { Header: "Aangemaakt Door", accessor: "createdBy", width: "7%" },
        { Header: "Klant naam", accessor: "customerName", width: "7%" },
        { Header: "Email", accessor: "email", width: "10%" },
        { Header: "Bedrag", accessor: "amount", width: "2%" },
        { Header: "Referentie", accessor: "reference", width: "30%" },
        {
          id: "isPaid",
          Header: "Betaal Status",
          accessor: (data) =>
            data.isPaid ? (
              <StatusCell icon="done" color="success" status="Betaald" />
            ) : (
              <StatusCell icon="close" color="error" status="Niet Betaald" />
            ),
        },
      ],
      rows: [],
    };

    hmprRawDdata.forEach((hmpr) => {
      formatted.rows.push(hmpr);
    });
    setFormattedHmpr(formatted);
  };

  const handleSelectedDate = (date) => {
    const startDate = new Date(date);
    const endDate = getEndDate(date);
    setRequestFilter({ startDate, endDate });
    setButtonDisabled(false);
  };

  const getEndDate = (date) => {
    const endDate = new Date(date);
    return endDate.setDate(endDate.getDate() + 1);
  };

  const handleFilterRetrieve = () => {
    fetchHmprDataAndFormat();
  };

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <SuiBox pt={6} pb={3}>
          <Card>
            {loading && <LoadingBar />}
            <SuiBox p={3} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Invoice Overzicht
              </SuiTypography>
              {/* <SuiTypography variant="button" fontWeight="regular" textColor="text">
                Selecteer 
              </SuiTypography> */}
            </SuiBox>
            {/* <Grid item xs={4}>
              <SuiBox ml={2} display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
                <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                  <SuiTypography component="label" variant="caption" fontWeight="bold">
                    Selected Date (yyyy-mm-dd)
                  </SuiTypography>
                </SuiBox>
                <SuiDatePicker value={requestFilter.startDate} onChange={handleSelectedDate} />
              </SuiBox>
            </Grid> */}
            <SuiBox p={2} lineHeight={1}>
              <SuiButton variant="gradient" buttonColor="dark"  onClick={handleFilterRetrieve}>
                Update
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
