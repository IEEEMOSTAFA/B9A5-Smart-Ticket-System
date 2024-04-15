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
function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    // document.getElementById("grand-total").innerText = totalCost;
    if (status == undefined) {
                
        document.getElementById("grand-total").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        
        if(couponCode == "NEW15"){ 
            const discounted = totalCost * 0.15;
            // console.log(discounted);
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }
        else if(couponCode == "Couple 20"){ 
            const discounted = totalCost * 0.2;
            // console.log(discounted);
            document.getElementById("grand-total").innerText = totalCost - discounted;
        }

        else{
            alert("Please ,Enter a valid coupon code");
        }
    }


}

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}