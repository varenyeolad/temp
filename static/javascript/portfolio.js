

const notifElem = document.querySelector('.notification')

let notif = {
    open: (color = 'pink') => notifElem.classList.add('go', color),
    close: () => notifElem.classList.remove('go')

}

setTimeout(() => {
    notif.open()
    setTimeout(() => {
        notif.close()
    }, 15000);
}, 5000);

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
