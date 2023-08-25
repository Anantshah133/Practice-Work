let countrySelect = document.getElementById("country");
let stateSelect = document.getElementById("state");
let citySelect = document.getElementById("city");

let globe = {
    india: {
        maharashtra: ["Mumbai", "Pune", "Thane"],
        gujarat: ["Surat", "Ahmedabad", "Navsari"],
        karnataka: ["Bangalore", "Mysore", "Hubli"],
        tamilNadu: ["Chennai", "Coimbatore", "Madurai"]
    },
    russia: {
        moscow: ["Khimki", "Oyee-Hoyee", "Taldom"],
        petersburg: ["Yanino", "Murino", "Bugry"],
        siberia: ["Novosibirsk", "Irkutsk", "Krasnoyarsk"],
        ural: ["Yekaterinburg", "Chelyabinsk", "Perm"]
    },
    america: {
        california: ["Los Angeles", "San Francisco", "San Diego"],
        texas: ["Houston", "Dallas", "Austin"],
        newYork: ["New York City", "Buffalo", "Rochester"],
        florida: ["Miami", "Orlando", "Tampa"]
    }
}
let keys = Object.keys(globe);

function showDetail(selectElement, options){
    options.forEach((option) => {
        let stateOption = document.createElement("option");
        stateOption.innerHTML = option;
        selectElement.appendChild(stateOption);
    });
}

countrySelect.addEventListener("change", (e)=>{
    stateSelect.disabled = false;
    stateSelect.innerHTML = "<option>Select State</option>";
    citySelect.disabled = true;
    citySelect.innerHTML = "<option>Select City</option>";
    let state = e.target.value;
    showDetail(stateSelect, Object.keys(globe[state]));
    // Updated code bcz it was more complex
    // for(let key of keys){
    //     if(key === e.target.value){
    //         var stateObj = Object.keys(globe[key]);
    //         showDetail(stateSelect, stateObj);
    //         break;
    //     }
    // }
});

stateSelect.addEventListener("change", (e)=>{
    citySelect.disabled = false;
    citySelect.innerHTML = "<option>Select City</option>";
    let selectedCountry = countrySelect.value;
    let selectedState = e.target.value;
    let cities = globe[selectedCountry][selectedState];
    showDetail(citySelect, cities)
});