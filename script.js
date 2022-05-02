let ul = document.querySelector('ul');   
let childs = ul.children;
console.log(childs)

for (let i = 0; i < childs.length; i++) {
    const child = childs[i];
    if (child.innerText == "Fast and Furious") {
        ul.removeChild(childs[i]);
        let li = document.createElement('li')
        let ff = ul.appendChild(li)
        ff.innerText = "Fast and Furious"
    }
}