import React from "react";
import styled from "styled-components";

const AdminCardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-gap: 20px;
  justify-content: center;
`;

const AdminCard = styled.div`
  display: grid;
  border-radius: 20px;
  height: 300px;

  grid-template-rows: 1fr 1fr;
  place-items: center;

  background-color: ${(props) => props.cardColor || "white"};

  h4 {
    font-size: 10rem;
    color: white;
  }

  .smallerH4 {
    font-size: 6rem;
  }

  h5 {
    color: white;
    font-size: 2rem;
  }
`;

function AdminCardSection({ enteries }) {
  // function CountEnteries(status) {
  //   const confirmedEnteries = enteries.filter(
  //     (entry) => entry.order[0].Payment[0].paymentstatus === status
  //   );
  //   return confirmedEnteries;
  // }

  return (
    <AdminCardContainer>
      <AdminCard cardColor="#63A46C">
        {/* <h4>{CountEnteries("COMPLETED").length}</h4> */}
        <h5>Enteries</h5>
      </AdminCard>
      <AdminCard cardColor="#CD4631">
        {/* <h4>{CountEnteries("FAILED").length}</h4> */}
        <h5>Failed Payments</h5>
      </AdminCard>
      <AdminCard cardColor="#79ADDC">
        {/* <h4 className="smallerH4">£{dashboardData.earned}</h4> */}
        <h5>Earned</h5>
      </AdminCard>
    </AdminCardContainer>
  );
}

export default AdminCardSection;
