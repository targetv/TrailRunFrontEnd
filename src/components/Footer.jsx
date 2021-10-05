import styled from "styled-components"

const FooterContainer = styled.footer`

display: grid;
place-items: center;
margin-left: auto;
margin-right: auto;
width: 80%;
height: 75px;


`

function Footer(){
    return(
        <FooterContainer>
            <h3>Active Life Coxhoe</h3>
        </FooterContainer>
        
    )
}
export default Footer