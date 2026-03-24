// ==========================================
// 占卜資料庫 - 您可以在此處輕鬆修改或新增占卜結果
// ==========================================
const fortunesData = [
    {
        name: "輝煌之星 ✨ (大吉)",
        description: "今天的你被宇宙最強的幸運能量包圍，所向無敵！",
        work: "提出的點子將大受好評，遇到困難也會迎刃而解。",
        study: "思緒有如泉湧，學習新事物能迅速掌握核心。",
        love: "魅力無法擋！單身者有浪漫邂逅，有伴侶者感情直線升溫。",
        money: "意外之財降臨的機率高，之前的投資也將看到豐厚回報。",
        conclusion: "大膽前進吧，整個宇宙都在背後支持著你！"
    },
    {
        name: "順水之舟 ⛵ (中吉)",
        description: "一切都在平穩中前進，是積累實力的好日子。",
        work: "按部就班就能有好成績，與同事合作相當愉快。",
        study: "適合溫故知新，把之前的盲點一次釐清。",
        love: "平淡中見真情，一個溫暖的問候能讓對方心動。",
        money: "收支平衡，有機會獲得小額的額外收入或請客。",
        conclusion: "享受這份平靜與順遂，穩健的步伐走得最遠。"
    },
    {
        name: "晨曦微光 🌅 (小吉)",
        description: "好運正在慢慢萌芽，細節中藏著小確幸。",
        work: "雖然忙碌，但努力都會被上司或客戶看在眼裡。",
        study: "今天適合將大目標拆解成小任務，逐一擊破。",
        love: "留意身邊默默關心你的人，或許就是良緣所在。",
        money: "精打細算能為你省下一筆不小的開銷。",
        conclusion: "微小的光芒聚集起來，也能照亮整片天空。"
    },
    {
        name: "平靜之湖 💧 (平)",
        description: "沒有大起大落，是個難得的寧靜之日。",
        work: "例行公事為主，適合整理桌面與思緒。",
        study: "專注度普通，不妨換個環境(如咖啡廳)轉換心情。",
        love: "給彼此一點個人空間，距離反而產生美感。",
        money: "不宜有太大的金錢變動，守護好錢包即可。",
        conclusion: "沒有消息就是好消息，享受平凡就是福氣。"
    },
    {
        name: "逆風飛翔 🍃 (末吉)",
        description: "雖然阻力不小，但這是起飛前的必經過程。",
        work: "可能會遇到不講理的要求，保持微笑與耐心是解藥。",
        study: "遇到瓶頸別灰心，去睡個好覺或運動一下再戰。",
        love: "溝通容易產生誤會，多點包容，少點猜忌。",
        money: "避免衝動購物，購買前請默念三次『我真的需要嗎？』。",
        conclusion: "逆風能讓你飛得更高，轉念一想全是風景。"
    },
    {
        name: "暗礁潛伏 🌑 (凶)",
        description: "周遭充滿未知的變數，今日以防守為重。",
        work: "仔細檢查送出的信件與文件，小心低級錯誤發生。",
        study: "進度不如預期，別給自己太大壓力，盡力就好。",
        love: "情緒起伏較大，別把工作上的氣出在重要的人身上。",
        money: "有破財風險，出門在外請留意隨身貴重物品。",
        conclusion: "烏雲總會散去，今天只要平安度過就是勝利！"
    },
    {
        name: "破釜沉舟 🌋 (大凶但有轉機)",
        description: "看似跌落谷底，實則是絕地大反攻的契機！",
        work: "累積的問題可能會爆發，勇敢面對並一次解決它。",
        study: "與其死記硬背，不如徹底打掉重練，重新理解基礎。",
        love: "如果有心結，今天是攤開來說清楚的最好時機。",
        money: "荷包大失血，就當作是花錢消災，擋煞買平安吧。",
        conclusion: "最低谷的時候，無論往哪個方向走，都是向上！"
    },
    {
        name: "愛神之箭 💘 (特殊：桃花運高漲)",
        description: "今日的你自帶粉紅濾鏡，人氣大爆發。",
        work: "靠著極佳的人緣，跨部門協調猶如喝水般簡單。",
        study: "可以向心儀的同學請教問題，一舉兩得！",
        love: "今日的愛情主角就是你！勇敢主動出擊，成功率高達 200%。",
        money: "可能會在治裝或約會上花費較多，但這筆錢花得很值得。",
        conclusion: "愛是宇宙裡最迷人的魔法，準備好迎接幸福吧。"
    },
    {
        name: "財源滾滾 🤑 (特殊：金錢運大爆發)",
        description: "財神爺今天坐在你家客廳不走了！",
        work: "有機會談成大案子，或是獲得實質上的業績獎勵。",
        study: "投資自己的腦袋是最賺錢的生意，今天適合報名進修。",
        love: "用一頓豐盛的晚餐犒賞自己和愛人吧，別省這點錢。",
        money: "偏財運極強，發票中獎、彩券幸運兒可能就是你。",
        conclusion: "抓住這波強大的財富能量，讓錢錢變成喜歡的形狀！"
    },
    {
        name: "靈光乍現 💡 (特殊：靈感大爆發)",
        description: "你的大腦連結了宇宙伺服器，創意源源不絕。",
        work: "長期卡關的企劃今天突然有了突破性的瘋狂好點子。",
        study: "解開複雜的難題，就像頓悟一般通體舒暢。",
        love: "想點浪漫又具創意的小驚喜，對方會感動到不行。",
        money: "你的點子很值錢，趕快把它們記錄下來變成未來的資產。",
        conclusion: "別忽視腦海中那些一閃而過的念頭，它們都是寶藏。"
    }
];

