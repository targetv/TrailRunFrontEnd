import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallButton } from './Button';
import {BsPersonFill} from "react-icons/bs"

const UserToDisplayContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
border: 1px solid lightgrey;
border-radius: 20px;
height: 70px;
place-items: center;
padding: 10px;






`


const UserToDisplay = styled.li`
   
    display: grid;
    grid-template-rows: 70px 1fr;

    
    .collapsableContent{
        padding: 10px;
        border: 1px solid lightgrey;
        border-top: none;
        place-items: center;
    
        
        
    }
     td, th{
        
        text-align: center;
        margin-left: 10px;
        padding: 12px 15px;
    }

    



`

function CollapsableComponent({user}) {
    const [collapsed, setCollapsed] = useState(false)
    
    return (
       <UserToDisplay>
             <UserToDisplayContainer>
                        <p>{`${user.firstname} ${user.lastname}`}</p>
                    <p>{user.email}</p>
                    <SmallButton onClick={ () => {
                       setCollapsed(!collapsed)
                    }}><BsPersonFill/></SmallButton>

                </UserToDisplayContainer>
                <div className={collapsed ? "collapsableContent" : "collapsableContent collapse"} >
                    <table>
                        <tr>
                            <th>DOB</th>
                            <th>Address</th>
                            <th>PostCode</th>
                            <th>Telephone Number</th>
                            <th>Gender</th>
                            <th>Age On Race Day</th>
                            <th>Shirt Size</th>
                            <th>Club Member</th>
                            <th>Signature</th>
                        </tr>
                        <tr>
                        <td>{user.dob}</td>
                    <td>{user.address}</td>
                    <td>{user.postcode}</td>
                    <td>{user.telephonenumber}</td>
                    <td>{user.gender}</td>
                    <td>{user.ageonraceday}</td>
                    <td>{user.shirtsize}</td>
                    <td>{user.clubmember}</td>
                    <td>{user.signature}</td>
                        </tr>

                    </table>
                    {/* <p>{user.dob}</p>
                    <p>{user.address}</p>
                    <p>{user.postcode}</p>
                    <p>{user.telephonenumber}</p>
                    <p>{user.gender}</p>
                    <p>{user.ageonraceday}</p>
                    <p>{user.shirtsize}</p>
                    <p>{user.clubmember}</p>
                    <p>{user.signature}</p> */}
                    </div>
                    </UserToDisplay>
    );
}

export default CollapsableComponent;