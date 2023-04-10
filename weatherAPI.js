const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Boca%20Raton%2C%20Florida%2C%20USA&contentType=csv&unitGroup=us&shortColumnNames=0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "d6bbfe9275msh819ebe32eaba934p110aa3jsn9566034352ca",
		"X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com"
	}
};


$.ajax(settings).done(function (response) {
    // select the div element
    let divElement = document.getElementById("weather-tableD");

    // create the table element and add headers and data
    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped");

    // add headers
    let headers = ["Date", "Conditions", "Temperature", "Max", "Min",
                   "Precipitation %","Wind Speed","Humidity","Pressure"];
    let headerRow = document.createElement("tr");
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // add data
    let rows = response.split("\n");
    let data = rows.slice(1).map(row => row.split(","));
    data.forEach(rowData => {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        rowData.forEach((cellData, index) => {
            if (index === 3) {
                cell1.textContent = cellData.replace(/"/g, "");
                row.appendChild(cell1);
            } else if (index === 27){
                cell2.textContent = cellData.replace(/"/g, "");
                row.appendChild(cell2);
            }
        });
        
        
        let temperatureCell = document.createElement("td");
        temperatureCell.textContent = rowData[15];
        row.appendChild(temperatureCell);
        let maxCell = document.createElement("td");
        maxCell.textContent = rowData[14];
        row.appendChild(maxCell);
        let minCell = document.createElement("td");
        minCell.textContent = rowData[13];
        row.appendChild(minCell);
        let preCell = document.createElement("td");
        preCell.textContent = rowData[19];
        row.appendChild(preCell);
        let windCell = document.createElement("td");
        windCell.textContent = rowData[16];
        row.appendChild(windCell);
        table.appendChild(row);
        let humidCell = document.createElement("td");
        humidCell.textContent = rowData[24];
        row.appendChild(humidCell);
        let pressCell = document.createElement("td");
        pressCell.textContent = rowData[21];
        row.appendChild(pressCell);
    });

// append the table to the div
divElement.appendChild(table);

});

const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=1&location=Boca%20Raton%2C%20Florida%2C%20USA&contentType=csv&unitGroup=us&shortColumnNames=0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "d6bbfe9275msh819ebe32eaba934p110aa3jsn9566034352ca",
		"X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com"
	}
};

$.ajax(settings2).done(function (response) {
	console.log(response);
    
    // select the div element
    let divElement = document.getElementById("weather-tableH");

    // create the table element and add headers and data
    let table = document.createElement("table");
    table.setAttribute("class", "table table-striped");

    // add headers
    let headers = ["Time", "Conditions", "Temperature",
                   "Precipitation %","Wind Speed","Humidity","Pressure"];
    let headerRow = document.createElement("tr");
    headers.forEach(header => {
        let th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // add data
    let rows = response.split("\n");
    let data = rows.slice(1, 25).map(row => row.split(","));
    data.forEach(rowData => {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        rowData.forEach((cellData, index) => {
            if (index === 3) {
                cell1.textContent = cellData.replace(/"/g, "");
                row.appendChild(cell1);
            } else if (index === 25){
                cell2.textContent = cellData.replace(/"/g, "");
                row.appendChild(cell2);
            }
        });
        
        
        let temperatureCell = document.createElement("td");
        temperatureCell.textContent = rowData[13];
        row.appendChild(temperatureCell);
        let preCell = document.createElement("td");
        preCell.textContent = rowData[17];
        row.appendChild(preCell);
        let windCell = document.createElement("td");
        windCell.textContent = rowData[14];
        row.appendChild(windCell);
        table.appendChild(row);
        let humidCell = document.createElement("td");
        humidCell.textContent = rowData[22];
        row.appendChild(humidCell);
        let pressCell = document.createElement("td");
        pressCell.textContent = rowData[19];
        row.appendChild(pressCell);
    });

// append the table to the div
divElement.appendChild(table);
    
});
