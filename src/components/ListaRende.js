export function ListaRender({itens}) {
    return (
        <div>
            <h3>Lista</h3>
            {
                itens.map((item) => (
                    <p>{item}</p>
                ))}
        </div>
    )
}