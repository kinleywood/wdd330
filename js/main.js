let ol = document.querySelector("ol");
const links = [{url:"week1/week1.html", label:"Week 1"}, {url:"week2/week2.html", label:"Week 2"},{url:"week3/week3.html", label:"Week 3"}];

links.forEach(makeOrderedList);

function makeOrderedList(link) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
    ol.appendChild(li);
};

