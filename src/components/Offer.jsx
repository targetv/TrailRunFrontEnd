import styled from "styled-components";
import {FaAward,FaTshirt} from "react-icons/fa"


const OfferSection = styled.section`

 background-color: var(--blue);
   

 .offerSection{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    place-items: center;
    height: 100%;

    @media screen and (max-width: 700px){
        grid-template-rows: auto;
        grid-gap: 20px;s
    }
 }

 .icon{
     font-size: 75px;
     fill: white;
 }

 .col{
     display: grid;
     place-items: center;
    grid-gap: 10px;
 }

 h4{
     font-size: 1.5rem;
     color: white;
 }

`

function OfferComponent(){
    return(
        <OfferSection>
            <div className="container80 offerSection">
            <div className="col"><FaAward className="icon"/> <h4>8 Succesful Years</h4> </div>
            <div className="col"><FaTshirt className="icon"/><h4>Trail Run T-shirt</h4></div>
            <div className="col"><FaTshirt className="icon"/><h4>Fully Marshalled</h4></div>
            </div>
        </OfferSection>
    )
}
export default OfferComponent