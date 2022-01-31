// Order name
const orderName = document.getElementById("name");


// Food costs
const sandwichCost = 5.00;
const drinkCost = 3.00;
const dessertCost = 4.00;


document.getElementById("calculate-order-button").onclick = () => {
    document.getElementById("order-for").innerHTML = "Order for " + orderName.value;


    // Sandwich counts
    const hamCheeseCount = parseFloat(document.getElementById("ham-cheese-count").value);
    const turkeyProvoloneCount = parseFloat(document.getElementById("turkey-provolone-count").value);
    const salamiSwissCount = parseFloat(document.getElementById("salami-swiss-count").value);
    const avocadoHamCount = parseFloat(document.getElementById("avocado-ham-count").value);
    const eggSpinachCount = parseFloat(document.getElementById("egg-spinach-count").value);


    // Drink counts
    const spriteCount = parseFloat(document.getElementById("sprite-count").value);
    const lemonadeCount = parseFloat(document.getElementById("lemonade-count").value);
    const sweetTeaCount = parseFloat(document.getElementById("sweet-tea-count").value);
    const poweradeCount = parseFloat(document.getElementById("powerade-count").value);
    const unsweetTeaCount = parseFloat(document.getElementById("unsweet-tea-count").value);


    // Dessert counts
    const cheescakeCount = parseFloat(document.getElementById("cheescake-count").value);
    const pumpkinPieCount = parseFloat(document.getElementById("pumpkin-pie-count").value);
    const cookieCount = parseFloat(document.getElementById("cookie-count").value);
    const donutCount = parseFloat(document.getElementById("donut-count").value);
    const candyCount = parseFloat(document.getElementById("candy-count").value);


    const sandwiches = [ hamCheeseCount,
        turkeyProvoloneCount,
        salamiSwissCount,
        avocadoHamCount,
        eggSpinachCount ];


    const drinks = [spriteCount,
        lemonadeCount,
        sweetTeaCount,
        poweradeCount,
        unsweetTeaCount];


    const desserts = [cheescakeCount,
        pumpkinPieCount,
        cookieCount,
        donutCount,
        candyCount];

    
    var finalTotal = 0.0;


    // Finding order total
    for ( let i = 0; i < sandwiches.length; i++ ) {
        finalTotal += sandwiches[i] * sandwichCost;
        finalTotal += drinks[i] * drinkCost;
        finalTotal += desserts[i] * dessertCost;
    }
    finalTotal = finalTotal.toFixed(2);


    // Displaying order total
    if ( isNaN(finalTotal) ) {
        document.getElementById("total-cost").innerHTML = "Total cost: $0.00";
    } else {
        document.getElementById("total-cost").innerHTML = "Total cost: $" + finalTotal;
    }
    document.getElementById("total-cost").style = "color: dodgerblue;";


    // Counts of each category
    var sandwichCount = 0;
    var drinkCount = 0;
    var dessertCount = 0;
    for ( let i = 0; i < sandwiches.length; i ++ ) {
        if ( sandwiches[i] != 0 ) {
            sandwichCount += sandwiches[i];
        }


        if ( drinks[i] != 0 ) {
            drinkCount += drinks[i];
        }


        if ( desserts[i] != 0 ) {
            dessertCount += desserts[i];
        }


    }


    // Final string
    document.getElementById("summary").innerHTML = `Order summary:<br><br>` + 
    `$${sandwichCount * sandwichCost}.00 for ${sandwichCount} sandwiches<br>` + 
    `$${drinkCount * drinkCost}.00 for ${drinkCount} drinks<br>` + 
    `$${dessertCount * dessertCost}.00 for ${dessertCount} desserts`;



}

