

const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
btn.addEventListener('click', function(event){
    // const name = event.target.parentNode.childNodes.innerText;
    const name = event.target.innerText;
    const class_state = "economy";
    const price = parseInt(500);
    console.log(name,class_state,price);
    // testing part up::
    const selectedContainer = document.getElementById("selected-players-container");
    event.target.setAttribute("disabled",false);
    
    event.target.style.backgroundColor = "green";
    const firstLeftCount = getConvertedValue("cart");
        if(firstLeftCount - 1 < 0){
            alert("You Can NOt Buy More Than 4 Ticket");
            return;
        }

    const leftCount = getConvertedValue("cart");
        document.getElementById("cart").innerText = leftCount - 1;
        // const firstCartCount = getConvertedValue("cart");
        // console.log(firstCartCount);
        // Total Bus Seat Count
        const totalSeat = getConvertedValue("totalSeat");
        document.getElementById("totalSeat").innerText = totalSeat - 1;
        
    const count = event.target.innerText;

    console.log(count);
    const div = document.createElement("div");
        div.classList.add("flex", "gap-5","justify-evenly");
        // div.classList.add("px-2");
        div.classList.add("px-2", "container-with-gap");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = class_state;
        p3.innerText = price;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);
        updateTotalCost(price);
        updateGrandTotal()
    
});

}
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');
const nextButton = document.getElementById('nextButton');

function toggleButton() {
    if (nameInput.validity.valid && phoneInput.validity.valid) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'true');
    }
}

nameInput.addEventListener('input', toggleButton);
phoneInput.addEventListener('input', toggleButton);

function toPlay(){
    hideElementById('home-screen');
    
    showElementById('final-score');
}

function playAgain(){
    hideElementById('final-score');
    
    showElementById('home-screen');
}