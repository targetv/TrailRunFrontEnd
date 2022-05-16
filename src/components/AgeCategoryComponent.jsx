/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rem } from "polished";
import { gql, useQuery } from "@apollo/client";

function AgeCategoryComponent({ fetchName, num1, num2, gender }) {
  // const [enteries, setEnteries] = useState([]);

  // const apiUrl = process.env.REACT_APP_API_URL;

  // useEffect(() => {
  //   const agerange = {
  //     num1: num1,
  //     num2: num2,
  //     gender: gender,
  //   };
  //   fetch(`${apiUrl}/${fetchName}`, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(agerange),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => setEnteries(data));
  // }, []);

  const USERS = gql`
    query GetUsers {
      Users {
        id
        firstname
        lastname
        email
        dob
        address
        postcode
        telephonenumber
        gender
        ageonraceday
        shirtsize
        clubmember
      }
    }
  `;

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "ageonraceday", headerName: "Age On Race Day", width: 130 },
    { field: "clubname", headerName: "Club Name", width: 130 },
    { field: "shirtsize", headerName: "Shirt Size", width: 130 },
  ];

  const { loading, error, data } = useQuery(USERS);
  if (loading) return "Loading";
  if (error) return "Error";

  return (
    <div style={{ height: `${rem("250px")}`, width: "100%" }}>
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
      <DataGrid columns={columns} rows={data?.Users} />
    </div>
  );
}

export default AgeCategoryComponent;
