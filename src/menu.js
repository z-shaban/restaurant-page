export function menu(){
    const menuPage = document.createElement("div");
    
    const menuItems = [
        { name: 'Margherita Pizza', price: 12.99 },
        { name: 'Spaghetti Carbonara', price: 14.99 },
        { name: 'Caesar Salad', price: 8.99 },
        { name: 'Grilled Chicken', price: 16.99 },
        { name: 'Tiramisu', price: 6.99 },
      ];

      const menuTitle = document.createElement('h1');
      menuTitle.textContent = 'Restaurant Menu';
      

      const menuList = document.createElement('ul');

      menuItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        menuList.appendChild(listItem);
      });

      menuPage.append(menuTitle, menuList);
      return menuPage;
}