let rotationChart = (function () {
    let box = document.querySelector('.box'),
        ul = box.querySelector('ul'),
        left = box.querySelector('.left'),
        right = box.querySelector('.right'),
        spans = box.querySelectorAll('.btn_box2 span'),
        status = 0,
        timer = null;
    // 实现无缝轮播
    let chart = function chart() {
        status -= 600;
        if (status < -3000) {
            status = 0;
            ul.style.transition = 'none';
            ul.style.transform = `translateX(${status}px)`;
            let l = ul.offsetHeight;
            status -= 600;
            ul.style.transition = 'all .3s ease';
        } else {
            ul.style.transition = 'all .3s ease';
        }
        ul.style.transform = `translateX(${status}px)`;
    };
    let handleTimer = function handleTimer() {
        timer = setInterval(() => {
            chart();
        }, 1500);
        box.onmouseenter = function () {
            clearInterval(timer);
        }
        box.onmouseleave = function () {
            handleTimer();
        }
    }
    // 点击左右按钮实现左右切换
    let handle = function handleLeft() {
        left.onclick = function () {
            status += 600;
            if (status > 0) {
                status = -3000;
                ul.style.transition = 'none';
                ul.style.transform = `translateX(${status}px)`;
                let l = ul.offsetHeight;
                status += 600;
                ul.style.transition = 'all .3s ease';
            } else {
                ul.style.transition = 'all .3s ease';
            };
            ul.style.transform = `translateX(${status}px)`;
        };
        right.onclick = function () {
            chart();
        };
    };
    // 点击按钮点击哪个跳转到对应得图片
    let handleBtn = function handleBtn() {
        [...spans].forEach((item, index) => {
            item.onclick = function () {
                status = -600 * index;
                ul.style.transition = 'all .3s ease';
                ul.style.transform = `translateX(${status}px)`;
            };
        });
    }


    return {
        init() {
            handleTimer();
            handle();
            handleBtn();
        }
    }
})();
rotationChart.init();