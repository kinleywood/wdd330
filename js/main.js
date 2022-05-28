let ol = document.querySelector("ol");
const links = [{url:"week1/week1.html", label:"Week 1"}, {url:"week2/week2.html", label:"Week 2"},{url:"week3/week3.html", label:"Week 3"},{url:"week4/week4.html", label:"Week 4"},{url:"week5/week5.html", label:"Week 5"},{url:"challengeOne", label:"ToDo List"}];

links.forEach(makeOrderedList);

function makeOrderedList(link) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
    ol.appendChild(li);
};

