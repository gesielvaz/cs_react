import imagens from "../imagens/foto.jpg"

function Pessoa({nome,idade,profissao}){
 return (
    <div>
        <img src = {imagens} className="foto" ></img>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão:{profissao}</p>
    </div>
    )
}

export default Pessoa