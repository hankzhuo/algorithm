// 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

// 示例 1:
  // 输入:
    // 11110
    // 11010
    // 11000
    // 00000

  // 输出: 1

// 示例 2:
  // 输入:
    // 11000
    // 11000
    // 00100
    // 00011

    // 输出: 3
  
/**
 * @param {character[][]} grid
 * @return {number}
 */

var helper = function(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 ||grid[i][j] === '0') return;
  
  grid[i][j] = '0';
  helper(grid, i + 1, j, rows, cols)
  helper(grid, i, j + 1, rows, cols)
  helper(grid, i - 1, j, rows, cols)
  helper(grid, i, j - 1, rows, cols)
}

var numIslands = function(grid) {
    let res = 0;
    const rows = grid.length;
    if (rows <= 0) return 0;
  
    let cols = grid[0].length;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === '1') {
          helper(grid, i, j, rows, cols)
          res++
        }
      }
    }
  
  return res
};

// DFS 深度优先
// 1. 用一个 visited 来记录某个位置是否访问过
// 2. 对于一个位置为 ‘1’，没有访问的，递归从上下左右顺序，将其 visited 变为 true
// 3. 重复 1.2 步骤
// 但是这道题目只是让我们求连通区域的个数，因此我们其实不需要额外的空间去存储visited信息。 注意到上面的过程，我们对于数字为0的其实不会进行操作的，也就是对我们“没用”。 因此对于已经访问的元素， 我们可以将其置为0即可。