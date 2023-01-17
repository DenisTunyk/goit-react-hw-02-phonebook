import PropTypes from 'prop-types';
import "./ContactList.module.css";

export const ContactList = ({ options } ) => {
    return (
        <ul>
           {options.map(({id, name,number}) => (
                <li key={id}>
                    <span >{name}:</span>
                    <span > {number}</span>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string
        })
    )
}