function orderedJunctionBoxes(numberOfBoxes: number, boxList: string[]): string[] {
    while (true) {

    }
}

function isNewVersion(str: string): boolean {
    const juncBox = str.split(" ")
    for (let i = 1; i < juncBox.length - 1; i++) {
        const maybeNumber = Number(juncBox[i])
        if (isNaN(maybeNumber)) {
        
        }
    }

    return true
}


describe("amazon3", () => {
    test("#1", () => {
      expect(orderedJunctionBoxes(3, 3, [[1, 0, 0], [1, 0, 0], [1, 9, 1]])).toBe(3);
    });
  });