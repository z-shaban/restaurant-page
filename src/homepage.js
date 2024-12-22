export function home(){
    const homePage = document.createElement("div");

    const restaurantName = document.createElement("h1");
    const welcomeMessage = document.createElement("p");
    
    restaurantName.textContent = "CASA";
    welcomeMessage.textContent = "Welcome to CASA.Home of delicious meals";
    
    homePage.append(restaurantName, welcomeMessage);
}


