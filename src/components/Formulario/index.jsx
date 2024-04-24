import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');
    
    useEffect(() => {
        console.log("o componete iniciou")
        
        return () => {
            console.log('o COmponente Finalizou')
        }
    }, []);

    useEffect(() =>{
        console.log('O estado Mudo');  
    }, [nome]);

        const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

const renderizaResultado = () => {
    const soma = materiaA +materiaB + materiaC
    const media = soma / 3;

    if( media >= 7){
        return (
            <p>Olá {nome},Você Foi Aprovado</p>
        )
    }else {
        return (
            <p>Olá {nome},Você não Foi Aprovado</p>   
        )
    }
}

    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota Materia A" onChange={({target}) => setmateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota Materia B" onChange={evento => setmateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Materia C" onChange={evento => setmateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario