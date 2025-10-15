// 歡迎訊息
console.log("網站載入完成！");

// 簡單的互動功能
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM 載入完成");
    
    // 為按鈕添加點擊事件
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('按鈕被點擊：', this.textContent);
        });
    });
});
