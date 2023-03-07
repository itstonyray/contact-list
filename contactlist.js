let contactList = [
    {
      id: 110311107,
      name: "Tony Ray",
      lastname: "Payares Martinez",
      cellphone: 3204033874,
      location: { city: "Corozal", address: "carrera 21C" },
    },
  ];
  let contact1 = {
    id: 9314707,
    name: "Antonio Segundo",
    lastname: "Payares Coronado",
    cellphone: 31809981,
    location: { city: "Corozal", address: "carrera 22C" },
  };
  
  function addContact(contactName) {
    contactList.push(contactName);
    contactList.sort();
  }
  
  addContact();
  
  const eraseContact = function (contactName) {
    let newList = contactList.filter(
      (contactList) => contactName !== contactList
    );
    contactList = newList;
  };
  
  const displayContact = () => 
    contactList.sort();
    for (let i = 0; i < contactList.length; i++) {
      console.log(contactList[i]);
    }