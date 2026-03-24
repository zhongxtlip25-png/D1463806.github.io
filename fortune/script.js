// 占卜結果資料 (整理在一起方便後續獨立修改)
const fortuneData = [
    {
        title: "大吉 🌟",
        description: "萬事如意，好運連連！",
        work: "事業運爆棚，提案都會順利通過，主管對你讚賞有加。",
        study: "思緒宛如泉湧，學習效率極佳，逢考必過。",
        love: "魅力四射，單身者有機會遇到心儀對象，有伴侶者感情加溫。",
        money: "財星高照，理財會有不錯的回收，甚至有意外之財。",
        quote: "今天是你的超級幸運日，大膽去實踐心中的計畫吧！"
    },
    {
        title: "中吉 ☀️",
        description: "穩步向前，順心如意。",
        work: "工作進展順利，與同事合作無間，能如期完成任務。",
        study: "只要按部就班，就能將知識穩穩吸收進大腦。",
        love: "感情生活平穩甜蜜，可以安排一些小驚喜創造回憶。",
        money: "收支平衡，適合理性消費，不宜衝動投資。",
        quote: "保持微笑，好運就會一直默默跟著你哦！"
    },
    {
        title: "小吉 🍀",
        description: "小確幸不斷，平安就是福。",
        work: "處理日常瑣事得心應手，沒有太大壓力，心情輕鬆。",
        study: "遇到不懂的地方多問問，會有意想不到的深刻收穫。",
        love: "平淡中見真情，一句簡單的關心就能溫暖對方的心。",
        money: "或許會在舊外套口袋裡撿到兩百塊，也是一種幸運。",
        quote: "留意生活中的微小美好，快樂其實可以很簡單。"
    },
    {
        title: "吉 ✨",
        description: "充滿轉機，漸入佳境。",
        work: "即便遇到些許挑戰，只要冷靜應對就能順利化解危機。",
        study: "跨越學習瓶頸期的好時機，堅持下去就會看到曙光！",
        love: "有些陳年誤會能在此時解開，讓彼此關係更進一步。",
        money: "適合好好規劃未來的財務目標，從現在開始慢慢累積。",
        quote: "所有的努力，都會在未來的某個時刻開出絢爛的花朵。"
    },
    {
        title: "末吉 🍂",
        description: "小心謹慎，積蓄能量。",
        work: "可能會遇到一些突然的小插曲，請保持耐心與冷靜處理。",
        study: "容易分心，建議找個絕對安靜的地方讓自己專注學習。",
        love: "多給對方一點個人空間，有時候距離反而能產生美感。",
        money: "控制日常花費，避免購買當下不需要的奢華物品。",
        quote: "休息是為了走更長遠的路，不要總是給自己太大壓力。"
    },
    {
        title: "吉帶凶 🌧️",
        description: "禍福相依，保持平常心。",
        work: "計畫往往趕不上變化，請隨時準備好備用的 B 方案。",
        study: "需要多花點時間反覆複習，千萬不要急於求成。",
        love: "溝通時請特別注意語氣，避免因無心之過引發口角。",
        money: "近期可能有預期外的必要支出，務必看緊自己的荷包。",
        quote: "雨後總會天晴，眼前的困難只是命運暫時的考驗。"
    },
    {
        title: "大吉大利 🌈",
        description: "心想事成，如有神助！",
        work: "完美且迅速解決團隊難題，徹底展現你出色的領導力。",
        study: "理解力大增，原本卡關的複雜觀念瞬間豁然開朗。",
        love: "桃花朵朵開，非常有機會展開一段浪漫無比的戀情。",
        money: "財運極度旺盛，不妨試試手氣或進行有把握的項目。",
        quote: "光芒四射的一天，專屬舞台已經為你準備好了！"
    },
    {
        title: "平 🍃",
        description: "波瀾不驚，歲月靜好。",
        work: "例行公事穩定進行中，沒有大風大浪就是最好的狀態。",
        study: "只要繼續保持一貫的學習節奏即可，無須過度緊繃。",
        love: "享受一個人的獨處時光，或與伴侶安靜相伴看場電影。",
        money: "財務狀況持平，既沒有特別進帳，也沒有意外大開銷。",
        quote: "平凡就是最真實、最珍貴的幸福，好好享受當下吧。"
    },
    {
        title: "神秘運 🔮",
        description: "直覺敏銳，充滿未知。",
        work: "相信你的第六感，它會引導你做出當下最正確的決策。",
        study: "對神祕學或心理學特別有感悟，適合閱讀這類書籍。",
        love: "可能會在意外的轉角遇到讓你覺得似曾相識的靈魂伴侶。",
        money: "純憑直覺進行的小額保守投資可能會帶來意外的驚喜。",
        quote: "閉上眼睛，仔細聆聽內心的聲音，答案其實早就在那裡。"
    },
    {
        title: "桃花運 🌸",
        description: "人見人愛，魅力無法擋。",
        work: "人際互動關係極佳，遇到困難總能得到各方貴人相助。",
        study: "與同學或朋友一起讀書討論，學習效果絕對事半功倍。",
        love: "今天是你的主場！請大膽勇敢地向在乎的人表達心意吧。",
        money: "出門在外可能收到別人的熱情請客或是收到貼心小禮物。",
        quote: "盡情散發你的自信光芒，讓全世界都為你傾倒！"
    }
];

// 初始化與 DOM 元素選取
document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('intro-section');
    const loadingSection = document.getElementById('loading-section');
    const resultSection = document.getElementById('result-section');

    const drawBtn = document.getElementById('draw-btn');
    const retryBtn = document.getElementById('retry-btn');

    const resultTitle = document.getElementById('result-title');
    const resultDesc = document.getElementById('result-desc');
    const resultWork = document.getElementById('result-work');
    const resultStudy = document.getElementById('result-study');
    const resultLove = document.getElementById('result-love');
    const resultMoney = document.getElementById('result-money');
    const resultQuote = document.getElementById('result-quote');

    // 綁定按紐事件
    drawBtn.addEventListener('click', startFortuneTelling);
    retryBtn.addEventListener('click', resetFortuneTelling);

    // 開始占卜流程
    function startFortuneTelling() {
        // 隱藏首頁，顯示 loading 動畫
        switchSection(introSection, loadingSection);
        
        // 模擬星象解析時間 (2.5秒)
        setTimeout(() => {
            showResult();
        }, 2500);
    }

    // 顯示分析結果
    function showResult() {
        // 隨機抽選結果
        const randomIndex = Math.floor(Math.random() * fortuneData.length);
        const result = fortuneData[randomIndex];
        
        // 動態填入占卜結果
        resultTitle.textContent = result.title;
        resultDesc.textContent = result.description;
        resultWork.textContent = result.work;
        resultStudy.textContent = result.study;
        resultLove.textContent = result.love;
        resultMoney.textContent = result.money;
        resultQuote.textContent = result.quote;
        
        // 隱藏 loading，顯示專屬結果
        switchSection(loadingSection, resultSection);
    }

    // 重置占卜，回首頁
    function resetFortuneTelling() {
        switchSection(resultSection, introSection);
    }

    // 平滑切換區塊的輔助函式
    function switchSection(hideElem, showElem) {
        // 先讓當前區塊淡出
        hideElem.classList.remove('active');
        
        // 等待淡出動畫 (0.4秒) 結束後處理顯示切換
        setTimeout(() => {
            hideElem.classList.add('hidden');
            showElem.classList.remove('hidden');
            
            // 強制瀏覽器重繪 (Reflow)，確保 display 變更被登記，之後的透明度漸變才會生效
            void showElem.offsetWidth;
            
            // 觸發淡入動畫
            showElem.classList.add('active');
        }, 400); 
    }
});
