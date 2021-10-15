let detailedBuy = {};
let purchasedItems = [];

const infoOnItems = () => {
    // initializing a variable that gives out random values
    let price = (Math.random() * 100.99).toFixed(2);
    let items = Math.floor(Math.random() * 100);
    let noOptionYet = document.getElementById("none");
    // getting the selected value
    let value = noOptionYet.value;

    // if the selected value is 0 fthe the price and item should be 0 else the items and numbers should be randomized declare above.
    if (value == "0") {
        document.getElementById("items").value = 0;
        document.getElementById("price").value = `R00.00`;

    } else if (value == "1") {
        document.getElementById("items").value = `${items}`;
        document.getElementById("price").value = `${price}`;
        detailedBuy = {
            "product": "Product01",
            "items": items,
            "price": price
        };
        localStorage.setItem("detailed", JSON.stringify(detailedBuy))

    } else if (value == "2") {
        document.getElementById("items").value = `${items}`;
        document.getElementById("price").value = `${price}`;
        detailedBuy = {
            "product": "Product02",
            "items": items,
            "price": price
        };
        localStorage.setItem("detailed", JSON.stringify(detailedBuy))
    } else {
        document.getElementById("items").value = `${items}`;
        document.getElementById("price").value = `${price}`;
        detailedBuy = {
            "product": "Product03",
            "items": items,
            "price": price
        };
        localStorage.setItem("detailed", JSON.stringify(detailedBuy))
    }




};
const afterSubmit = () => {
    // retrieve the items  frome the storage  to alert the user of how much has been purchased

    alert(`you just purchased ${itemDetail} items for R${priceDetails} per item. Total price: R${(itemDetail * priceDetails).toFixed(2)}`);
}
