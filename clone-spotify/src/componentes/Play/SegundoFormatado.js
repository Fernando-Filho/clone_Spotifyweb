const SegundoFormatado = (TimeMusic) => {
    let Tempo = (((TimeMusic / 60)-(TimeMusic % 60))*60)

    if(Tempo < 10){ Tempo = `0${Tempo}` }
        return ( Tempo )
}

export default SegundoFormatado

