const infoOnItems = () => {
    let price = (Math.random() * 100.99).toFixed(2);
    let items = Math.floor(Math.random() * 100);
    let noOptionYet = document.getElementById("none");
    let value = noOptionYet.value;

    // location.reload();
   

        if(value == "0"){
        document.getElementById("items").value = 0;
        document.getElementById("price").value = `R00.00`;
       }else{
        document.getElementById("items").value = `${items}`;
        document.getElementById("price").value = `${price}`;
       }


    //    submitAndSave()
    localStorage.setItem("items",items)
    localStorage.setItem("price", price)

};
const afterSubmit = () => {
    let itemDetail = localStorage.getItem(items);
    let priceDetails = localStorage.getItem("price");

    alert(`you just purchased ${itemDetail}`);
}

