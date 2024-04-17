import styled from "styled-components";

const LinkStyle = styled.a`
    font-size: ${(props) => props.size ? props.size : '14px'};
    font-weight: ${(props) => props.weight ? props.weight : '400'};
    color: ${(props) => props.cor ? props.cor : 'black'};
    text-align: ${(props) => props.align ? props.align : 'center'};
    width: ${(props) => props.width ? props.width : 'auto'};
    padding: ${(props) => props.padding ? props.padding : '0 0 0 0'};
    text-decoration: none;
`

function Link(props) {
    return(
        <LinkStyle
            href={props.href}
            size={props.size}
            weight={props.weight}
            cor={props.cor}
            align={props.align}
            width={props.width}
            padding={props.padding}
        >
            {props.texto}
        </LinkStyle>
    )
}

export default Link