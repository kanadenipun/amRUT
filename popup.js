const rut = () => {

    console.log("onclick called");
    const rutNo = generateRut();
    document.getElementById('rut-number').value = rutNo;

    let tempInput = document.createElement("input");
    tempInput.value = rutNo;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

};

document.getElementById("action-button").onclick = rut;
const rutOpts = {minValue: 1e6, maxValue: 1e7};
const generateRut = function () {
    let e, n, r, u, i;
    i =  getRandomNumber();
    u =  getMod(i);
    n = `${i}-${u}`;

    return n;
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

