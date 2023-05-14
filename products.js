const api = "http://127.0.0.1:5000";

window.onload = () => {
    // BEGIN CODE HERE
    const searchButton = document.getElementById("getSearch");
    searchButton.onclick = searchButtonOnClick;
    const saveButton = document.getElementById("postReq");
    saveButton.onclick = productFormOnSubmit;



    // END CODE HERE
}

searchButtonOnClick = () => {
    // BEGIN CODE HERE
    const getProduct = document.getElementById("inputProduct");
    // alert(getProduct.value);
    const res = new XMLHttpRequest();
    res.open("GET", `${api}/search?name=${getProduct.value}`);
    res.onreadystatechange = () => {
        if (res.readyState == 4) {
            if (res.status == 200) {
                // console.log(res.responseText);
                const resultsDiv = document.getElementById("results");
                resultsDiv.innerHTML = "";
                const tableId = document.createElement("td");
                const tableName = document.createElement("td");
                const tableYear = document.createElement("td");
                const tablePrice = document.createElement("td");
                const tableColor = document.createElement("td");
                const tableSize = document.createElement("td");

                const resText = JSON.parse(res.responseText);
                
                tableId.innerHTML = `${resText.id}`;
                tableName.innerHTML = `${resText.name}`;
                tableYear.innerHTML = `${resText.production_year}`;
                tablePrice.innerHTML = `${resText.price}`;
                tableColor.innerHTML = `${resText.color}`;
                tableSize.innerHTML = `${resText.size}`;
                resultsDiv.appendChild(tableId);
                resultsDiv.appendChild(tableName);
                resultsDiv.appendChild(tableYear);
                resultsDiv.appendChild(tablePrice);
                resultsDiv.appendChild(tableColor);
                resultsDiv.appendChild(tableSize);
                // const date = document.createElement("div");
                // const resText = JSON.parse(res.responseText);
                // const datetime = {date: resText.datetime.split("T")[0], time: resText.datetime.split("T")[1]};
                // datetime.date = {day: datetime.date.split("-")[2], month: datetime.date.split("-")[1], year: datetime.date.split("-")[0]};
                // datetime.time = {hour: datetime.time.split(":")[0], minute: datetime.time.split(":")[1]}
                // date.innerHTML = `${datetime.date.day}/${datetime.date.month}/${datetime.date.year}`;
                // resultsDiv.appendChild(date);
                // const time = document.createElement("div");
                // time.innerHTML = `${datetime.time.hour}:${datetime.time.minute}`
                // resultsDiv.appendChild(time);
            }
        }
    };
    res.send();
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