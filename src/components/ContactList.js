import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { deleteContact, getAll } from "../actions/actionsCreators";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import axios from "axios";

class ContactList extends Component {
  state = {
    fetchedData: true,
  };

  deleteContact = function (id) {
    this.props.dispatch(deleteContact(id));
  };

  componentDidMount() {
    if (!this.props.isFetched) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
          this.props.dispatch(getAll(data.data));
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="my_contacts">
          <h1>My Contacts</h1>
          {this.props.contacts.map((contact) => (
            <div className="contact" key={contact.id}>
              <div className="contact_icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
              <div className="details">
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div className="action_buttons">
                <Link to={`/edit/${contact.id}`} className="edit">
                  <FontAwesomeIcon icon={faPen} />
                </Link>
                <button
                  className="delete"
                  onClick={() => this.deleteContact(contact.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    isFetched: state.isFetched,
    contacts: state.contacts.map((contact) => {
      return {
        ...contact,
      };
    }),
  };
};

export default connect(mapStateToProps)(ContactList);
