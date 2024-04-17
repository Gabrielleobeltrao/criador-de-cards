import styled from "styled-components";

const InputFileStyled = styled.input`
    
`

function InputFile(props) {
    return(
        <InputFileStyled
            type = 'file'
            accept="image/*"
            onChange={props.onChangeFoto}
        />
    )
}

export default InputFile