function getMediaType(tp) {
    let mediaTypes = ["#book", "#movie", "#game"];
    let type = tp.system.suggester(mediaTypes, mediaTypes, true, "Select Media Tag");  

    return type;
}

module.exports = getMediaType;