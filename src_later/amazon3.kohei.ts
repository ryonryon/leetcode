function sortJunctionBoxes(junctionBoxes: string[]) {
    const sorted = [...junctionBoxes].sort((a, b) => {
        const [, ...aVersionParts] = a.split(" ");
        const [, ...bVersionParts] = b.split(" ");
        const isANewGeneration = aVersionParts.every(versionPart => /^[0-9]+$/.test(versionPart));
        const isBNewGeneration = aVersionParts.every(versionPart => /^[0-9]+$/.test(versionPart));

        if (isANewGeneration && !isBNewGeneration) return 1;
        if (!isANewGeneration && isBNewGeneration) return -1;
        
        const aVersion = aVersionParts.join("");
            const bVersion = bVersionParts.join("");
        
        if (!isANewGeneration && !isBNewGeneration) {
            if (aVersion === bVersion) return 0;
            if (aVersion < bVersion) return -1;

            return 1;
        }
        
        return parseInt(aVersion) - parseInt(bVersion);
    });

    return sorted;
}
