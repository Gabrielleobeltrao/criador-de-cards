import styled from "styled-components";
import Texto from "../Texto";
import Flag from "../Flag";
import Time from "../Time";
import Foto from "../Foto";

import ValorantBild from "../../Imagens/ValorantBild.png"
import ValorantIcebox from "../../Imagens/ValorantIcebox.png"
import ValorantCaracters from "../../Imagens/ValorantCaracters.png"
import LolLucianProjeto from "../../Imagens/LolLucianProjeto.png"
import LolBaraoArauto from "../../Imagens/LolBaraoArauto.png"
import RocketLeague1 from "../../Imagens/RocketLeague1.png"
import RocketLeague2 from "../../Imagens/RocketLeague2.png"

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 330px;
    border-radius: 20px;
    padding: 13px;
    background-color: #D9D9D9;
    background-image: url('${(props) => props.backCardImg}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
`

const CardTopLeft = styled.div`
    width: 70%;
`

const CardTopRight = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
    align-items: center;
    width: 30%;
`

const CardMid = styled.div`
    width: 100%;
    margin-top: auto;
    margin-bottom: 5px;
`

const CardBottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const CardBottomLeft = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
    align-items: center;
`

const CardBottomRight = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33%;
    padding: 3px 0;
`

function CustomCard(props) {

    const backCardImages = {
        ValorantBild: ValorantBild,
        ValorantIcebox: ValorantIcebox,
        ValorantCaracters: ValorantCaracters,
        LolLucianProjeto: LolLucianProjeto,
        LolBaraoArauto: LolBaraoArauto,
        RocketLeague1: RocketLeague1,
        RocketLeague2: RocketLeague2,
    };

    return(
        <CardContainer
            backCardImg={backCardImages[props.valueBackCard]}
        >
            <CardTop>
                <CardTopLeft>
                    <Texto
                        texto={props.valueMes + "/" + props.valueAno}
                        size='12px'
                        weight='800'
                        align='left'
                        cor='white'
                    />
                    <Texto 
                        texto={props.valueCampeonato}
                        size='12px'
                        weight='800'
                        align='left'
                        cor='white'
                    />
                </CardTopLeft>
                <CardTopRight>
                    <Time
                        valueTime={props.valueTime}
                    />
                    <Texto
                        texto={props.valueFuncao}
                        size='14px'
                        weight='600'
                        caps="uppercase"
                        cor='white'
                    />
                    <Flag 
                        valueFlag={props.valueFlag}
                    />
                </CardTopRight>
            </CardTop>
            <CardMid>
                <Foto 
                    valueFoto={props.valueFoto}
                />
                <Texto
                    texto={props.valueNick}
                    size='24px'
                    weight='800'
                    zIndex='1'
                    cor='white'
                />
            </CardMid>
            <CardBottom>
                <CardBottomLeft>
                    <Texto
                        texto={props.valuePontTotal}
                        size='32px'
                        weight='800'
                        cor='white'
                    />
                </CardBottomLeft>
                <CardBottomRight>
                    <CardInfo>
                        <Texto 
                            texto={props.valueInfo1}
                            caps="uppercase"
                            cor='white'
                        />
                        <Texto 
                            texto={props.valuePont1}
                            cor='white'
                        />
                    </CardInfo>
                    <CardInfo>
                        <Texto 
                            texto={props.valueInfo2}
                            caps="uppercase"
                            cor='white'
                        />
                        <Texto 
                            texto={props.valuePont2}
                            cor='white'
                        />
                    </CardInfo>
                    <CardInfo>
                        <Texto 
                            texto={props.valueInfo3}
                            caps="uppercase"
                            cor='white'
                        />
                        <Texto 
                            texto={props.valuePont3}
                            cor='white'
                        />
                    </CardInfo>
                    <CardInfo>
                        <Texto 
                            texto={props.valueInfo4}
                            caps="uppercase"
                            cor='white'
                        />
                        <Texto 
                            texto={props.valuePont4}
                            cor='white'
                        />
                    </CardInfo>
                    <CardInfo>
                        <Texto 
                            texto={props.valueInfo5}
                            caps="uppercase"
                            cor='white'
                        />
                        <Texto 
                            texto={props.valuePont5}
                            cor='white'
                        />
                    </CardInfo>
                    <CardInfo>
                        <Texto 
                            texto={props.valueInfo6}
                            caps="uppercase"
                            cor='white'
                        />
                        <Texto 
                            texto={props.valuePont6}
                            cor='white'
                        />
                    </CardInfo>
                </CardBottomRight>
            </CardBottom>
        </CardContainer>
    )
}

export default CustomCard