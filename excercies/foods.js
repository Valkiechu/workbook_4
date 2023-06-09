let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let subtotal = 0;
    for (let i =0; i < lunch.length; i++) {
        subtotal += lunch[i].price;
    }

    const taxRate = 0.08;
    const tipRate = 0.18;

    const tax = subtotal * taxRate;
    const tip = subtotal * tipRate;
    const totalDue = subtotal + tax + tip;

    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Tax: $${tax.toFixed(2)}`);
    console.log(`Tip: $${tip.toFixed(2)}`);
    console.log(`Total Due: $${totalDue.toFixed(2)}`);

