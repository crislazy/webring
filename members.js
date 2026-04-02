const memberCount = document.querySelector('.member-count');
const memberList = document.querySelector('.member-list');

fetch('/sites.json')
    .then(response => response.json())
    .then((members) => {
        if (members.length == 1) {
             memberCount.innerHTML = `There is currently 1 member:`;
        } else {
             memberCount.innerHTML = `There are currently ${members.length} members`;
        };

        members.forEach(member => {
            memberList.innerHTML += `<div class="member"><p><a href="${member.url}">${member.name}</a></div>`;
        });
    })