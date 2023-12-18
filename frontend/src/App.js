import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import * as api from './Api/ApiVolunteerApp'
import './App.css'
import VolunteersForm from './components/Volunteers/VolunteersForm'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import AllNeedsContainer from './components/AllNeeds/AllNeedsContainer';
import CompaniesRegForm from './components/CompaniesRegForm/CompaniesRegForm'



function App() {
  const [allNeeds, setAllNeeds] = React.useState([])


  function getAllNeeds() {
    api.getAllActions()
      .then(res => {
        setAllNeeds(res)
        console.log(res)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }  

function addCompany(input_data) {
  return api.addCompany({
    name: input_data.name,
    tin: input_data.tin,
    email: input_data.email,
    contact_person: input_data.contactPerson,
    site: input_data.webSite, 
    telegram: input_data.telegram
  })
  .then(res => {
    localStorage.setItem('company_id', JSON.stringify(res.id));
    return api.addAction({
      name: input_data.requiredServiceName,
      description: input_data.description,
      valid_from: input_data.dateFrom,
      valid_till: input_data.dateTill,
    });
  })
  .then(actionRes => {
    let companyId = localStorage.getItem('company_id');
    return api.addConnectionBetweenCompany({
      action_id: actionRes.id, 
      company_id: companyId 
    });
  })
  .then(connectionRes => {
    console.log("Action and Connection are added:", connectionRes);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    localStorage.removeItem('company_id');
  });
}

function addVolunteer(input_data) {
  api.addVolunteer({
    first_name: input_data.name,
    last_name: input_data.lastName,
    email: input_data.email,
    telegram: input_data.telegram,
    sex: input_data.sexSelectedValue,
  })
    .then((res) => {
      console.log(res);
      return api.addConnectionBetweenVolunteers({
        action_id: input_data.action,
        volunteer_id: res.id,
      });
    })
    .then((connectionRes) => {
      console.log("Connection added:", connectionRes);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}


  React.useEffect(() => {
    getAllNeeds()
  }, [])

  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Routes>
          <Route
              exact path="/"
              element={
                <Main/>
              }
          />
          <Route
              path="/volunteers"
              element={
                <AllNeedsContainer
                  allNeeds={allNeeds}
                />
              }
          />
          <Route
              path="/volunteers-form"
              element={
                <VolunteersForm
                  addVolunteer={addVolunteer}
                />
              }
          />
          <Route
              path="/companies"
              element={
                <CompaniesRegForm
                  handleAddCompany={addCompany}
                />
              }
          />
      </Routes>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
