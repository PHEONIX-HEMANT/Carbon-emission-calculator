// alert("Hello")

let count = 0;

function cumulative(){
    performance.getEntries().map(item => item.transferSize).forEach(size => {
        if (typeof size == 'number') {
            count = count + size;
        }
    });
    return count;
}

let res = cumulative();
alert(res);
try {
    let data = document.querySelector(".section");
    window.addEventListener('DOMContentLoaded', ()=> {
        data.innerHTML = res;
    })
    alert(data.textContent.toString);
    if (data===null) {
        data.textContent = "hi";
        throw Error;
    }
}
catch(err) {
    alert(err);
}
