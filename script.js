// TODO: add code here 

window.addEventListener('load', () => {
    fetch(`https://handlers.education.launchcode.org/static/astronauts.json`).then((response) => {
        response.json().then((json) => {
            // Sort by hours in space
            json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
            const container = document.getElementById('container');
            container.innerHTML = `<h2>Total Astronauts: ${json.length}</h2`;
            for (let index = 0; index < json.length; index++) {
                const activeFormat = json[index].active ? 'green' : 'black';
                container.innerHTML +=
                    `<div class="astronaut">
                 <div class="bio">
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                         <li>Hours in space: ${json[index].hoursInSpace}</li>
                         <li>Active: <span style='color:${activeFormat}'>${json[index].active}</span></li>
                         <li>Skills: ${json[index].skills.join(", ")}</li>
                         </ul>
                 </div>
                <img class="avatar" src="${json[index].picture}">
            </div>`
            }
        }
        )
    })
}
)