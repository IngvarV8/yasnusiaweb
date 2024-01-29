function sendMessage(msg) {
    socket.send("A new message from client at " + new Date());
}

function updateTable(data) {
    if (!isValidJSON(data)) {
        return;
    }

    let jsonObject = JSON.parse(data);
    let topic = jsonObject.topic;
    let message = jsonObject.message;

    let table = document.getElementById("table");
    let topicCells = table.querySelectorAll("tr td:nth-child(1)");
    let messageCells = table.querySelectorAll("tr td:nth-child(2)");
    let timeCells = table.querySelectorAll("tr td:nth-child(3)");

    for (var i = 0; i < messageCells.length; i++) {
        for (var j = 0; j < topicCells.length; j++) {
            if (topic == topicCells[j].textContent) {
                messageCells[j].textContent = message;
                refreshTime(timeCells[j]);
                return;
            }
        }
    }

    //if new topic appeared

    let newRow = document.createElement("tr");

    let newHeaderCell = document.createElement("td");
    newHeaderCell.textContent = topic;

    let newDataCell = document.createElement("td");
    newDataCell.textContent = message;

    let newTimeCell = document.createElement("td");
    refreshTime(newTimeCell);

    newRow.appendChild(newHeaderCell);
    newRow.appendChild(newDataCell);
    newRow.appendChild(newTimeCell);

    table.appendChild(newRow);
}

function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

function orderTable() {
    var table = document.getElementById("table");
    var rows = Array.from(table.rows).slice(1);
    console.log(rows);

    rows.sort(function (a, b) {
        var textA = a.cells[0].textContent.toUpperCase();
        var textB = b.cells[0].textContent.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    rows.forEach(function (row) {
        table.deleteRow(row.rowIndex);
    });

    rows.forEach(function (row) {
        table.appendChild(row);
    });
}

function refreshTime(element) {
    if (false) {
        clearInterval(intervalId);
        console.log("Condition met. Interval stopped.");
    }
    element.textContent = new Date().toString();
}

setTimeout(function () {
    clearInterval(setInterval(refreshTime, 500));
    console.log("Interval stopped");
}, 30000);

