import styled from "styled-components";
import { Button } from "./Button";
import { useHistory } from "react-router";







const RegistrationSection = styled.section`

display: grid;
grid-template-rows: 100px 300px;
place-items: center;
grid-gap: 20px;

h2{
    font-size: 2.5rem;
    color: var(--blue);
}

.cardsContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    width: 100%;
    height: 100%;
    
}

.card{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 300px;
    height: 300px;
    place-self: center;
    border-radius: 10px;
    padding: 20px;
    display: grid;
    place-items: center;

    ul{
        list-style-type: none;
    }
    li{
        text-align: center;
        margin-bottom: 5px;
    }

    p{
        background-color: var(--yellow);
        color: var(--blue);
        padding: 25px;
        border-radius: 50%;
        font-size: 1.5rem;
    }

    .none{
        display: none;
    }
}

`

function RegistrationComponent({cost,  setCost}){

    const history = useHistory();

    const priceSelect = (event) => {
        const price =  Number(event.target.lastChild.innerHTML);
        setCost(price)
        history.push("/register")


    }


    return(
        <RegistrationSection className="container80" id="registraion">
            <h2>Registration</h2>
            <div className="cardsContainer">
                <div className="card">
                    <h3>Club Member</h3>
                    <p>£10</p>
                    <ul>
                        <li>Entry</li>
                        <li>Trail Run T-shirt</li>
                    </ul>
                    <Button onClick={priceSelect}>Register <span className="none">10</span></Button>
                </div>
                <div className="card">
                    <h3>None Club Member</h3>
                    <p>£12</p>
                    <ul>
                        <li>Entry</li>
                        <li>Trail Run T-shirt</li>
                    </ul>
                    <Button onClick={priceSelect}>Register <span className="none">12</span></Button>
                </div>
                <div className="card">
                <h3>On The Day</h3>
                    <p>£15</p>
                    <ul>
                        <li>Entry</li>
                        <li>Trail Run T-shirt</li>
                    </ul>
                
                </div>
            </div>

           
        </RegistrationSection>
       

    )
}
export default RegistrationComponent