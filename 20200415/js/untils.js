let until = (function () {
    let offset = function offset(element) {
        let parent = element.offsetParent,
            left = element.offsetLeft,
            top = element.offsetTop;
        while (parent) {
            if (!/MSIE 8\.0/.test(navigator.userAgent)) {
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left,
            top
        }
    };
    let getCss = function getCss(element, attr) {
        let value = window.getComputedStyle(element)[attr];
        if (/^\d+(\.\d+)?(px|rem|em)?$/i.test(value)) {
            value = parseFloat(value);
        }
        return value;
    };
    let setCss = function setCss(element, attr, value) {
        if (attr === 'opacity') {
            element['style']['opacity'] = value;
            element['style']['filter'] = `alpha(opacity=${value*100})`;
            return;
        }
        if (/^(width|height|margin|padding|fontSize)?(top|left|bottom|right)?$/i.test(attr)) {
            if (!isNaN(value)) {
                value += 'px';
            }
        }
        element['style'][attr] = value;
    }
    let setGroupCss = function setGroupCss(element, attr) {
        for (let key in attr) {
            if (!attr.hasOwnProperty(key)) break;
            setCss(element, key, attr[key]);
        }
    };
    let css = function css(element) {
        let len = arguments.length,
            attr = arguments[1],
            value = arguments[2];
        if (len >= 3) {
            setCss(element, attr, value);
            return;
        }
        if (attr !== null && typeof attr === 'object') {
            setGroupCss(element, attr);
            return;
        }
        return getCss(element, attr);
    }
    return {
        offset,
        css
    }
})();