document.addEventListener('DOMContentLoaded', () => {
    const aosItems = document.querySelectorAll('.aos-item');

    // 滾動檢查函數
    const checkAOS = () => {
        const windowHeight = window.innerHeight;

        aosItems.forEach(item => {
            // 取得元素相對於視窗頂部的距離
            const elementTop = item.getBoundingClientRect().top;
            
            // 判斷條件：如果元素頂部的位置小於視窗高度的 85% (即元素 15% 進入視野時)
            if (elementTop < windowHeight * 0.85) {
                item.classList.add('aos-animate');
            }
            // 也可以添加 else 條件讓元素滑出時動畫復原，但這裡為了簡潔只做一次性動畫
        });
    };

    // 初始載入時檢查一次
    checkAOS();

    // 監聽滾動事件
    window.addEventListener('scroll', checkAOS);
});
