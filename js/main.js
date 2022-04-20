let ol = document.querySelector("ol");
const links = [{url:"week1/week1.html", label:"Week 1"}];

links.forEach(makeOrderedList);

function makeOrderedList(link) {
    let li = document.createElement("li");
    li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
    ol.appendChild(li);
};
