(function(win,document){
    // 窗口大小发生改变时，重新计算html的font-size值大小
    function fn(){
        let winWdith = document.documentElement.clientWidth;
        let curFontSize = (100 * winWdith / 750);
        document.documentElement.style.fontSize = curFontSize+'px';
    }
    fn();
    win.onresize = function(){
        fn()
    }
})(window,document);