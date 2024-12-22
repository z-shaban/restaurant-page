export function contact(){
    const contactPage = document.createElement("div");

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'CONTACT US';

    const contactInfo = [
        {
        name: "Manager",
        email: "manager@gmail.com",
        number: "+822 0899 889",
    }
    ]
    
    const contactList = document.createElement("ul")
    contactInfo.forEach(contact =>{
        const listItem = document.createElement("li");
        listItem.textContent = `${contact.name} ${contact.email} ${contact.number}`;
        contactList.appendChild(listItem)
    });

    contactPage.append(contactTitle, contactList);
    return contactPage;
}