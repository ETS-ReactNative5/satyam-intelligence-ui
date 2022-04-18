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

import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import BasicLayout from "mycomponents/authentication/components/BasicLayout";
import Socials from "mycomponents/authentication/components/Socials";
import Separator from "mycomponents/authentication/components/Separator";

import SatyamHolidaysLogo from "assets/images/logos/satyamholidays.png";
// import jwt_decode from "jwt-decode";

import { useHistory } from "react-router-dom";
import curved9 from "assets/images/curved-images/curved9.jpg";
import { fireAlert } from "utils/Alert";

import LoadingBar from "mycomponents/LoadingBar";
import api from "api/api";

function Basic() {
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);
  const [sid, setSid] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const handleSetRememberMe = (event) =>{ 
    const checked = event.target.checked;
    setRememberMe(checked);
    if(checked){
      localStorage.setItem('mySid',sid)
    }else{
      localStorage.removeItem('mySid',sid)
    }
  }

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const requestBody = { username: sid, password };
      const { data, status } = await api.post("/api/authentication/login", requestBody);
      if (status === 200) {
        const jwt = data.jwt;
        localStorage.setItem("jwt", jwt); 
        history.push("/");
      }
    } catch (exception) {
      if(exception.response && exception.response.status === 401){
        fireAlert(`${exception.response.data.message}`
        ,`Please try again`, 'error','Okay!')
      }else{
        fireAlert(`${'Server Error'}`
        ,`${exception.response.data.message}`, 'error','Okay!')
      }
    }finally{
      setLoading(true);
    }
  };

  useEffect(()=>{
    const currentSid = localStorage.getItem('mySid');
    if(currentSid){
      setRememberMe(true)
      setSid(currentSid)  
    }
  },[])

  const handleSid = (event)=>{
    const sid = event.target.value;
    setSid(sid);
  }



  return (
    <BasicLayout title="Satyam Intelligence Platform" description="Welcome! " image={curved9}>
      <Card>
      {loading && <LoadingBar />}
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium"></SuiTypography>
        </SuiBox>
        <SuiBox mb={2}>
          <SuiBox mb={2}>
            <SuiBox display="flex" justifyContent="center">
              <img src={SatyamHolidaysLogo}></img>
            </SuiBox>
          </SuiBox>
        </SuiBox>
        <SuiBox p={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput
                type="text"
                placeholder="SID"
                value={sid}
                onChange={handleSid}
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={(event)=>(handleSetRememberMe(event))} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                customClass="cursor-pointer user-select-none"
              >
                &nbsp;&nbsp;Remember SID
              </SuiTypography>
            </SuiBox>
            <Separator message={""} />
            <SuiBox mt={1} mb={3}>
              <SuiButton
                // component={Link}
                // to="/authentication/sign-up/basic"
                variant="gradient"
                buttonColor="dark"
                fullWidth
                onClick={handleSignIn}
              >
                Sign In
              </SuiButton>
            </SuiBox>
            <Separator message="Satyam Holidays" />
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
