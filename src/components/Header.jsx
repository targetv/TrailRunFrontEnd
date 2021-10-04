import styled from "styled-components";
import {FaHome} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"

const HeaderContainer = styled.header`
display: grid;
grid-template-columns: 2fr 8fr 2fr;
place-items: center;
position: sticky;
top: 0;
z-index: 10;
background-color: white;



img{
    width: 50px; 
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
    :hover{
       color: var(--yellow);
    }

`


function Header(){
    return(
        <HeaderContainer className="container80">
           <img src="../images/logo_activelife.png" />
         
            <nav>
               <ul>
                   <li>
                       <NavButtons>About Us</NavButtons>
                   </li>
                   <li>
                       <NavButtons>Sponsors</NavButtons>
                   </li>
                   <li>
                       <NavButtons>Location</NavButtons>
                   </li>
                   <li>
                       <NavButtons>Registration</NavButtons>
                   </li>
               </ul>
            </nav>

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