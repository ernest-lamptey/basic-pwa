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
    Notification.requestPermission().then((perm) => {
        if (perm  === "granted") {
            new Notification("We're coming soon", {
                body: "Our crypto trading website will be live very soon!",
                icon: "../images/maskable_icon_x192.png"
            })
        }
    })
})