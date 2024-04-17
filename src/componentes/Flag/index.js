import styled from "styled-components";

import iconeBrazil from '../../Imagens/iconBrazil.svg'
import iconeArgentina from '../../Imagens/iconArgentina.svg'
import iconeCanada from '../../Imagens/iconCanada.svg'

const FlagStyled = styled.img`
    width: 28px;
    height: 18px;
    margin-top: 5px; 
`;

function Flag(props) {

    const flagImages = {
        iconBrazil: iconeBrazil,
        iconArgentina: iconeArgentina,
        iconCanada: iconeCanada,
    };


    return(
        <FlagStyled
            src={flagImages[props.valueFlag]}
            alt="Flag"
        />
    );
}

export default Flag;