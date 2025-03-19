// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    
    // 初始计数值
    let count = 0;
    
    // 更新计数显示的函数
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    // 增加按钮点击事件
    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });
    
    // 减少按钮点击事件
    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });
});