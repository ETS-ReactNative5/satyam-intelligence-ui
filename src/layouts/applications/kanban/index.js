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

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";

// react-html-parser components
import ReactHtmlParser from "react-html-parser";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Kanban application components
import Header from "layouts/applications/kanban/components/Header";

// Custom styles for the Kanban
import styles from "layouts/applications/kanban/styles";

// Data
import boards from "layouts/applications/kanban/data";

function Kanban() {
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState("");
  const classes = styles();

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = ({ currentTarget }) => setFormValue(currentTarget.value);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox display="flex" justifyContent="flex-end" m={2}>
          <Header />
        </SuiBox>
        <SuiBox customClass={classes.kanban}>
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }, { addCard }) => (
              <>
                <SuiBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <SuiTypography variant="h6">{title}</SuiTypography>
                  <SuiButton size="small" onClick={(event) => openNewCardForm(event, id)}>
                    <Icon className=" font-bold text-dark">add</Icon>
                  </SuiButton>
                </SuiBox>
                {newCardForm === id ? (
                  <SuiBox my={2.5}>
                    <SuiInput
                      value={formValue}
                      inputProps={{ rows: 2 }}
                      onChange={handeSetFormValue}
                      multiline
                    />
                    <SuiBox display="flex" mt={2}>
                      <SuiButton
                        variant="gradient"
                        buttonColor="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </SuiButton>
                      <SuiBox ml={1}>
                        <SuiButton
                          variant="gradient"
                          buttonColor="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </SuiButton>
                      </SuiBox>
                    </SuiBox>
                  </SuiBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }, { dragging }) => (
              <SuiBox
                key={id}
                customClass={classes.kanban_card}
                dragging={dragging.toString() || undefined}
              >
                {typeof template === "string" ? ReactHtmlParser(template) : template}
              </SuiBox>
            )}
            onCardNew={() => null}
          />
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;
