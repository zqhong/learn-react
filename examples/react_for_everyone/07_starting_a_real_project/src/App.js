import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';


let contacts = [
    {
        'id': 1,
        'name': 'akira',
        'phone': '111'
    },
    {
        'id': 2,
        'name': 'jim',
        'phone': '222'
    },
    {
        'id': 3,
        'name': 'jack',
        'phone': '333'
    }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts} />
            </div>
        )
    }
}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('app'));