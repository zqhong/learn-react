import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';


let contacts = {
    name: "akira",
    phone: "13800000000"
};

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