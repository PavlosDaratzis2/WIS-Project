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
    res.open("POST", `http://127.0.0.1:5000/add-product`);
    res.onreadystatechange = () => {
        if (res.readyState == 4) {
            if (res.status == 200) {
                alert(res.responseText);
            }
        }
    };
     // same for the project
    res.setRequestHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
        "name":"Paper A10",
        "production_year":2010,
        "price": 10,
        "color": 1,
        "size": 2
    }))


    // END CODE HERE
}