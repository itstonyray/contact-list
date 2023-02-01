let Contactlist = ["Monkey D. Luffy ", "Portgas D. Ace", "Roronoa Zoro"];

function addcontact(Contactname) {
  Contactlist.push(Contactname);
}

function eraseContact(Contactname) {
  let newList = Contactlist.indexOf(Contactname);
  Contactlist.splice(newList, 1)
  ;
};

function displayContact() {
  for (const Contact of Contactlist.sort()) {
    console.log(Contact);
  }
};

