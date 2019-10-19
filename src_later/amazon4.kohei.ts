function getStepsToGoal(grid: (0|1|9)[][]): number {
    const height = grid.length;
    const width = grid.length >= 1 ? grid[0].length : 0;

    const queue = [[0, 0, 0]];

    while (queue.length >= 1) {
        const [y, x, steps] = queue.shift();

        if (y < 0 || y >= height || x < 0 || x >= width) continue;
        if (grid[y][x] === 0) continue;
        if (grid[y][x] === 9) return steps;

        grid[y][x] = 0;

        queue.push([y - 1, x, steps + 1], [y + 1, x, steps + 1], [y, x - 1, steps + 1], [y, x + 1, steps + 1]);
    }
}
