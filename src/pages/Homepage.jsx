
import Header from "../components/Header"
import styled from "styled-components";

const HomepageContainer = styled.main`

display: grid;
grid-template-rows: 100px 1fr 100px;


`







function Homepage(){
    return(
        <HomepageContainer>
        <Header/>
        </HomepageContainer>
    )
}

export default Homepage