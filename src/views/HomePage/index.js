// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "mycomponents/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import { useState, useEffect } from "react";
import Separator from "mycomponents/authentication/components/Separator";


// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Globe from "examples/Globe";

// Soft UI Dashboard PRO React base styles
// import typography from "assets/theme/base/typography";
import breakpoints from "assets/theme/base/breakpoints";

// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";

import SU from "assets/images/icons/flags/SU.png";
import CUR from "assets/images/icons/flags/CUR.png";
import NED from "assets/images/icons/flags/NED.png";
import api from "api/api";
import SuiDatePicker from "components/SuiDatePicker";

// import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
// import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";

function HomePage() {
  const { values } = breakpoints;
  const [euroStatistic, setEuroStatistic] = useState(null);
  const [usdStatistic, setUsdStatistic] = useState(null);
  const [branchSales, setBranchSales] = useState(null);

  const [requestFilter, setRequestFilter] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().setDate(new Date().getDate()+1),
  });

  // const { size } = typography;
  // const { chart, items } = reportsBarChartData;

  useEffect(() => {
    getAnalytics();
  }, []);

  const getAnalytics = async () => {
    const { data, status } = await api.post("/api/analytics", requestFilter);
    if (status === 200) {
      setEuroStatistic(data.euro);
      setUsdStatistic(data.usd);
      setBranchSales(formatBranchSales(data.branchSales));
    }
  };

  const formatBranchSales = (branches) => {
    const formattedBranchBySale = [];

    //Sorting by highest sale on euro and usd
    var sortedHighestSale = branches.slice(0);
    sortedHighestSale.sort((a, b) => (a.euroSale + a.usdSale < b.euroSale + b.usdSale ? 1 : -1));
    sortedHighestSale.forEach((branchSale) => {
      formattedBranchBySale.push({
        Land: getCountry(branchSale),
        Locatie: `${branchSale.branch}`,
        "Verkoop EURO": `€ ${branchSale.euroSale}`,
        "Verkoop USD": `$ ${branchSale.usdSale}`,
      });
    });
    return formattedBranchBySale;
  };

  const getCountry = (branchSale) => {
    if (branchSale.branch.includes("Den Haag")) {
      return [NED, "Nederland"];
    } else if (branchSale.branch.includes("Curacao")) {
      return [CUR, "Curacao"];
    } else {
      return [SU, "Suriname"];
    }
  };

  const getEuroPercentage = () => {
    if (euroStatistic) {
      return calculatePercentage(euroStatistic);
    }
  };

  const getUsdPercentage = () => {
    if (usdStatistic) {
      return calculatePercentage(usdStatistic);
    }
  };

  const calculatePercentage = (statistic) => {
    let calculatedPercentage = (
      (statistic.totalProfit / statistic.totalCommission) * 100 -
      100
    ).toFixed(2);
    let color = "success";
    let sign = "+";

    if (
      ((statistic.totalCommission / statistic.totalProfit) * 100).toFixed(2) == 100.0 ||
      isNaN(calculatedPercentage)
    ) {
      calculatedPercentage = 0;
      sign = "";
    }
    if (calculatedPercentage < 0) {
      color = "error";
      sign = "-";
    }
    return { color, text: `${sign}` + calculatedPercentage + "%" };
  };

  const handleSelectedDate = (date)=>{
    const startDate = new Date(date).toISOString().split('T')[0];
    const endDate = getEndDate(date)
    console.log(startDate,endDate)
    setRequestFilter({startDate,endDate});
    getAnalytics();
  }

  const getEndDate = (date)=>{
    const endDate = new Date(date);
    return endDate.setDate(endDate.getDate()+1);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SuiBox mb={3} p={1}>
              <SuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                satyam intelligence statistics
              </SuiTypography>
            </SuiBox>

            <Grid item xs={4}>
              <SuiBox
                ml={2}
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              >
                <SuiBox mb={1} ml={0.5} mt={3} lineHeight={0} display="inline-block">
                  <SuiTypography component="label" variant="caption" fontWeight="bold">
                    Selected Date (yyyy-mm-dd)
                  </SuiTypography>
                </SuiBox>
                <SuiDatePicker value={requestFilter.startDate} onChange={handleSelectedDate}/>
              </SuiBox>
            </Grid>
            <Separator message={''}/>

            <Grid container>
              <Grid item xs={12}>
                <Globe
                  display={{ xs: "none", md: "block" }}
                  position="absolute"
                  top="10%"
                  right={0}
                  mt={{ xs: -12, lg: 1 }}
                  mr={{ xs: 0, lg: 10 }}
                  canvasStyle={{ marginTop: "3rem" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <SuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "Totale Commissie EURO" }}
                    count={`€ ${euroStatistic && euroStatistic.totalCommission}`}
                    // percentage={{ color: "success", text: "+55%" }}
                    icon={{ color: "info", component: "paid" }}
                  />
                </SuiBox>
                <MiniStatisticsCard
                  title={{ text: "Totale Commissie USD" }}
                  count={`$ ${usdStatistic && usdStatistic.totalCommission}`}
                  // percentage={{ color: "success", text: "+3%" }}
                  icon={{ color: "info", component: "paid" }}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <SuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "Totale Winst EURO" }}
                    count={`€ ${euroStatistic && euroStatistic.totalProfit}`}
                    percentage={getEuroPercentage()}
                    icon={{ color: "info", component: "emoji_events" }}
                  />
                </SuiBox>
                <SuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "Totale Winst USD" }}
                    count={`$ ${usdStatistic && usdStatistic.totalProfit}`}
                    percentage={getUsdPercentage()}
                    icon={{ color: "info", component: "emoji_events" }}
                  />
                </SuiBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={7}>
            <Grid item xs={12} lg={10}>
              <SuiBox mb={3} position="relative">
                <SalesTable title="Verkoop per Filiaal" rows={(branchSales && branchSales) || []} />
              </SuiBox>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid> */}
            <Grid item xs={12} lg={7}>
              {/* <GradientLineChart
                title="Sales Overview"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className=" font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" textColor="text" fontWeight="medium">
                      4% more{" "}
                      <SuiTypography variant="button" textColor="text" fontWeight="regular">
                        in 2021
                      </SuiTypography>
                    </SuiTypography>
                  </SuiBox>
                }
                chart={gradientLineChartData}
              /> */}
            </Grid>
          </Grid>
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default HomePage;
