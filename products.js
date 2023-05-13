const api = "http://127.0.0.1:5000";

window.onload = () => {
    // BEGIN CODE HERE
    const saveButton = document.getElementById("postReq");
    saveButton.onclick = productFormOnSubmit;



    // END CODE HERE
}

searchButtonOnClick = () => {
    // BEGIN CODE HERE

    // END CODE HERE
}

productFormOnSubmit = (event) => {
    // BEGIN CODE HERE
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name");
    const production_year = document.getElementById("year");
    const price = document.getElementById("price");
    const color = document.getElementById("fcolor");
    const size = document.getElementById("size");

    const res = new XMLHttpRequest();
    res.open("POST", `http://127.0.0.1:5000/add-product`);
    res.onreadystatechange = () => {
        if (res.readyState == 4) {
            if (res.status == 200) {
                alert(res.responseText);

                // Clear form fields
                name.value = '';
                production_year.value = '';
                price.value = '';
                color.value = '';
                size.value = '';
                event.target.reset();

            }
        }
    };

    res.setRequestHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
        name: name.value,
        production_year: parseInt(production_year.value),
        price: parseFloat(price.value),
        color: parseInt(color.value),
        size: parseInt(size.value)
    }))

    // END CODE HERE
}