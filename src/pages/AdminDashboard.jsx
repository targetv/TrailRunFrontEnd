import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AdminCardSection from '../components/AdminCardSection';
import EnteriesTableSection from '../components/EnteriesTableSection';

const AdminDashboardContainer = styled.main`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    padding-top: 20px;
    height: 100vh;

`



function AdminDashboard(props) {

    const [dashboardData , setDashboardData] = useState({enteries: 289, failedpayments: 4, earned: 2500})
    

    return (
       <AdminDashboardContainer className="container80">
           <AdminCardSection dashboardData={dashboardData}/>
           <EnteriesTableSection/>

        


       </AdminDashboardContainer>
    );
}

export default AdminDashboard;