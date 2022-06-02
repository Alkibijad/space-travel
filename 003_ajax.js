let xml = new XMLHttpRequest();
xml.open("get", "data.json");
xml.onreadystatechange = function () {
  if (xml.readyState === 4 && xml.status === 200) {
    let data = JSON.parse(xml.responseText);
    createDestinationHeader(data);
    displayCrew(data)
    seeTech(data)
  }
};

xml.send();
