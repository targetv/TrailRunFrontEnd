import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { FormInput, Button} from '../components/Button';

import { TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Stack, Autocomplete} from '@mui/material';




const FormContainer = styled.section`
display: grid;
width: 50%;
grid-template-rows: auto;
grid-gap: 20px;
height: 100vh;

@media screen and (max-width: 700px){
    width: 80%;
}
  


h3{
    place-self: center;
    font-size: 1.5rem;
    padding-top: 20px;
    color: var(--blue);
}


 
   

`

const FormBackGround = styled.div`
background-color: lightgrey;
height: 100vh;
display: grid;
place-items: center;
overflow: scroll;




`

const RegisterForm = styled.form`
padding: 20px;
display: grid;
grid-template-rows: repeat(6, minmax(50px, 1fr));
grid-gap: 20px;
justify-items: center;
height: 100%;
background-color: white;

@media screen and (max-width: 700px){
    grid-template-rows: repeat(6, minmax(50px, 1fr));
    
    grid-gap: 10px;
    align-items: center;
    
}

.width50{
    width: 50%;
    height: 100%;

    @media screen and (max-width: 700px){
        width: 80%;
       
    }
}

.ColInputs{
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-gap: 10px;
    place-items: center;
   

   
    
}


.twoInputCol{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    grid-gap: 10px;
    width: 60%;
    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
}


`

function RegistrationForm() {

    const history = useHistory();


    

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
        clubmember: false,
        signature: "test"
    })

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setForm({...form, [name]: value})

    }

    const tShirtSizes = ["M","L"];

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3030/register", {
            credentials: "include",
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(form)
        }).then(resp => {
            if(resp.ok){
                console.log("success")
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
                    signature: "test"
              
            })
            history.push("/order");

            }
            else if (resp.status === 501){
                console.log("User already exists")
            
            }
            else{
                console.log(resp)
            }
        })

    }
 


    return (
        <FormBackGround>
        <FormContainer className="container80">
            <h3>Coxhoe Trail Run Registration</h3>
            <RegisterForm onSubmit={handleSubmit} noValidate>
            <TextField required id="outlined-default" label="First Name" variant="outlined"  className="width50" onChange={handleChange} name="firstname" type="text"/>
            <TextField required id="outlined-default" label="Last Name" variant="outlined" className="width50" onChange={handleChange} name="lastname" type="text"/>
            <TextField required id="outlined-default" label="Email" variant="outlined" className="width50" onChange={handleChange} name="email" type="email"/>
            <div className="twoInputCol">
            <TextField required name="dob"  onChange={handleChange} type="date" onChange={handleChange} />    
            <TextField required id="outlined-default" label="Age On Race Day" variant="outlined" type="text" name="ageonraceday" onChange={handleChange} />
            </div>
            <TextField required id="outlined-default" label="Address" variant="outlined" type="text" name="address" onChange={handleChange} className="width50"/>  
            <TextField required id="outlined-default" label="PostCode" variant="outlined" type="text" name="postcode" onChange={handleChange} className="width50"/>
            <TextField required id="outlined-default" label="Telephone Number" variant="outlined" type="text" name="telephonenumber" onChange={handleChange} className="width50"/>
                <div className="twoInputCol">
                <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" onChange={handleChange} />
    <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" onChange={handleChange} />
  </RadioGroup>
</FormControl>

<Autocomplete
       options={tShirtSizes}
       disablePortal
       
        id="combo-box-demo"
        value={form.shirtsize}
        onChange={(event, newValue) => {
          setForm({...form, shirtsize: newValue})
        }}
        renderInput={(params) => (
          <TextField {...params} label="T-shirt Size"  name="shirtsize" />
        )}
      />


                </div>
             
                
                <Button onClick={handleSubmit}>Submit</Button>
                
            </RegisterForm>

        </FormContainer>
        </FormBackGround>
    );
}

export default RegistrationForm;