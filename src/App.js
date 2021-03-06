import { useState } from "react";
import { Button } from "react-bootstrap";
import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";

function App() {

  const[contacts, setContacts] = useState([]);
  const [show, setShow] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  const saveEditedContact = (contact) => {
    setContacts(contacts.map(iterable => {
      if(iterable.id === contact.id) return contact;
      else return iterable
    }))
  }

  function addContact (newContact) {
    setContacts([...contacts, newContact]);
  }
  function deleteContact(id) {
    let contact = [...contacts]
    contact = contact.filter(item => {
      return item.id !== id
    })
    setContacts(contact)
  }

  const handleClose = () => {
    setShow(false); setContactToEdit(null)};
  const handleShow = () => setShow(true);
  
  return (
    <div className="App">
        <AddContact
        addContact={addContact}
        />
        {contactToEdit && 
          <ContactCard
          contacts={contacts}
          handleClose={handleClose}
          show={show}
          contactToEdit={contactToEdit}
          saveEditedContact={saveEditedContact}
          />
        
        }
        <ContactList
        handleShow ={handleShow }
        contacts={contacts}
        deleteContact={deleteContact}
        setContactToEdit={setContactToEdit}
        />
    </div>
  );
}

export default App;