// ==========================================
// 頁面與互動邏輯
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 取得 DOM 元素
    const introScreen = document.getElementById('intro-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const drawBtn = document.getElementById('draw-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    const resTitle = document.getElementById('result-title');
    const resDesc = document.getElementById('result-desc');
    const resWork = document.getElementById('res-work');
    const resStudy = document.getElementById('res-study');
    const resLove = document.getElementById('res-love');
    const resMoney = document.getElementById('res-money');
    const resConclusion = document.getElementById('res-conclusion');

    // 抽籤按鈕點擊事件
    drawBtn.addEventListener('click', () => {
        // 切換到載入畫面
        switchScreen(introScreen, loadingScreen);
        
        // 模擬星象解讀的延遲時間 (1.5秒)
        setTimeout(() => {
            generateFortune();
            switchScreen(loadingScreen, resultScreen);
        }, 1500);
    });

    // 重新占卜按鈕點擊事件
    resetBtn.addEventListener('click', () => {
        switchScreen(resultScreen, introScreen);
    });

    // 畫面切換輔助函數
    function switchScreen(hideElement, showElement) {
        hideElement.classList.remove('active');
        // 等待淡出動畫(若有)或直接加上 hidden
        setTimeout(() => {
            hideElement.classList.add('hidden');
            showElement.classList.remove('hidden');
            // 延遲一點點加上 active 觸發 CSS 動畫
            setTimeout(() => {
                showElement.classList.add('active');
            }, 50);
        }, 200);
    }

    // 隨機抽取運勢並寫入畫面
    function generateFortune() {
        // 隨機選取一筆資料
        const randomIndex = Math.floor(Math.random() * fortunesData.length);
        const fortune = fortunesData[randomIndex];

        // 將資料寫入 DOM
        resTitle.textContent = fortune.name;
        resDesc.textContent = fortune.description;
        resWork.textContent = fortune.work;
        resStudy.textContent = fortune.study;
        resLove.textContent = fortune.love;
        resMoney.textContent = fortune.money;
        resConclusion.textContent = fortune.conclusion;
    }
});
