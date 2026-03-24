// 占卜結果資料（集中整理，方便後續擴充修改）
const fortuneData = [
    {
        type: "✨ 大吉 (Great Blessing) ✨",
        description: {
            work: "事業運爆棚！今天的提案都會順利通過，主管也會對你刮目相看。",
            study: "記憶力超群！看過的書都能過目不忘，考試絕對沒問題。",
            love: "桃花朵朵開！今天有可能會遇到心儀的對象，或是與伴侶感情升溫。",
            money: "財神爺眷顧！走在路上都有可能撿到錢，投資理財大豐收。"
        },
        quote: "幸運女神今天只為你微笑！把握這完美的一天！"
    },
    {
        type: "🌟 中吉 (Middle Blessing) 🌟",
        description: {
            work: "按部就班，穩紮穩打。雖然沒有驚喜，但進度都在掌控中。",
            study: "學習遇強則強，找同學一起討論會有意想不到的收穫。",
            love: "感情平穩發展，適合安排溫馨的小約會，增進彼此了解。",
            money: "小有偏財運，買張彩券或許有小驚喜，但不宜過度投資。"
        },
        quote: "平淡就是福，穩中求勝的一天！"
    },
    {
        type: "🍀 小吉 (Small Blessing) 🍀",
        description: {
            work: "稍微遇到點小障礙，但只要耐心溝通就能順利解決。",
            study: "需要多花點時間複習，不要被周圍的事物分心了。",
            love: "多一點主動關心對方，對方會強烈感受到你的心意。",
            money: "理智消費，不要因為一時衝動買了不需要的東西。"
        },
        quote: "一步一腳印，微小的幸運也在你身邊！"
    },
    {
        type: "😊 吉 (Blessing) 😊",
        description: {
            work: "有機會接觸到新任務，是展現自己潛力的好時機。",
            study: "換個學習環境，比如去無人咖啡廳或圖書館，效率會更高。",
            love: "單身者有機會透過朋友介紹認識新朋友，不妨去赴約。",
            money: "正常的收支平衡，可以開始規劃下一次的旅遊基金。"
        },
        quote: "保持微笑，好運自然會被你吸引過來！"
    },
    {
        type: "💪 末吉 (Ending Blessing) 💪",
        description: {
            work: "事情積壓較多，建議列出優先順序，一件一件慢慢完成。",
            study: "遇到不懂的問題不要硬撐，請教老師或同學會豁然開朗。",
            love: "容易因為小事發生口角，各退一步海闊天空。",
            money: "不要輕易借錢給別人，以免引發不必要的財務糾紛。"
        },
        quote: "黑暗過後就是黎明，再堅持一下！"
    },
    {
        type: "🌧️ 凶 (Curse) 🌧️",
        description: {
            work: "容易犯粗心的錯誤，送出重要文件前務必再三檢查。",
            study: "注意力難以集中，建議多做幾次深呼吸放鬆一下。",
            love: "對方可能會有讓你猜不透的行為，不要過度解讀，直接溝通最好。",
            money: "有漏財危機，出門在外請看管好自己的錢包與貴重物品。"
        },
        quote: "低谷是為了下一次的跳躍做準備，別灰心！"
    },
    {
        type: "🛌 大凶 (Great Curse) 🛌",
        description: {
            work: "諸事不順，建議今天保持低調，少說話多做事為妙。",
            study: "可能會遇到怎麼解都解不開的難題，先放著明天再說吧。",
            love: "感情受到嚴峻考驗，需要更多的包容和理解度過難關。",
            money: "破財消災，投資切忌盲目跟風，保守為上。"
        },
        quote: "物極必反，否極泰來！今天早點洗洗睡吧！"
    },
    {
        type: "🔮 神秘運作 (Mystic Mystery) 🔮",
        description: {
            work: "靈感湧現！你可能會想出一個震驚全場的絕佳好點子。",
            study: "直覺非常準確，選擇題遇到不會的就相信你的第一直覺！",
            love: "一個意料之外的訊息會打亂你的心跳節奏。",
            money: "發掘了新的省錢小妙招，積少成多也是一筆財富。"
        },
        quote: "宇宙正在為你編織一個奇妙的驚喜！"
    },
    {
        type: "🐾 貓奴吉 (Cat's Blessing) 🐾",
        description: {
            work: "跟同事的關係就像貓咪一樣，保持點距離反而更舒適。",
            study: "今天適合伸個懶腰，吃點零食再繼續努力，效率加倍！",
            love: "傲嬌一點也沒關係，懂你的人會覺得你很可愛。",
            money: "可能會忍不住花錢買寵物用品或可愛的小東西。"
        },
        quote: "喵～今天也是慵懶且充滿魅力的一天！"
    },
    {
        type: "🌌 宇宙大爆發 (Cosmic Big Bang) 🌌",
        description: {
            work: "表現亮眼，堪稱全場 MVP，所有人的目光都在你身上。",
            study: "有如神助，不只學得快，還能舉一反三，融會貫通。",
            love: "魅力無法擋，走到哪裡都有回頭率，自信地展現自己吧！",
            money: "財運大爆發，今天無論做什麼都有如神助般順利！"
        },
        quote: "你就是今天的宇宙中心，盡情發光發熱吧！"
    }
];

// DOM 元素選取
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');

    const drawBtn = document.getElementById('draw-btn');
    const retryBtn = document.getElementById('retry-btn');

    const resultTitle = document.getElementById('result-title');
    const descWork = document.getElementById('desc-work');
    const descStudy = document.getElementById('desc-study');
    const descLove = document.getElementById('desc-love');
    const descMoney = document.getElementById('desc-money');
    const resultQuote = document.getElementById('result-quote');

    // 點擊開始占卜
    drawBtn.addEventListener('click', () => {
        // 隱藏首頁，顯示載入動畫
        welcomeScreen.classList.add('hidden');
        loadingScreen.classList.remove('hidden');

        // 模擬連結宇宙能量的時間 (2.5秒)
        setTimeout(() => {
            showResult();
        }, 2500);
    });

    // 點擊再占卜一次
    retryBtn.addEventListener('click', () => {
        // 重置畫面狀態
        resultScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        
        // 將結果區塊回到頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 顯示占卜結果的邏輯
    function showResult() {
        // 隨機抽取一個結果
        const randomIndex = Math.floor(Math.random() * fortuneData.length);
        const fortune = fortuneData[randomIndex];

        // 將結果填充到 DOM 元素中
        resultTitle.textContent = fortune.type;
        descWork.textContent = fortune.description.work;
        descStudy.textContent = fortune.description.study;
        descLove.textContent = fortune.description.love;
        descMoney.textContent = fortune.description.money;
        resultQuote.textContent = fortune.quote;

        // 隱藏載入畫面，顯示結果畫面
        loadingScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
    }
});
