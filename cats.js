// Function to fetch cat data
const getDataCats = async () => {
    const response = await fetch("stuffjs/catData.json");

    if (response.status !== 200) {
        throw new Error("Cannot fetch the data");
    }

    const data = await response.json();
    return data;
};

// Function to add cat data to the HTML document
const addCatData = (cat) => {
    const thecat = document.querySelector("#catPics");

    const div = document.createElement("div");
    thecat.append(div);
    div.setAttribute("class", "photos-flex");
    
    div.innerHTML = `<img src="${cat.image}" alt="Cat Image" class="photoSize"><div class="text-flex">${cat.text}</div>`;

    
};

// Fetch cat data and add it to the HTML document
getDataCats()
    .then((data) => {
        const catKeys = Object.keys(data.cats);

        if (catKeys.length > 0) {
            // Iterate through all cats
            catKeys.forEach((catName) => {
                const cat = data.cats[catName];
                console.log("Cat Name:", catName);
                console.log("Cat Data:", cat);

                // Add each cat's data to the HTML document
                addCatData(cat);
            });
        } else {
            console.log("No cats found in the data");
        }
    })
    .catch((err) => console.log("Rejected", err.message));