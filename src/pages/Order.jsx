
import styled from 'styled-components';
import React from 'react';


const PayPalButtonsContainer = styled.main`


.buttons{
  display: grid;
  place-items: center;
  width: 100%;
}



`

const initialOptions = {
    'client-id': 'test',
    currency: 'GBP',
    intent: 'capture'
}


function Order({PayPalScriptProvider, PayPalButtons }) {

    
 
    return (
        <PayPalButtonsContainer>
            <PayPalScriptProvider options={initialOptions} className="container">
                <PayPalButtons className="buttons" createOrder={ () => {
                   return  fetch("http://localhost:3030/create-order", {
                       credentials: "include",
                       method: "POST",
                       headers: {
                        "Content-Type": "application/json"
                       },
                       body: JSON.stringify({
                           items: [{
                            id: 1,
                            quantity: 1
                           }]
                        
                       })
                   }).then(res => {
                       if(res.ok) return res.json() 
                       return res.json().then(json => Promise.reject(json))
                   }).then(({id}) => {return id}).catch(e => {
                       console.log(e.error)
                   })
                }} onApprove={(data, actions) => {
                    return actions.order.capture().then(function(details) {
                        alert('Transaction completed by' + details.payer.name.given_name);
                    })
                }}/>
            </PayPalScriptProvider>
        </PayPalButtonsContainer>
    );
}

export default Order;