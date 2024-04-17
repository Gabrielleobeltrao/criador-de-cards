import styled from "styled-components"

const FotoStyle = styled.img`
    width: 205px;
    height: 205px;
    position: absolute;
    top: 160px;
    z-index: 0;
    -webkit-mask-image: linear-gradient(to top, transparent 10%, black 20%);
    object-fit: contain;

    @media screen and (min-width: 1280px) {
        top: 180px;
    }
`

function Foto(props) {
    return(
        <FotoStyle
            src={props.valueFoto}
        />
    )
}

export default Foto