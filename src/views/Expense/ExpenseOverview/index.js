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
import SuiDatePicker from "components/SuiDatePicker"; 
import { getUserInformation } from "utils/Utils";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import "flatpickr/dist/plugins/monthSelect/style.css";



const ExpenseOverview = () => {
  const [requestFilter, setRequestFilter] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [formattedHmpr, setFormattedHmpr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState('Please Wait...');

  useEffect(() => {
    fetchExpenseOverview();
  }, [requestFilter]);

  const fetchExpenseOverview = async () => {
    try {
      setLoading(true);
      const userInformation = getUserInformation();
      if (!userInformation) {
        history.push("/authentication/sign-in/basic");
        return;
      }
      const headers = {
        headers: {Authorization:`Bearer ${userInformation.jwt}`},
      };
      const { data, status } = await api.post("/api/expense/filter", requestFilter,headers);
      if (status === 200) {
        formatExpenseDataForTable(data.allExpenses);
        setLoading(false);
      }
    } catch (exception) {
      console.log("Failed to fetch hmpr overview");
      setFormattedHmpr(null)
    }
    finally{
      setLoading(false);
      setMessage('No Data Found.')
    }
  };

  const formatExpenseDataForTable = (expenseRawData) => {
    const formatted = {
      columns: [
        {id:"id", Header: "id", accessor: "id"},
        { Header: "country", accessor: "country" },
        { Header: "Type", accessor: "type", width: "7%" },
        { Header: "Name", accessor: "name" },
        { Header: "Currency", accessor: "currency" },
        { Header: "Amount", accessor: "amount" },
        { Header: "Created By", accessor: "createdBy", width: "25%" },
        { Header: "Created At", accessor: "createdAt" },
        { Header: "Update At", accessor: "updatedAt" },
        { Header: "Notes", accessor: "notes" },
      ],
      rows: [],
    };

    expenseRawData.forEach((hmpr) => {
      formatted.rows.push(hmpr);
    });
    setFormattedHmpr(formatted);
  };

  const handleSelectedDate = (date)=>{
    const selectedMonth = new Date(date).getMonth()+1;
    const selectedYear = new Date(date).getFullYear();
    setRequestFilter({month:selectedMonth,year:selectedYear})
    console.log(selectedMonth,selectedYear);
  }


  const handleFilterRetrieve = ()=>{
    console.log('calling with,',requestFilter)
    fetchExpenseOverview();
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
                Expense Overzicht
              </SuiTypography>
              <SuiTypography variant="button" fontWeight="regular" textColor="text">
                Select Date Range
              </SuiTypography>
            </SuiBox>
            <Grid item xs={4}>
              <SuiBox ml={2} display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
                <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                  <SuiTypography component="label" variant="caption" fontWeight="bold">
                    Selected Date (yyyy-mm)
                  </SuiTypography>
                </SuiBox>
                <SuiDatePicker
                options={{
                  plugins: [
                    new monthSelectPlugin({})
                ]
                }}
                 value={requestFilter.startDate} onChange={handleSelectedDate} />
              </SuiBox>
            </Grid>
            {formattedHmpr ? <DataTable table={formattedHmpr} canSearch /> :
            <div>
              <Grid item xs={4}>
              <SuiBox ml={2} display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
                <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                  <SuiTypography component="label" variant="caption" fontWeight="bold">
                    {message}
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
            </Grid>
            </div>}
          </Card>
        </SuiBox>
        <Footer />
      </DashboardLayout>
    </>
  );
};

export default ExpenseOverview;
