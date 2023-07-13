import Button from  './eventos/button.js'
function Evento() {
    function meuEvento() {
        window.alert("Ok")
    }
    return <Button event={meuEvento} text="Ativar" />
    
}

export default Evento