export function Saudacao({name}) {
    function gerarSaudacao(name) {
        return `Wellcome, ${name}`
    }
    
    return <><p>{name && gerarSaudacao(name)}</p></>
    
}