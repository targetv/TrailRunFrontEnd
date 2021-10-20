import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AdminCardSection from "../components/AdminCardSection";

import AgeCategoryComponent from "../components/AgeCategoryComponent";
import AllEnteriesComponent from "../components/AllEnteriesComponent";

const AdminDashboardContainer = styled.main`
  display: grid;
  grid-template-rows: 1fr 1fr repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 20px;
  padding-top: 20px;
  height: 100%;
`;

const CatContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-gap: 5px;

  h3 {
    font-size: 1.5rem;
  }
`;

function AdminDashboard(props) {
  const [dashboardData, setDashboardData] = useState({
    enteries: 289,
    failedpayments: 4,
    earned: 2500,
  });

  return (
    <AdminDashboardContainer className="container80">
      <AdminCardSection dashboardData={dashboardData} />
      <AllEnteriesComponent />
      <CatContainer>
        <h3>Mens Overall</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={16}
          num2={39}
          gender={"male"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Mens 40s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={40}
          num2={49}
          gender={"male"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Mens 50s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={50}
          num2={59}
          gender={"male"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Mens 60s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={60}
          num2={69}
          gender={"male"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Mens 70s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={70}
          num2={79}
          gender={"male"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Womens Overall</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={16}
          num2={39}
          gender={"female"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Womens 40s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={40}
          num2={49}
          gender={"female"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Womens 50s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={50}
          num2={59}
          gender={"female"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Womens 60s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={60}
          num2={69}
          gender={"female"}
        />
      </CatContainer>
      <CatContainer>
        <h3>Womens 70s</h3>
        <AgeCategoryComponent
          fetchName={"agecategory"}
          num1={70}
          num2={79}
          gender={"female"}
        />
      </CatContainer>
    </AdminDashboardContainer>
  );
}

export default AdminDashboard;
