import styled from "styled-components";

import ImgLogo from "../../Imagens/LogoYourCard.svg"

const LogoSyled = styled.img`
    width: 56px;
    height: 31px;

    @media screen and (min-width: 1280px) {
        width: 92px;
        height: 51px;
    }
`

function Logo() {
    return (
        <LogoSyled
            src={ImgLogo}
            alt="Logo YourCard"
        />
    )
}

export default Logo