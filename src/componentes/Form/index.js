import styled from "styled-components";

import Texto from "../Texto";
import Input from "../Input";
import Select from "../Select";
import InputFile from "../InputFile";
import Link from "../Link";

import { FlagOpcoes } from "../Opcoes";
import { TimeOpcoes } from "../Opcoes";
import { BackCard } from "../Opcoes";

import ImgPortrait from "../../Imagens/portrait.png"

const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100vw;
    padding: 0 40px;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
    }
`

const FormArea = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    align-content: flex-start
`

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap ? props.gap : '3px'};
    width: ${(props) => props.width ? props.width : '47%'};
    padding: ${(props) => props.padding ? props.padding : '0'} 0;
`

const FormInputs = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const IconeImg = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 22px;
`

function Form({ onValorChangeFlag, onValorChangeTime, onValorChangeBackCard, ...props }) {

    const inputHandler = (event) => {
        const { value, maxLength } = event.target;
        if (String(value).length >= maxLength) {
            event.preventDefault();
            return;
        }
      };

    return(
        <FormContainer>
            <FormArea>
                <FormItem>
                    <Texto 
                        texto='Data'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <FormInputs>
                        <Input
                            onChange={props.onChangeMes}
                            placeholder={props.placeholderMes}
                            type="number"
                            maxlength="2"
                            width="30%"
                            onKeyPress={inputHandler}
                        />
                        <Texto 
                            texto='/'
                            size='20px'
                            weight='600'
                            width="10%"
                        />
                        <Input
                            onChange={props.onChangeAno}
                            placeholder={props.placeholderAno}
                            type="number"
                            maxlength="4"
                            width="60%"
                            onKeyPress={inputHandler}
                        />
                    </FormInputs>
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Campeonato'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input 
                        onChange={props.onChangeCampeonato}
                        placeholder={props.placeholderCampeonato}
                        type="text"
                        maxlength="15"
                    />
                </FormItem>
                <FormItem>
                    <Texto
                        texto='Time'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Select
                        onValorChange={onValorChangeTime} 
                        opcoes={TimeOpcoes}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Função'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeFuncao}
                        placeholder={props.placeholderFuncao}
                        type="text"
                        maxlength="3"
                    />
                </FormItem>
                <FormItem>
                    <Texto
                        texto='Pais'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Select
                        onValorChange={onValorChangeFlag} 
                        opcoes={FlagOpcoes}
                    />
                </FormItem>
            </FormArea>
            <FormArea>
                <FormItem
                    width='100%'
                >
                    <Texto 
                        texto='Nick'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeNick}
                        placeholder={props.placeholderNick}
                        type="text"
                        maxlength="14"
                    />
                </FormItem>
                <FormItem
                    width='100%'
                >
                    <Texto 
                        texto='Fundo'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Select
                        onValorChange={onValorChangeBackCard} 
                        opcoes={BackCard}
                    />
                </FormItem>
                <FormItem
                    width='100%'
                >
                    <Texto 
                        texto='Foto'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <InputFile
                        onChangeFoto={props.onChangeFoto}
                    />
                </FormItem>
                <FormItem
                width='100%'
                gap='10px'
                padding='10px'
                >
                    <Texto
                        texto='Como colocar sua foto corretamente ?'
                        size='16px'
                        weight='600'
                        align='left'
                    />
                    <Texto
                        texto='1 - Recorte sua foto como a imagem abaixo.'
                        align='left'
                    />
                    <IconeImg
                    src={ImgPortrait}
                    />
                    <Texto
                        texto='2 - Retire o fundo da foto nesse site.'
                        align='left'
                    />
                    <Link
                        href='https://www.remove.bg/upload'
                        texto='remove.bg'
                        cor='blue'
                        align='left'
                        padding='0 0 0 22px'
                    />
                    <Texto
                        texto='3 - Agora faça upload da foto em nosso site.'
                        align='left'
                    />
                </FormItem>
            </FormArea>
            <FormArea>
                <FormItem>
                    <Texto 
                        texto='Atributo 1'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeInfo1}
                        placeholder={props.placeholderInfo1}
                        type="text"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Pontuação 1'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangePont1}
                        placeholder={props.placeholderPont1}
                        type="number"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Atributo 2'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeInfo2}
                        placeholder={props.placeholderInfo2}
                        type="text"
                        maxlength="3"
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Pontuação 2'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangePont2}
                        placeholder={props.placeholderPont2}
                        type="number"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Atributo 3'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeInfo3}
                        placeholder={props.placeholderInfo3}
                        type="text"
                        maxlength="3"
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Pontuação 3'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangePont3}
                        placeholder={props.placeholderPont3}
                        type="number"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Atributo 4'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeInfo4}
                        placeholder={props.placeholderInfo4}
                        type="text"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Pontuação 4'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangePont4}
                        placeholder={props.placeholderPont4}
                        type="number"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Atributo 5'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeInfo5}
                        placeholder={props.placeholderInfo5}
                        type="text"
                        maxlength="3"
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Pontuação 5'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangePont5}
                        placeholder={props.placeholderPont5}
                        type="number"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Atributo 6'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangeInfo6}
                        placeholder={props.placeholderInfo6}
                        type="text"
                        maxlength="3"
                    />
                </FormItem>
                <FormItem>
                    <Texto 
                        texto='Pontuação 6'
                        size='14px'
                        weight='600'
                        align='left'
                    />
                    <Input
                        onChange={props.onChangePont6}
                        placeholder={props.placeholderPont6}
                        type="number"
                        maxlength="3"
                        onKeyPress={inputHandler}
                    />
                </FormItem>
                <FormItem
                    width='100%'
                    gap='8px'
                    padding='20px'
                >
                    <Texto
                        texto='Como funciona a pontuaçāo ?'
                        size='16px'
                        weight='600'
                        align='left'
                    />
                    <Texto
                        texto='1 - Preencha o nome de cada um dos 6 atributos.'
                        align='left'
                    />
                    <Texto
                        texto='2 - Atribua uma pontuação de 0 a 100 para cada atributo.'
                        align='left'
                    />
                    <Texto
                        texto='3 - Em seguida, o sistema faz o calculo para obter a pontuação final da carta.'
                        align='left'
                    />
                </FormItem>
            </FormArea>
        </FormContainer>
    )
}

export default Form