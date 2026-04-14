function updateDG(id, running, kw, voltage, freq) {
    let dg = document.getElementById(id);
    let status = dg.querySelector(".status");
    let values = dg.querySelectorAll(".value");

    if (running) {
        status.innerText = "RUNNING";
        status.className = "status running";
    } else {
        status.innerText = "STOPPED";
        status.className = "status stopped";
    }

    values[0].innerText = kw + " kW";
    values[1].innerText = voltage + " V";
    values[2].innerText = freq + " Hz";
}

// Demo auto update (simulate real data)
setInterval(() => {
    updateDG("dg1", true, Math.random()*150, 415, 50);
    updateDG("dg2", false, 0, 0, 0);
    updateDG("dg3", true, Math.random()*150, 415, 50);
    updateDG("dg4", false, 0, 0, 0);
    updateDG("dg5", true, Math.random()*150, 415, 50);
}, 2000);