const MinutoFormatado = (TimeMusic) => {
    let Tempo = TimeMusic % 60

    if(Tempo < 10) { Tempo = `0${Tempo}` }
    
    return ( Tempo )
}

export default MinutoFormatado
