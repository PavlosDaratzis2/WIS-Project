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

    const res = new XMLHttpRequest();

    // Set up the onreadystatechange event handler
    res.onreadystatechange = () => {
        if (res.readyState == 4) {
            if (res.status == 200) {
                alert(res.responseText);
            }
        }
    };

    // Open the request
    res.open("POST", `http://127.0.0.1:5000/add-product`, true);

    // Set request header
    res.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    const productData = JSON.stringify({
        "id": "90",
        "name": "Paper 80",
        "production_year": 2030,
        "price": 50,
        "color": 1,
        "size": 1
    });

    console.log("Sending JSON data:", productData);

    // Send the request
    res.send(productData);
    // END CODE HERE
}
