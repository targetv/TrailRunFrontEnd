import React, { useState } from 'react';
import styled from 'styled-components';
import CollapsableComponent from './CollapsableComponent';



const EnteriesTableSectionContainer = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-rows: auto;
    grid-gap: 10px;
    overflow: scroll;
 


    .collapsableContent{
        display: grid;
        
    }
    .collapse{
        display: none;
    }

`


const fakeUsers = [{email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"}, {email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"},
{email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"},
{email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"},
{email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"},
{email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"},
{email: "test@gmail.co.uk",
firstname: "sean",
lastname: "davison",
dob: "15/06/1998",
address: "mind",
postcode: "dh",
telephonenumber: "4434343434343",
gender : "male",
ageonraceday: 25,
shirtsize: "L",
clubmember: false,
signature: "davison"}]

// const fetchUsers= async () => {
//     await fetch("")
// }



function EnteriesTableSection() {

     
    
    return (
        <EnteriesTableSectionContainer>
            {fakeUsers.map(user => {
                return(
                  <CollapsableComponent user={user}/>
                )
                
            })}
        </EnteriesTableSectionContainer>
    );
}

export default EnteriesTableSection;

