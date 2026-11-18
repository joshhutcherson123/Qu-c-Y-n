// 1) Hiệu ứng tim / cánh hoa rơi
(function(){
    var box = document.createElement('div');
    box.className = 'petals';
    var shapes = ['❤', '❀', '♥', '✿'];
    for (var i = 0; i < 16; i++){
        var s = document.createElement('span');
        s.className = 'petal';
        s.textContent = shapes[i % shapes.length];
        s.style.left = Math.random() * 100 + 'vw';
        s.style.fontSize = (12 + Math.random() * 18) + 'px';
        s.style.animationDuration = (9 + Math.random() * 9) + 's';
        s.style.animationDelay = (-Math.random() * 14) + 's';
        s.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
        box.appendChild(s);
    }
    document.body.appendChild(box);
})();

// 2) Chuyển trang mượt: mờ dần rồi mới sang trang mới
document.addEventListener('click', function(e){
    var a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.href.indexOf('#') > -1) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(function(){ window.location.href = a.href; }, 420);
});

// Quay lại bằng nút Back thì không bị kẹt ở trạng thái mờ
window.addEventListener('pageshow', function(){ document.body.classList.remove('leaving'); });
