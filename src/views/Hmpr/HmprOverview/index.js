import React, {useState, useEffect} from 'react';

// Soft UI Dashboard PRO React components

// Soft UI Dashboard PRO React example components

// Data
import { Card } from '@mui/material';
import api from 'api/api';
import SuiBox from 'components/SuiBox';
import SuiTypography from 'components/SuiTypography';
import DataTable from 'examples/Tables/DataTable';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import LoadingBar from 'mycomponents/LoadingBar';

const HmprOverview =  ()=> {

  const[requestFilter,setRequestFilter]=useState({
    startDate:"2021-11-26",
    endDate:"2021-11-28",
  })
  const [formattedHmpr,setFormattedHmpr] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetchHmprDataAndFormat();
    return ()=>{""}
  },[])

  const fetchHmprDataAndFormat = async()=>{
    try{
      const {data,status} = await api.post('/api/hmpr/filter',requestFilter);
      if(status===200){
        formatHmprDataForTable(data);
        setLoading(false);
      }
    }catch(exception){
      console.log('Failed to fetch hmpr overview')
    }
    
  }

  const formatHmprDataForTable = (hmprRawDdata)=>{
    const formatted = {
      columns: [
        { Header: "id", accessor: "id", width: "20%"},
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
        { id:'isPaid'  ,Header: "Is Betaald", accessor: data=>data.isPaid?"True":"False" },
        { Header: "Ticket Uitgegeven In", accessor: "ticketIssuedIn" },
        { Header: "Gemaakt Op", accessor: "createdAt" },
        { Header: "Geupdate Op", accessor: "updatedAt" },
      ],
      rows: []
    };

    hmprRawDdata.forEach((hmpr)=>{
      formatted.rows.push(hmpr);
    })
    setFormattedHmpr(formatted);

  }

  return (
    <>
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox pt={6} pb={3}>
        <Card>
        {loading && (<LoadingBar/>)}
          <SuiBox p={3} lineHeight={1}>
            <SuiTypography variant="h5" fontWeight="medium">
              HMPR Overzicht
            </SuiTypography>
            <SuiTypography variant="button" fontWeight="regular" textColor="text">
              Selecteed Datum Range
            </SuiTypography>
          </SuiBox>
          {formattedHmpr && (
            <DataTable table={formattedHmpr} canSearch />
          )}
        </Card>
      </SuiBox>
      <Footer />
    </DashboardLayout>
    </>
  );
}

export default HmprOverview;
