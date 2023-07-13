import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function EnviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }
    function Limpar(e) {
        setUserEmail('')
        document.getElementById("imputEmail").value = "";
    }

    return (
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input
                    id = "imputEmail"
                    type="email"
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <button type="submit" onClick={EnviarEmail} >Enviar</button>
                {userEmail &&(
                    <div>
                        <p>o e-mail do usuário é: {userEmail}</p>
                        <button onClick={Limpar}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional