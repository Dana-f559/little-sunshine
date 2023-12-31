//! добавляє ту фігню знизу
//! добавляє ту фігню знизу
function AddFooter(){
    const footer = document.querySelector('footer');

    const div = document.createElement("div");

    footer.append(div);

    div.setAttribute("class", "flexbox-container");
    div.setAttribute("id", "flexbox-container");
    const inside = (document.getElementById(
        "flexbox-container"
    ).innerHTML = `
    <a href="index.html" class="box"><div>Quotes</div></a>
    <a href="cats.html" class="box"><div>Cats</div></a>
    <a href="" class="box"><div>k</div></a>
    <a href="" class="box"><div>!</div></a>`);
}

AddFooter();