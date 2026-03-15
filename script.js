let reports = JSON.parse(localStorage.getItem("reports")) || [];

function displayReports(){

let list = document.getElementById("reportList");

list.innerHTML = "";

reports.forEach(report => {

let li = document.createElement("li");

li.innerHTML =
"<b>" + report.title + "</b><br>" +
report.description + "<br>" +
"Location: " + report.location;

list.appendChild(li);

});

}

function submitReport(){

let title = document.getElementById("title").value;
let description = document.getElementById("description").value;
let location = document.getElementById("location").value;

let report = {

title:title,
description:description,
location:location

};

reports.push(report);

localStorage.setItem("reports", JSON.stringify(reports));

displayReports();

}

displayReports();