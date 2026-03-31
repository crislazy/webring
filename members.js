const memberCount = document.querySelector('.member-count');
const memberList = document.querySelector('.member-list');

fetch('/sites.json')
    .then(response => response.json())
    .then((members) => {
        memberCount.innerHTML = `There ${members.length == 1 ? `is currently ${members.length} member:` : `are currently ${members.length} members`}:`;

        members.forEach(member => {
            memberList.innerHTML += `<div class="member"><p><a href="${member.url}">${member.name}</a></div>`;
        });
    })