import styled from "styled-components";

const InputStyled = styled.input`
    border: 1.5px solid black;
    border-radius: 20px;
    width: ${(props) => props.width ? props.width : '100%'};
    padding: 3px 5px;
`

function Input(props) {
    return(
        <InputStyled
            caps={props.caps}

            onChange={props.onChange}
            placeholder={props.placeholder}
            type={props.type}
            maxlength={props.maxlength}
            width={props.width}
            onKeyPress={props.onKeyPress}
        />
    )
}

export default Input