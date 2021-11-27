// import {useState, useEffect} from 'react';
// import Card from "@mui/material/Card";

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";

// // Soft UI Dashboard PRO React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// // Data
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";
// import api from 'api/api';

// const HmprOverview = ()=> {

//   const[requestFilter,setRequestFilter]=useState({
//     startDate:"2021-11-26",
//     endDate:"2021-11-28",
//   })
//   const [formattedHmpr,setFormattedHmpr] = useState(null);

//   useEffect(()=>{
//     fetchHmprDataAndFormat();
//   },[])

//   const fetchHmprDataAndFormat = async()=>{
//     const {data,status} = await api.post('/api/hmpr/filter',requestFilter);
//     formatHmprDataForTable(data)
//   }

//   const formatHmprDataForTable = (hmprRawDdata)=>{
//     const formatted = {
//       columns: [
//         { Header: "id", accessor: "id", width: "20%"},
//         { Header: "Aangemaakt Door", accessor: "createdBy", width: "25%" },
//         { Header: "Geupdate Door", accessor: "updatedBy" },
//         { Header: "Voornaam", accessor: "firstName", width: "7%" },
//         { Header: "Achternaam", accessor: "lastName" },
//         // { Header: "gdsProvider", accessor: "gdsProvider" },
//         { Header: "Currency", accessor: "currency" },
//         // { Header: "Airline", accessor: "airline" },
//         { Header: "BK-Nummer", accessor: "bookingsCardNumber" },
//         { Header: "Verkocht In", accessor: "branchSold" },
//         { Header: "Basic Fare", accessor: "fare" },
//         { Header: "Tax", accessor: "tax" },
//         { Header: "Totaal", accessor: "total" },
//         { Header: "Commissie(%)", accessor: "commissionInPercentage" },
//         { Header: "Commissie", accessor: "commissionInValue" },
//         { Header: "Bedrag Doorbetalen", accessor: "amountToPay" },
//         { Header: "Bedrag Ontvangen", accessor: "amountReceived" },
//         { Header: "Winst", accessor: "profit" },
//         // { Header: "Betalings Methode", accessor: "paymentMethod" },
//         { id:'isPaid'  ,Header: "Is Betaald", accessor: data=>data.isPaid?"True":"False" },
//         { Header: "Ticket Uitgegeven In", accessor: "ticketIssuedIn" },
//         { Header: "Gemaakt Op", accessor: "createdAt" },
//         { Header: "Geupdate Op", accessor: "updatedAt" },
//       ],
//       rows: []
//     };

//     hmprRawDdata.forEach((hmpr)=>{
//       formatted.rows.push(hmpr);
//     })
//     setFormattedHmpr(formatted);

//   }

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <SuiBox pt={6} pb={3}>
//         <Card>
//           <SuiBox p={3} lineHeight={1}>
//             <SuiTypography variant="h5" fontWeight="medium">
//               HMPR Overzicht
//             </SuiTypography>
//             <SuiTypography variant="button" fontWeight="regular" textColor="text">
//               Selecteed Datum Range
//             </SuiTypography>
//           </SuiBox>
//           {formattedHmpr && (
//             <DataTable table={formattedHmpr} canSearch />
//           )}
//         </Card>
//       </SuiBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default HmprOverview;
