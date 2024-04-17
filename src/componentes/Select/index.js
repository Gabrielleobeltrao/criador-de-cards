import styled from "styled-components";
import { useState } from "react";

const Selectstyled = styled.select`
    border: 1.5px solid black;
    border-radius: 20px;
    width: 100%;
    padding: 3px 5px;
`

function Select({ onValorChange, opcoes, ...props }) {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState();
      
    const handleChange = (event) => {
        const novoValor = event.target.value;
        setOpcaoSelecionada(novoValor);
        onValorChange(novoValor);
    };

    return(
        <Selectstyled
            value={opcaoSelecionada}
            onChange={handleChange}
        >
            {opcoes.map((opcao) => (
                <option
                    key={opcao.conteudo}
                    value={opcao.conteudo}
                >
                    {opcao.value}
                </option>
            ))}
        </Selectstyled>
    )
}

export default Select;