var Link = document.querySelector('.link');
if (Link instanceof HTMLAnchorElement) { //narrowing 하는 법 [Elment 에 상속되어있는 것들. HTMLAnchorElement 같은거]
    Link.href = 'https://kakao.com';
}
//EventListener narrowing 하는 법 - ?붙인다 optional
var btn = document.querySelector('#button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
});
//image 바꿔보기
var changImg = document.querySelector('#image');
if (changImg instanceof HTMLImageElement) {
    changImg.addEventListener;
    changImg.src = 'ttt.jpg';
}
