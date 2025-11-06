function solution(game_board, table) {
  const n = game_board.length;
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  // BFS로 블록(퍼즐조각 또는 빈칸) 추출
  const bfs = (x, y, board, value) => {
    const q = [[x, y]];
    const blocks = [];
    board[x][y] = 1 - value;

    while (q.length) {
      const [cx, cy] = q.shift();
      blocks.push([cx, cy]);
      for (const [dx, dy] of dirs) {
        const nx = cx + dx, ny = cy + dy;
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === value) {
          board[nx][ny] = 1 - value;
          q.push([nx, ny]);
        }
      }
    }
    return normalize(blocks);
  };

  // 정규화: 가장 작은 좌표를 (0,0)으로 맞추기
  const normalize = (block) => {
    const minX = Math.min(...block.map(b => b[0]));
    const minY = Math.min(...block.map(b => b[1]));
    return block.map(([x, y]) => [x - minX, y - minY]).sort();
  };

  // 회전: 90도 회전 후 다시 정규화
  const rotate = (block) => {
    return normalize(block.map(([x, y]) => [y, -x]));
  };

  const blanks = [];
  const puzzles = [];

  // 빈칸 추출
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] === 0) blanks.push(bfs(i, j, game_board, 0));
    }
  }

  // 퍼즐 조각 추출
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1) puzzles.push(bfs(i, j, table, 1));
    }
  }

  let answer = 0;
  const used = Array(puzzles.length).fill(false);

  for (const blank of blanks) {
    for (let i = 0; i < puzzles.length; i++) {
      if (used[i]) continue;

      let piece = puzzles[i];
      let matched = false;
      for (let r = 0; r < 4; r++) {
        if (compare(blockToStr(blank), blockToStr(piece))) {
          used[i] = true;
          answer += blank.length;
          matched = true;
          break;
        }
        piece = rotate(piece);
      }
      if (matched) break;
    }
  }

  return answer;

  // 문자열 비교 (성능 향상)
  function blockToStr(block) {
    return block.map(([x, y]) => `${x},${y}`).join(';');
  }

  function compare(a, b) {
    return a === b;
  }
}
