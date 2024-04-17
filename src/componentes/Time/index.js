import styled from "styled-components";

import loud from '../../Imagens/loud.svg'
import furia from '../../Imagens/furai.svg'
import teamliquid from '../../Imagens/teamliquid.svg'
import blackdragons from '../../Imagens/blackDragons.svg'
import keyd from '../../Imagens/keyd.svg'
import pain from '../../Imagens/pain.svg'
import red from '../../Imagens/red.svg'
import mibr from '../../Imagens/mibr.svg'

const TimeStyled = styled.img`
    width: 34px;
    height: 34px;
`;

function Time(props) {

    const timeImages = {
        loud: loud,
        furia: furia,
        teamliquid: teamliquid,
        blackdragons: blackdragons,
        keyd: keyd,
        pain: pain,
        red: red,
        mibr: mibr,
    };


    return(
        <TimeStyled
            src={timeImages[props.valueTime]}
            alt="time"
        />
    );
}

export default Time;