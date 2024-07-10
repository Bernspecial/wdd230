const baseUrl = "https://bernspecial.github.io/wdd230/";

const linkUrl = "https://bernspecial.github.io/wdd230/data/links.json";

const weeklyActivity = document.querySelector("#weeks");

async function linksFetch() {
    try {
        const response = await fetch(linkUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            displaylink(data.weeks);
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    }
    catch (error) {
        console.log(error);
    }
}

// function displaylink(activityweeks) {
//     activityweeks.forEach((weeks) => {
//         let list = document.createElement("ul");
//         let weekHeading = document.createElement('h4');
//         let sortedList = document.createElement("li");
//         let link = document.createElement("a")

//         link.textContent= weeks.links.url;
//         link.setAttribute("href", `${weeks.links.url}`);

//         sortedList.appendChild(link);
//         sortedList.appendChild(weekHeading);
//         list.appendChild(sortedList);
//         sortedList.textContent = `: ${weeks.links.title}`
//         weekHeading.textContent = weeks.week;
//         weeklyActivity.appendChild(list);

//     });
// }


function displaylink(activityweeks) {
    activityweeks.forEach((weeks) => {
        let list = document.createElement("ul");
        let listItem = document.createElement("li");
        let weekHeading = document.createElement('span');
        weekHeading.textContent =  `${weeks.week}: `;

        let linkList = weeks.links.map((link) => {
            let linkAnchor = document.createElement("a");
            linkAnchor.href = link.url;
            linkAnchor.textContent = link.title;
            return linkAnchor.outerHTML;
        }).join(' | ');

        listItem.innerHTML = `${weekHeading.outerHTML} ${linkList}`;
        list.appendChild(listItem);
        weeklyActivity.appendChild(list);
    });
}

linksFetch();