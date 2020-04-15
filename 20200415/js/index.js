let cascadeFlowModule = (function () {
    let columns = Array.from(document.querySelectorAll('.column')),
        data = [];
    let queryData = function queryData() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/data.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
            };
        };
        xhr.send(null);
    };
    let bindHTML = function bindHTML() {
        data = data.map(item => {
            item.height = item.height * 290 / item.width;
            item.width = 290;
            return item;
        });
        for (let i = 0; i < data.length; i += 3) {
            let group = data.slice(i, i + 3);
            group.sort((a, b) => a.height - b.height);
            columns.sort((a, b) => b.offsetHeight - a.offsetHeight);
            group.forEach((item, index) => {
                let {
                    height,
                    link,
                    title,
                    pic
                } = item;
                let card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `<a href="${link}">
                                    <div class="lazyImageBox" style="height:${height}px">
                                        <img src="" alt="" data-img="${pic}">
                                    </div>
                                    <p>${title}</p>
                                </a>`;
                columns[index].appendChild(card);
            });
        };
    };
    let lazyFunc = function lazyFunc() {
        let lazyImageBoxs = document.querySelectorAll('.lazyImageBox'),
            HTML = document.documentElement;
        [].forEach.call(lazyImageBoxs, item => {
            let isLoad = item.getAttribute('isLoad');
            if (isLoad === 'true') return;
            let A = HTML.clientHeight + HTML.scrollTop,
                B = until.offset(item).top + item.offsetHeight / 2;
            if (B <= A) {
                lazyImg(item);
            };
        });
    };
    let lazyImg = function lazyImg(lazyImageBox) {
        let img = lazyImageBox.querySelector('img'),
            tempImg = new Image,
            dataImg = img.getAttribute('data-img');
        tempImg.src = dataImg;
        tempImg.onload = () => {
            img.src = dataImg;
            until.css(img, 'opacity', 1);
        };
        tempImg = null;
        img.removeAttribute('data-img');
        lazyImageBox.setAttribute('isLoad', 'true');
    };
    let render;
    let moreData = function moreData() {
        let HTML = document.documentElement;
        if (HTML.clientHeight * 1.5 + HTML.scrollTop > HTML.scrollHeight) {
            if (render) return;
            render = true;
            queryData();
            bindHTML();
            lazyFunc();
            render = false;
        };
    };

    return {
        init() {
            queryData();
            bindHTML();
            lazyFunc();
            window.onscroll = function () {
                lazyFunc();
                moreData();
            }
        }
    };
})();
cascadeFlowModule.init();