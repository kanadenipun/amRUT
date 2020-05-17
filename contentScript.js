const rut = () => {
    return {type: "rut", payload: generateRut()}
};

const actions = {
    rut : "rut"
};

chrome.runtime.onMessage.addListener((request, sender, response) => {
    console.log("request recieved");
    const reply = actions[request.type] && actions[request.type]();
    reply && response(reply);
});


const rutOpts = {minValue: 1e4, maxValue: 1e5};
const generateRut = function () {
    let e, n, r, u, i;
    i =  getRandomNumber();
    u =  getMod(i);
    n = `${i}-${u}`;

    return n;
    // var tempInput = document.createElement("input");
    // tempInput.value = n;
    // document.body.appendChild(tempInput);
    // tempInput.select();
    // document.execCommand("copy");
    // document.body.removeChild(tempInput);
};
const getRandomNumber = function () {
    let n, r;
    r =  rutOpts.minValue;
    n =  rutOpts.maxValue;
    return Math.floor(Math.random() * (n - r + 1)) + r
};

const getMod = function (t) {
    var e, n;
    e = 0;
    n = 1;
    while (t) {
        n = (n + t % 10 * (9 - e++ % 6)) % 11;
        t = Math.floor(t / 10)
    }
    if (n) {
        return n - 1
    } else {
        return "K"
    }
};

