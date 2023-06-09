import React, { Component } from 'react';
import '../styles/ContactAdd.css';
import PropTypes from 'prop-types';

class Form extends Component {
state = {
    name: '',
    number: '',
};
inputChange = e =>
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });

formSumbit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    return this.state;
};
reset = () =>
    this.setState({
    name: '',
    number: '',
    });

render() {
    return (
    <form className="form" onSubmit={this.formSumbit}>
        <label className="label">
        <span className="span">Name</span>
        <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.inputChange}
            required
        />
        </label>
        <label className="label">
        <span className="span">Number</span>
        <input
            className="input"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.inputChange}
            required
        />
        </label>
        <button className="button" type="submit">
        Add contact
        </button>
    </form>
    );
}
}

export default Form;
Form.propTypes = { onSubmit: PropTypes.func };