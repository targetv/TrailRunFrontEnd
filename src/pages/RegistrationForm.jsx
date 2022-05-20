import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../components/Button";
import { gql, useMutation, useQuery } from "@apollo/client";
import Card from "@mui/material/Card";

import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Autocomplete,
  Alert,
} from "@mui/material";

const FormBackGround = styled.div`
  background-color: lightgrey;
  height: 100%;
  display: grid;
  place-items: center;
  overflow: scroll;
  padding: 20px;
  h3 {
    text-align: center;
    font-size: 1.5rem;
    padding-top: 20px;
    color: ${(props) => props.theme.colors.blue};
  }
`;

const SmallText = styled.p`
  width: 50%;
  color: red;
  font-size: bold;
`;

const RegisterForm = styled.form`
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(6, minmax(50px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 700px) {
    grid-template-rows: repeat(6, minmax(50px, 1fr));

    grid-gap: 10px;
    align-items: center;
  }

  .width50 {
    width: 50%;
    height: 100%;

    @media screen and (max-width: 700px) {
      width: 80%;
    }
  }

  .ColInputs {
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-gap: 10px;
    place-items: center;
  }

  .twoInputCol {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-gap: 10px;
    width: 60%;
    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
`;

function RegistrationForm({ userId }) {
  const history = useHistory();

  const apiUrl = process.env.REACT_APP_API_URL;
  const [userExsits, setUserExists] = useState(false);

  const formRef = useRef();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    address: "",
    postcode: "",
    telephonenumber: "",
    gender: "",
    ageonraceday: "",
    shirtsize: "",
    signature: "",
    clubname: "",
    registrationnumber: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "ageonraceday") {
      value = Number(event.target.value);
    }

    setForm({ ...form, [name]: value });
  };

  const tShirtSizes = ["M", "L", "XL"];

  const CREATE_NEW_USER = gql`
    mutation Mutation($input: NewUser) {
      CreateNewUser(input: $input) {
        success
        userId
      }
    }
  `;

  const USER = gql`
    query User($input: GetUserByEmail) {
      User(input: $input) {
        email
      }
    }
  `;
  const [createUser, { loading, error }] = useMutation(CREATE_NEW_USER);
  const { refetch } = useQuery(USER);

  const handleSubmit = async (event) => {
    try {
      form["signature"] = `${form.firstname} ${form.lastname} `;
      if (formRef.current.reportValidity()) {
        event.preventDefault();
        // await getUser({variables: {input: {form.email}}})
        const fetchUser = await refetch({ input: { email: form.email } });
        if (fetchUser?.data?.User?.email) {
          setUserExists(true);
          throw "User Exists";
        } else {
          const createdUser = await createUser({
            variables: { input: { ...form } },
          });

          if (error) {
            return "Error";
          }
          if (loading) {
            return "Loading";
          }
          userId.current = createdUser?.data?.CreateNewUser?.userId;

          setForm({
            firstname: "",
            lastname: "",
            email: "",
            dob: "",
            address: "",
            postcode: "",
            telephonenumber: "",
            gender: "",
            ageonraceday: "",
            shirtsize: "",
            clubmember: false,
            signature: "",
          });

          history.push("/checkout");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormBackGround>
      <Card className="container80">
        <h3>Coxhoe Trail Run Registration</h3>
        {userExsits && (
          <Alert severity="error">
            {" "}
            Previous Registration Already Exists Please Call 01913771789!
          </Alert>
        )}
        <RegisterForm ref={formRef} onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-error"
            label="First Name"
            variant="outlined"
            className="width50"
            onChange={handleChange}
            value={form["firstname"]}
            name="firstname"
            type="text"
          />
          <TextField
            required
            id="outlined-default"
            label="Last Name"
            variant="outlined"
            className="width50"
            onChange={handleChange}
            name="lastname"
            value={form["lastname"]}
            type="text"
          />
          {userExsits ? (
            <TextField
              error
              required
              helperText="User Already Exists"
              id="outlined-error"
              label="Email"
              variant="outlined"
              className="width50"
              onChange={handleChange}
              name="email"
              value={form["email"]}
              type="email"
            />
          ) : (
            <TextField
              required
              id="outlined-error"
              label="Email"
              variant="outlined"
              className="width50"
              onChange={handleChange}
              name="email"
              value={form["email"]}
              type="email"
            />
          )}
          <div className="twoInputCol">
            <TextField
              required
              name="dob"
              onChange={handleChange}
              type="date"
              value={form["dob"]}
            />
            <TextField
              required
              id="outlined-default"
              label="Age On Race Day"
              variant="outlined"
              type="number"
              name="ageonraceday"
              value={form["ageonraceday"]}
              onChange={handleChange}
            />
          </div>
          <TextField
            required
            id="outlined-default"
            label="Address"
            variant="outlined"
            type="text"
            name="address"
            onChange={handleChange}
            value={form["address"]}
            className="width50"
          />
          <TextField
            required
            id="outlined-default"
            label="PostCode"
            variant="outlined"
            type="text"
            name="postcode"
            onChange={handleChange}
            value={form["postcode"]}
            className="width50"
          />
          <TextField
            required
            id="outlined-default"
            label="Telephone Number"
            variant="outlined"
            type="text"
            name="telephonenumber"
            onChange={handleChange}
            value={form["telephonenumber"]}
            className="width50"
          />
          <div className="twoInputCol">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                value={form["gender"]}
              >
                <FormControlLabel
                  value="female"
                  name="gender"
                  control={<Radio />}
                  label="Female"
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="male"
                  name="gender"
                  control={<Radio />}
                  label="Male"
                  onChange={handleChange}
                />
              </RadioGroup>
            </FormControl>

            <Autocomplete
              options={tShirtSizes}
              disablePortal
              id="combo-box-demo"
              value={form["shirtsize"]}
              className="width50"
              onChange={(event, newValue) => {
                setForm({ ...form, shirtsize: newValue });
              }}
              renderInput={(params) => (
                <TextField {...params} label="T-shirt Size" name="shirtsize" />
              )}
            />
          </div>

          <FormControl component="fieldset">
            <FormLabel component="legend">Are You A Club Member?</FormLabel>
            <RadioGroup
              row
              aria-label="clubmembercheck"
              name="row-radio-buttons-group"
              value={form["clubmember"]}
            >
              <FormControlLabel
                value="Yes"
                name="clubmember"
                control={<Radio />}
                label="Yes"
                onChange={handleChange}
              />
              <FormControlLabel
                value="No"
                name="clubmember"
                control={<Radio />}
                label="No"
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
          {form["clubmember"] === "Yes" && (
            <>
              <TextField
                required
                id="outlined-default"
                label="Club Name"
                variant="outlined"
                type="text"
                name="clubname"
                onChange={handleChange}
                value={form["clubname"]}
                className="width50"
              />
              <TextField
                required
                id="outlined-default"
                label="Registration Number"
                variant="outlined"
                type="text"
                name="registrationnumber"
                onChange={handleChange}
                value={form["registrationnumber"]}
                className="width50"
              />
            </>
          )}
          <SmallText>
            *Terms and Conditons Trail Run T-shirt sizes can not be guaranteed
            for on the day registrations. I understand that I participate
            completely at my own risk and organisers will not be held
            responsible for any loss or injury incurred to my person, however
            caused, during or as a result of taking part in the race.
          </SmallText>
          <Button onClick={handleSubmit}>Submit</Button>
        </RegisterForm>
      </Card>
    </FormBackGround>
  );
}

export default RegistrationForm;
