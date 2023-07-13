import PropTypes from 'prop-types'

function Item({ marca, lancamento }) {
    return (
        <div>
            <li>
                {marca} - {lancamento}
            </li>
        </div>
    )
}
Item.prototypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired
}

export default Item