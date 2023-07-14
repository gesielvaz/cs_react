export function ListaRender({ itens }) {
    return (
        <div>
            <h3>Lista</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, index) => <p key={index}>{item}</p>)
                ) : (
                    <p>Lista vazia</p>
                )}
        </div>
    )
}