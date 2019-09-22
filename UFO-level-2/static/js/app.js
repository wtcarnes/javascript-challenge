
let tableData = data;

let tbody = d3.select("tbody");


tableData.forEach(ufoReport => {
    let row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});


let button = d3.select("#filter-btn");

button.on("click", function () {

    tbody.html("");

    let filterdate = d3.select("#datetime").property("value");

    let filteredData = tableData.filter(date => date.datetime === filterdate);

    filteredData.forEach(ufoReport => {
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });

});