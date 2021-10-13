
import styled from 'styled-components';
import React, { useState } from 'react';
import { useHistory } from 'react-router';




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


function Order({PayPalScriptProvider, PayPalButtons, orderId }) {

    
    const history = useHistory();
   
 
    return (
        <PayPalButtonsContainer>
            <PayPalScriptProvider options={initialOptions} className="container">
                <PayPalButtons className="buttons" createOrder={ () => {

                    let orderInformation = null;
                    let product = null;

                 return fetch("http://localhost:3030/find-order",{
                    credentials: "include",
                   method: "POST",
                    headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify({...orderId})
                }
                
                ).then(resp => resp.json()).then(data => {
        
                    orderInformation = data.id
                    product = data.product

                   
                      return fetch("http://localhost:3030/create-order", {
    credentials: "include",
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({
        items: [{
            id: orderInformation,
            product: product
        }]
     
    })
}).then(res => {
    console.log("Response",res);
    if(res.ok) return res.json() 
    return res.json().then(json => Promise.reject(json))
}).then(({id}) => {return id}).catch(e => {
    console.log(e.error)
})           
                })
   
}} onApprove={(data, actions) => {
                    return actions.order.capture().then(order => {

                    const paymentInformation = { orderid: orderId.id, payeremail: order.payer.email_address, payername: `${order.payer.name.given_name} ${order.payer.name.surname}`,
                        payerpaypalid: order.payer.payer_id, paymentid: order.purchase_units[0].payments.captures[0].id, paymenttime: order.purchase_units[0].payments.captures[0].create_time, paymentstatus: order.purchase_units[0].payments.captures[0].status, 
                        paymentrefundlink: order.purchase_units[0].payments.captures[0].links[1].href, paymentorderlink: order.purchase_units[0].payments.captures[0].links[2].href
                }
            

                        fetch("http://localhost:3030/payment-status",{
                            credentials: 'include',
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(paymentInformation)
                        }).then(resp => resp.json()).then(data => {
                            data.paymentstatus === "COMPLETED" ? history.push("/paymentsuccess") : history.push("/paymentfailed")
                        })
                        
                    })
                   
                    
                }}/>
            </PayPalScriptProvider>
        </PayPalButtonsContainer>
    );
}

export default Order;