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

//    // Get form values
//    const name = document.getElementById("name");
//    const production_year = document.getElementById("year");
//    const price = document.getElementById("price");
//    const color = document.getElementById("fcolor");
//    const size = document.getElementById("size");
//
//    const res = new XMLHttpRequest();
//    res.open("POST", `http://127.0.0.1:5000/add-product`);
//    res.onreadystatechange = () => {
//        if (res.readyState == 4) {
//            if (res.status == 200) {
//                alert(res.responseText);
//
//                // Clear form fields
//                // name.innerHTML = "";
//                // production_year.innerHTML = "";
//                // price.innerHTML = "";
//                // color.innerHTML = "";
//                // size.innerHTML = "";
//            }
//        }
//    };
//
//    res.setRequestHeader("Content-Type", "application/json");
//    res.send(JSON.stringify({
//        name: "Paper A8",
//        production_year: "2006",
//        price: "8",
//        color: "4",
//        size: "2"
//    }))



    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const production_year = document.getElementById("year").value;
    const price = document.getElementById("price").value;
    const color = document.getElementById("fcolor").value;
    const size = document.getElementById("size").value;

    const res = new XMLHttpRequest();
    res.open("POST", `http://127.0.0.1:5000/add-product`);
    res.onreadystatechange = () => {
        if (res.readyState == 4) {
            if (res.status == 200) {
                alert(res.responseText);

                // Clear form fields
                document.getElementById("name").value = "";
                document.getElementById("year").value = "";
                document.getElementById("price").value = "";
                document.getElementById("fcolor").value = "";
                document.getElementById("size").value = "";
            }
        }
    };

    res.setRequestHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
        name: name,
        production_year: production_year,
        price: price,
        color: color,
        size: size
    }));


    // END CODE HERE
}