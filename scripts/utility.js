function moveSection() {    
    var nextSection = document.getElementById('section2');
    
    // Scroll to the next section
    nextSection.scrollIntoView({ behavior: 'smooth' });   
}
function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}
// Update Total Cost
function updateTotalCost(price) {
    const totalCost = getConvertedValue("total-cost");
    const convertedPrice = parseInt(price);
    const sum = totalCost + convertedPrice;
    document.getElementById("total-cost").innerText = sum;
}