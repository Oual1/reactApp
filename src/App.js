import React from 'react';
import './App.css';
import ListEmployeeComponent from "./componenet/ListEmployeeComponent";
import HeaderComponent from "./componenet/HeaderComponent";
import FooterComponent from "./componenet/FooterComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateEmployeeComponent from './componenet/CreateEmployeeComponent';
import UpdateEmployeeComponent from './componenet/UpdateEmployeeComponent';

function App() {
  
  return (
      <div>
        <Router>
           
           
                <HeaderComponent></HeaderComponent>
                <div className="container">
                    <Routes>
                        <Route path='/' exact element={<ListEmployeeComponent />} />
                        <Route path='/employees' element={<ListEmployeeComponent/>} />
                        <Route path='/add-employee' element={<CreateEmployeeComponent />} />
                        <Route path='/update-employee/:id' element={< UpdateEmployeeComponent/>} />
                    </Routes>
               </div>
               <FooterComponent></FooterComponent>
               
           
        </Router>
      </div>

  );
}

export default App;
