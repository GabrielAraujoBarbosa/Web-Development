const FoodList = [
    "Arroz", "Feijão", "Macarrão", "Carne", "Frango", "Peixe", "Ovo", "Leite", "Pão", "Queijo", "Tomate", "Cebola", "Alface", "Cenoura", "Batata", "Abóbora", "Brócolis", "Espinafre", "Maçã", "Banana"
];

const form = document.querySelector("form");
const FoodListAvailable = document.getElementById("alimentosDisponiveis");
const FoodListSelected = document.getElementById("selecionados");

FoodList.forEach(food => {
    const foodformatted = food.toLowerCase();

    const listItem = document.createElement("li");
    listItem.id = foodformatted;

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox"
    checkboxInput.id = foodformatted

    const label = document.createElement("label");
    label.htmlFor = foodformatted

    label.textContent = food

    listItem.appendChild(checkboxInput)
    listItem.appendChild(label)

    FoodListAvailable.appendChild(listItem)
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (checkbox.checked)  {
    
    }

});

