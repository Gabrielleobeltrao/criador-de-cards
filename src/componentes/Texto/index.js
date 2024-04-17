import styled from "styled-components"

const TextoStyle = styled.h3`
    font-size: ${(props) => props.size ? props.size : '14px'};
    font-weight: ${(props) => props.weight ? props.weight : '400'};
    color: ${(props) => props.cor ? props.cor : 'black'};
    text-align: ${(props) => props.align ? props.align : 'center'};
    text-transform: ${(props) => props.caps ? props.caps : 'none'};
    width: ${(props) => props.width ? props.width : 'auto'};
    z-index: ${(props) => props.zIndex ? props.zIndex : ''};
    position: relative;
`

function Texto(props) {
    return(
        <TextoStyle
            size={props.size}
            weight={props.weight}
            align={props.align}
            caps={props.caps}
            zIndex={props.zIndex}
            cor={props.cor}
        >
            {props.texto}
        </TextoStyle>
    );
}

export default Texto