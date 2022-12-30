function getSecondaryCats(tp) {
    let files = app.vault.getAbstractFileByPath("02 - Secondary Categories");
    let secondaryFiles = [];

    files.children.forEach(child => {
        secondaryFiles.push(child.basename);
    })

    let secondary = tp.system.suggester(secondaryFiles, secondaryFiles, true, "Select Secondary Category");
    return secondary;
}

module.exports = getSecondaryCats;