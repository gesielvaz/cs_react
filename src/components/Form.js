import cadastrar from './Cadastrar'

function Form() {
    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        className="NameImput"
                        type="text"
                        placeholder="Name"
                        id="NameImput"
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input
                        className="PasswordImput"
                        type="password"
                        id="PasswordImput"
                        name="password"
                        placeholder="Senha"
                    />
                </div>
                <>
                    <button type="button" value="Cadastrar" >Cadastrar</button>
                </>
            </form>
        </div >
    )
}
export default Form