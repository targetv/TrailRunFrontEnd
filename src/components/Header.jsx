import styled from "styled-components";
import {FaHome} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import Logo from "../images/logo_activelife.png"
import { Button } from "./Button";
import { useHistory, useParams } from "react-router";


const HeaderContainer = styled.header`

display: grid;
grid-template-columns: 2fr 7fr 1fr 2fr;
place-items: center;
position: sticky;
top: 0;
z-index: 10;
background-color: white;


img{
    width: 144px;
    height: 70px; 
}

li{
    display: inline-block;
    margin-left: 20px;

}

ul{
    list-style-type: none;
    padding: 0;

}

.icon{
    font-size: 35px;
    
}

.fillBlue{
    fill: var(--blue);
    :hover{
        fill: var(--yellow);
    }

}

.outlineBlue{
    color: var(--blue);
    :hover{
        color: var(--yellow);
    }
}

`

const NavButtons = styled.a`
    color: var(--blue);
    text-decoration: none;
    :hover{
       color: var(--yellow);
    }

`


function Header({setModal, modalOn, userLoggedIn}){

    const history = useHistory()
    const params = useParams()
    
    return(
        <HeaderContainer>
        
           <img src={Logo} alt="logo"/>
         
            <nav>
               <ul>
                   <li>
                       <NavButtons href="#aboutUs">About Us</NavButtons>
                   </li>
                   <li>
                       <NavButtons href="#sponsors">Sponsors</NavButtons>
                   </li>
                   <li>
                       <NavButtons href="#location">Location</NavButtons>
                   </li>
                   <li>
                       <NavButtons href="#registraion">Registration</NavButtons>
                   </li>
               </ul>
            </nav>
            <Button onClick={() => {
                setModal(!modalOn)
            }}>{userLoggedIn ? "Sign Out " : "Sign In"}</Button>

            <ul>
               
                <li>
                    <FaHome className="icon fillBlue"/>
                </li>
                <li>
                    <HiOutlineMail className="icon outlineBlue"/>
                </li>
            </ul>
         

   
          
        </HeaderContainer>
    )
}
export default Header;