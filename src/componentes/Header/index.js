import styled from "styled-components";
import Logo from "../Logo";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: #0E2840;

    @media screen and (min-width: 1280px) {
        height: 75px;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <Logo/>
        </HeaderStyled>
    )
}

export default Header