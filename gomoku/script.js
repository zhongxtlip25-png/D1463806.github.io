const BOARD_SIZE = 15;
let currentPlayer = 'black'; // 'black' 或 'white'
let boardState = []; // 儲存盤面狀態 (null, 'black', 'white')
let gameActive = true;

const boardElement = document.getElementById('board');
const currentPlayerSpan = document.getElementById('turn-indicator');
const winMessage = document.getElementById('win-message');
const winnerText = document.getElementById('winner-text');
const restartBtn = document.getElementById('restart-btn');

// 15x15 棋盤的星位座標
const starPoints = [
    [3, 3], [3, 11], [7, 7], [11, 3], [11, 11]
];

// 初始化遊戲
function initGame() {
    // 建立二維陣列代表空盤面
    boardState = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
    currentPlayer = 'black';
    gameActive = true;
    
    // 清空畫面上的棋盤與狀態
    boardElement.innerHTML = '';
    winMessage.classList.add('hidden');
    currentPlayerSpan.style.display = 'block';
    updateTurnIndicator();

    // 建立 15x15 的網格
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            
            // 如果是星位，加入實心小點
            if (starPoints.some(p => p[0] === r && p[1] === c)) {
                const star = document.createElement('div');
                star.classList.add('star-point');
                cell.appendChild(star);
            }
            
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
}

// 更新輪流提示
function updateTurnIndicator() {
    if (currentPlayer === 'black') {
        currentPlayerSpan.innerHTML = '當前輪到：黑子 <span style="color:#000;">⬤</span>';
    } else {
        currentPlayerSpan.innerHTML = '當前輪到：白子 <span style="color:#ccc; text-shadow:0 0 1px #000;">⬤</span>';
    }
}

// 點擊棋盤格子
function handleCellClick(e) {
    if (!gameActive) return;
    
    // 確保點擊到的是 cell 元素
    const cell = e.target.closest('.cell');
    if (!cell) return;
    
    const r = parseInt(cell.dataset.row);
    const c = parseInt(cell.dataset.col);

    // 如果該格已經有棋子，則不動作
    if (boardState[r][c] !== null) return;

    // 更新邏輯狀態
    boardState[r][c] = currentPlayer;
    cell.classList.add('has-piece');
    
    // 建立真實 UI 棋子
    const piece = document.createElement('div');
    piece.classList.add('piece', currentPlayer);
    cell.appendChild(piece);

    // 判斷是否獲勝
    if (checkWin(r, c, currentPlayer)) {
        gameActive = false;
        winnerText.innerText = currentPlayer === 'black' ? '🎉 恭喜黑子獲勝！' : '🎉 恭喜白子獲勝！';
        winMessage.classList.remove('hidden');
        currentPlayerSpan.style.display = 'none';
        return;
    }
    
    // 判斷是否平局
    if (checkDraw()) {
        gameActive = false;
        winnerText.innerText = '平局！棋盤已滿。';
        winMessage.classList.remove('hidden');
        currentPlayerSpan.style.display = 'none';
        return;
    }

    // 切換玩家
    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    updateTurnIndicator();
}

// 檢查勝負邏輯
function checkWin(r, c, player) {
    // 檢查四個方向：水平、垂直、左上到右下、左下到右上
    const directions = [
        [ [0, 1], [0, -1] ],   // 橫向
        [ [1, 0], [-1, 0] ],   // 直向
        [ [1, 1], [-1, -1] ],  // 撇 (\)
        [ [1, -1], [-1, 1] ]   // 捺 (/)
    ];

    for (const dir of directions) {
        let count = 1; // 包含剛下的那顆子
        
        for (const [dr, dc] of dir) {
            let nr = r + dr;
            let nc = c + dc;
            // 往同一個方向不斷延伸，如果超出邊界或是遇到不是自己的棋子就停止
            while (
                nr >= 0 && nr < BOARD_SIZE &&
                nc >= 0 && nc < BOARD_SIZE &&
                boardState[nr][nc] === player
            ) {
                count++;
                nr += dr;
                nc += dc;
            }
        }
        
        // 如果該方向連成 5 顆以上，則回傳勝利
        if (count >= 5) {
            return true;
        }
    }
    return false;
}

// 檢查是否平局
function checkDraw() {
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            if (boardState[r][c] === null) return false;
        }
    }
    return true;
}

// 綁定重新開始按鈕
restartBtn.addEventListener('click', initGame);

// 頁面載入完成後執行初始化
initGame();
