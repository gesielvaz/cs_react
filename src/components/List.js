import Item from './Item'

function List() {
    return (
        <div>
            <h1>List</h1>
            <ul>
                <Item marca="G-force" lancamento={2000} />
                <Item marca="Asus" lancamento={1990}/>
                <Item marca="Accer" lancamento={2001}/>
            </ul>
        </div>
    )
}

export default List