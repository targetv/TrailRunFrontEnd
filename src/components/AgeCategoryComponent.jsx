import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function AgeCategoryComponent({ fetchName, num1, num2, gender }) {
  const [enteries, setEnteries] = useState([]);

  useEffect(() => {
    const agerange = {
      num1: num1,
      num2: num2,
      gender: gender,
    };
    fetch(`http://localhost:3030/${fetchName}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agerange),
    })
      .then((resp) => resp.json())
      .then((data) => setEnteries(data));
  }, []);

  console.log(enteries);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "ageonraceday", headerName: "Age On Race Day", width: 130 },
    { field: "clubname", headerName: "Club Name", width: 130 },
    { field: "shirtsize", headerName: "Shirt Size", width: 130 },
  ];

  return (
    <div style={{ height: "250px", width: "100%" }}>
      {/* <DataGrid
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
      /> */}
      <DataGrid columns={columns} rows={enteries} />
    </div>
  );
}

export default AgeCategoryComponent;