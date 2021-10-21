import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function AllEnteriesComponent({ enteries }) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 250, editable: true },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "postcode", headerName: "Post Code", width: 130 },
    { field: "telephonenumber", headerName: "Phone Number", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    {
      field: "dob",
      headerName: "DOB",
      width: 170,
    },
    {
      field: "ageonraceday",
      headerName: "Age On Race Day",
      width: 130,
    },
    { field: "clubmember", headerName: "Club Member", width: 130 },
    { field: "order", headerName: "Order", width: 130 },
    { field: "clubname", headerName: "Club Name", width: 130 },
    { field: "registernumber", headerName: "Register Number", width: 130 },
    { field: "shirtsize", headerName: "Shirt Size", width: 130 },
    { field: "Signature", headerName: "Signature", width: 130 },
  ];

  console.log(enteries);

  return (
    <div style={{ height: "350px", width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={enteries}
        components={{
          Toolbar: GridToolbar,
        }}
        filterModel={{
          items: [
            {
              columnField: "id",
              operatorValue: "contains",
              value: "75",
            },
          ],
        }}
      />
    </div>
  );
}

export default AllEnteriesComponent;
