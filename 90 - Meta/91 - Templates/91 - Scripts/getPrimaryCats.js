function getPrimaryCats(tp) {
    let files = app.vault.getAbstractFileByPath("01 - Primary Categories");
    let primaryFiles = [];

    files.children.forEach(child => {
        primaryFiles.push(child.basename);
    })

    let primary = tp.system.suggester(primaryFiles, primaryFiles, true, "Select Primary Category");
    return primary;
}

module.exports = getPrimaryCats;