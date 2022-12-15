document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            const user = data.results;
            console.log(user);

            let output = "";

            user.forEach(function (lists) {
                output += `
                <div class="card">
                    <div>
                        <ul class="list-group">
                            <li id="image"><img src="${lists.picture.large}"></li>
                            <li>Phone: ${lists.cell}</li>
                            <li>Email: ${lists.email}</li>
                            <li>City: ${lists.location.city}</li>
                            <li>Coordinates:</li>
                            <li> ${lists.location.coordinates.latitude}, ${lists.location.coordinates.longitude}</li>
                        </ul>
                    </div>
                </div> `;
            });
            document.getElementById('output').innerHTML = output;

        });
};
