function loadData() {
    return new Promise((resolve, reject) => {
        // setTimeout не является частью решения
        // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
        setTimeout(resolve, 2000);
    })
}

loadData()
    .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    });


const ros = document.getElementById('ros');
const vod = document.getElementById('vod');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (ros.classList != "jump") {
        ros.classList.add('jump')
    }
    setTimeout(function() {
        ros.classList.remove('jump');
    }, 500);
};
let isAlive = setInterval(function() {
    let rosTop = parseInt(window.getComputedStyle(ros).getPropertyValue('top'))
    let vodLeft = parseInt(window.getComputedStyle(vod).getPropertyValue('left'))


    if (vodLeft < 50 && vodLeft > 0 && rosTop >= 140) {
        alert("ТЫ ТАК МНОГО ХАПАНУЛ");
    }
}, 10);
