import React, { useState, useEffect } from 'react';
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







function EnteriesTableSection() {

    const [enteries, setEnteries] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/getenteries", {
            method: "GET",
           credentials: "include"
        }).then(resp => resp.json()).then(data => setEnteries(data))
    },[])

    console.log(enteries)

     
    
    return (
        <EnteriesTableSectionContainer>
            {enteries.map(user => {
                return(
                  <CollapsableComponent user={user}/>
                )
                
            })}
        </EnteriesTableSectionContainer>
    );
}

export default EnteriesTableSection;

