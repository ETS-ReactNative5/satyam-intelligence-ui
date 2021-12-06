import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiBadgeDot from "components/SuiBadgeDot";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import ComplexReportsDoughnutChart from "examples/Charts/DoughnutCharts/ComplexReportsDoughnutChart";

// Analytics application components
import Social from "layouts/applications/analytics/components/Social";
import Pages from "layouts/applications/analytics/components/Pages";

// Data
import complexReportsDoughnutChartData from "layouts/applications/analytics/data/complexReportsDoughnutChartData";
import api from "api/api";
import { getUserInformation } from "utils/Utils";

function Analytics() {
  const [menu, setMenu] = useState(null);
  const [graphDetailsSuriname, setGraphDetailsSuriname] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        color: "info",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        label: "Neth worth",
        color: "dark",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        label: "Expense",
        color: "primary",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const [graphDetailsNederland, setGraphDetailsNederland] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        color: "info",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  useEffect(() => {
    getYearReport();
  }, []);

  const getYearReport = async () => {
    try {
      const userInformation = getUserInformation();
      const headers = {
        headers: { Authorization: `Bearer ${userInformation.jwt}` },
      };
      const { data, status } = await api.get("/api/expense/year-report/2021", headers);
      if (status === 200) {
        const nederlandExpense = data.nederland;
        setGraphDetailsForSuriname(data);
        setGraphDetailsForNederland(data);
      }
    } catch (exception) {
      console.log("Unable to retrieve year report", exception);
    }
  };
  
  const setGraphDetailsForNederland = (data) => {
    const surinameExpense = data.nederland;
    const NLdataExpenseEUR = [];
    surinameExpense.forEach((expense) => {
      NLdataExpenseEUR.push(expense.totalEurExpense);
    });
    let datasets = [
      {
        label: "Expense Euro",
        color: "info",
        data: NLdataExpenseEUR,
      },
    ];
    setGraphDetailsNederland({ ...graphDetailsSuriname, datasets });
  };

  const setGraphDetailsForSuriname = (data) => {
    const surinameExpense = data.suriname;
    const SUdataExpenseUSD = [];
    const SUdataExpenseSRD = [];
    surinameExpense.forEach((expense) => {
      SUdataExpenseUSD.push(expense.totalUsdExpense);
      SUdataExpenseSRD.push(expense.totalSrdExpense);
    });
    let datasets = [
      {
        label: "Expense USD",
        color: "info",
        data: SUdataExpenseUSD,
      },
      {
        label: "Expense SRD",
        color: "primary",
        data: SUdataExpenseSRD,
      },
    ];
    setGraphDetailsSuriname({ ...graphDetailsSuriname, datasets });
  };

  const renderMenu = (
    <Menu
      anchorEl={menu}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={closeMenu}>Yesterday</MenuItem>
      <MenuItem onClick={closeMenu}>Last 7 days</MenuItem>
      <MenuItem onClick={closeMenu}>Last 30 days</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox display="flex" justifyContent="flex-end" mb={3} ml={2}>
          <SuiBox mr={3}>
            <SuiButton variant="outlined" buttonColor="secondary">
              export&nbsp;&nbsp;
              <Icon className="">folder</Icon>
            </SuiButton>
          </SuiBox>
          <SuiButton variant="gradient" buttonColor="dark" onClick={openMenu}>
            today&nbsp;
            <Icon className="">expand_more</Icon>
          </SuiButton>
          {renderMenu}
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "Employees", fontWeight: "medium" }}
                count="930"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "dark", component: "account_circle" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "new users", fontWeight: "medium" }}
                count="744"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "dark", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "sessions", fontWeight: "medium" }}
                count="1,414"
                percentage={{ color: "success", text: "-2%" }}
                icon={{ color: "dark", component: "watch" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <MiniStatisticsCard
                title={{ text: "Pages/Session", fontWeight: "medium" }}
                count="1.76"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "dark", component: "image" }}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <DefaultLineChart
                title="Expense Suriname"
                description={
                  <SuiBox display="flex" ml={-1}>
                    <SuiBadgeDot color="info" badgeContent="USD" />
                    <SuiBadgeDot color="primary" badgeContent="SRD" />
                  </SuiBox>
                }
                chart={graphDetailsSuriname}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <DefaultLineChart
                title="Expense Nederland"
                description={
                  <SuiBox display="flex" ml={-1}>
                    <SuiBadgeDot color="info" badgeContent="EURO" />
                  </SuiBox>
                }
                chart={graphDetailsNederland}
              />
            </Grid>
            {/* <Grid item xs={12} lg={5}>
              <ComplexReportsDoughnutChart
                title="Referrals"
                chart={complexReportsDoughnutChartData}
                tooltip="See which websites are sending traffic to your website"
                action={{
                  type: "internal",
                  route: "/",
                  color: "secondary",
                  label: "see all referrals",
                }}
              />
            </Grid> */}
          </Grid>
        </SuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Social />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Pages />
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
