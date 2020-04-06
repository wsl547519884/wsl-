let shopModule = (function () {
    let navList = document.querySelectorAll('.navBox li'),
        mainBox = document.querySelector('.mainBox'),
        data = null;
    let queryData = function queryData() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', './json/product.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
            };
        };
        xhr.send(null);
    };
    let render = function render() {
        let str = ``;
        data.forEach(item => {
            let {
                id,
                img,
                title,
                price,
                hot,
                time
            } = item;
            str += `<li>
            <div class="mainImg">
                <img src=${img} alt="">
            </div>
            <div class="mainText">
                <h3>${title}</h3>
                <p>
                    <span>￥${price.toFixed(2)}</span>
                    <span>多款可选</span>
                </p>
                <p>
                    <span>整点赠送</span>
                    <span>商品赠券</span>
                </p>
                <p>
                    <span>发布时间</span>
                    <span>${time.replace(/-/g,'/')}</span>
                </p>
                <p>
                    <span>${hot}人评价</span>
                    <span>99%好评</span>
                </p>
            </div>
            </li>`;
        });
        mainBox.innerHTML = str;
    };
    let clear = function clear() {
        [].forEach.call(navList, item => {
            item !== this ? item.flag = -1 : null;
        });
    };
    let handle = function handle() {
        [].forEach.call(navList, item => {
            item.flag = -1;
            item.onclick = function () {
                clear.call(this);
                this.flag *= -1;
                let char = this.getAttribute('data-type');
                data.sort((a, b) => {
                    a = String(a[char]).replace(/-/g, '');
                    b = String(b[char]).replace(/-/g, '');
                    return (a - b) * this.flag;
                });
                render();
            };
        });
    };

    return {
        init() {
            queryData();
            render();
            handle();
        }
    }
})();
shopModule.init();