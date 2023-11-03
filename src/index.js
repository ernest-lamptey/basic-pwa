if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then((registration) => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration failed");
        console.log(error)
    })
}

const btnNotification = document.querySelector(".notification");
btnNotification.addEventListener("click", () => {
    btnNotification.innerHTML = btnNotification.innerHTML == "Notify Me" ? "Silent Mode" : "Notify Me"
})