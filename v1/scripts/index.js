links = {
    "console": "https://conosle.netlify.app/",
    "personal-website": "https://bhanuhu.netlify.app/",
    "github": "https://github.com/bhanuhu",
    "resume": "https://drive.google.com/file/d/1nBXkd2aYLlQnyPx8IQMoLag3BT0AzPfb/view?usp=sharing",
    "source_code": "https://github.com/bhanuhu/bhanuhu.github.io"
}

for (let element_id in links) {
    document.getElementById(element_id).addEventListener("click", () => {
        window.open(links[element_id], "_blank")
    });
}


ra101 = document.getElementById("ra101");
mk_choose = document.getElementById("mk-choose");

ra101.addEventListener("click", ()=>{mk_choose.play()});

window.addEventListener("load", ()=>{mk_choose.play()});
