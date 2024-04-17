import styled from "styled-components";
import { useState } from "react";

import CustomCard from "./componentes/Card";
import Form from "./componentes/Form";
import Header from "./componentes/Header";

const AppContainer = styled.section`
  display: flex;
  gap: 70px;
  flex-direction: column;
  align-items: center;
`

function App(props) {

    const [mes, setMes] = useState("08");
    const [ano, setAno] = useState("2024");
    const [campeonato, setCampeonato] = useState("CBLOL");
    const [funcao, setFuncao] = useState("mid");

    const [foto, setFoto] = useState(null)
    const [nick, setNick] = useState("BRGbiel");

    const [info1, setInfo1] = useState("k");
    const [pont1, setPont1] = useState("17");
    const [info2, setInfo2] = useState("d");
    const [pont2, setPont2] = useState("10");
    const [info3, setInfo3] = useState("a");
    const [pont3, setPont3] = useState("12");
    const [info4, setInfo4] = useState("far");
    const [pont4, setPont4] = useState("80");
    const [info5, setInfo5] = useState("dmg");
    const [pont5, setPont5] = useState("30");
    const [info6, setInfo6] = useState("obj");
    const [pont6, setPont6] = useState("7");
  

    const handlePontChange = (setter, value) => {
      if (value >= 0 && value <= 100) {
        setter(value);
      }
    };

    const calcularMedia = () => {
      const numeros = [pont1, pont2, pont3, pont4, pont5, pont6].map(Number);
      const soma = numeros.reduce((total, num) => total + num, 0);
      const mediaCalculada = soma / numeros.length;
      return mediaCalculada;
    };

    const [opcaoSelecionadaFlag, setOpcaoSelecionadaFlag] = useState('iconBrazil')
    const [opcaoSelecionadaTime, setOpcaoSelecionadaTime] = useState('loud')
    const [opcaoSelecionadaBackCard, setOpcaoSelecionadaBackCard] = useState('LolBaraoArauto')

    const handleValorChangeFlag = (novoValor) => {
      setOpcaoSelecionadaFlag(novoValor);
    };

    const handleValorChangeTime = (novoValor) => {
      setOpcaoSelecionadaTime(novoValor);
    };

    const handleValorChangeBackCard = (novoValor) => {
      setOpcaoSelecionadaBackCard(novoValor);
    };

  return (
    <AppContainer>
      <Header/>
      <CustomCard
        valueMes={mes}
        valueAno={ano}
        valueCampeonato={campeonato}
        valueFuncao={funcao}
        valueFlag={opcaoSelecionadaFlag}
        valueTime={opcaoSelecionadaTime}
        valueBackCard={opcaoSelecionadaBackCard}

        valueNick={nick}
        valueFoto={foto}

        valueInfo1={info1}
        valuePont1={pont1}
        valueInfo2={info2}
        valuePont2={pont2}
        valueInfo3={info3}
        valuePont3={pont3}
        valueInfo4={info4}
        valuePont4={pont4}
        valueInfo5={info5}
        valuePont5={pont5}
        valueInfo6={info6}
        valuePont6={pont6}

        valuePontTotal={parseInt(calcularMedia())}
      />
      <Form
        onChangeMes={(event) => {
          setMes(event.target.value);
        }}
        placeholderMes={mes}

        onChangeAno={(event) => {
          setAno(event.target.value);
        }}
        placeholderAno={ano}

        onChangeCampeonato={(event) => {
          setCampeonato(event.target.value);
        }}
        placeholderCampeonato={campeonato}

        onChangeFuncao={(event) => {
          setFuncao(event.target.value);
        }}
        placeholderFuncao={funcao}

        onValorChangeFlag={handleValorChangeFlag} 

        onValorChangeTime={handleValorChangeTime}

        onValorChangeBackCard={handleValorChangeBackCard}



        onChangeNick={(event) => {
          setNick(event.target.value);
        }}
        placeholderNick={nick}

        onChangeFoto={(event) => {
          const file = event.target.files[0];
          const reader = new FileReader();

          reader.onload = () => {
            setFoto(reader.result);
          };

          if (file) {
            reader.readAsDataURL(file);
          }
        }}


        onChangeInfo1={(event) => {
          setInfo1(event.target.value);
        }}
        placeholderInfo1={info1}

        onChangePont1={(event) => {
          handlePontChange(setPont1, event.target.value);
        }}
        placeholderPont1={pont1}

        onChangeInfo2={(event) => {
          setInfo2(event.target.value);
        }}
        placeholderInfo2={info2}

        onChangePont2={(event) => {
          handlePontChange(setPont2, event.target.value);
        }}
        placeholderPont2={pont2}

        onChangeInfo3={(event) => {
          setInfo3(event.target.value);
        }}
        placeholderInfo3={info3}

        onChangePont3={(event) => {
          handlePontChange(setPont3, event.target.value);
        }}
        placeholderPont3={pont3}

        onChangeInfo4={(event) => {
          setInfo4(event.target.value);
        }}
        placeholderInfo4={info4}

        onChangePont4={(event) => {
          handlePontChange(setPont4, event.target.value);
        }}
        placeholderPont4={pont4}

        onChangeInfo5={(event) => {
          setInfo5(event.target.value);
        }}
        placeholderInfo5={info5}

        onChangePont5={(event) => {
          handlePontChange(setPont5, event.target.value);
        }}
        placeholderPont5={pont5}

        onChangeInfo6={(event) => {
          setInfo6(event.target.value);
        }}
        placeholderInfo6={info6}

        onChangePont6={(event) => {
          handlePontChange(setPont6, event.target.value);
        }}
        placeholderPont6={pont6}
      />
    </AppContainer>
  );
}

export default App;