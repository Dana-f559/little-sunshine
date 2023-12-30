//! дата з куотес получає і працює
getTodos = async () => {
    const response = await fetch("stuffjs/quotes.json");

    if (response.status != 200) {
        throw new Error("canot fatch the data");
    }

    const data = await response.json();
    return data;
};

getTodos()
    .then((data) => {
        quotes = data.quotes;
        displayData(quotes);
        console.log("resolved");
    })
    .catch((err) => console.log("regected", err.message));

//! enother function, not a part of this one
const displayData = (data) => {
    let i = 0;
    document.getElementById("quote").innerHTML = data[i];

    document.getElementById("btn").onclick = () => {
        i++;
        if (i > data.length - 1) {
            i = 0;
        }
        document.getElementById("quote").innerHTML = data[i];
    };
};
