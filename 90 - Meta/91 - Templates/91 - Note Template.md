<%*
let title = tp.file.title;

// Present selection of Search Tags to user
let tag = await tp.system.suggester(["🛠️ (Tool)", "🧻 (Documentation)", "💡 (Idea)", "📚 (Media)", "☢️ (Quick Note)", "💛 (Secondary Category)","💚 (Primary Category)"], ["🛠️","🧻","💡","📚","☢️","💛","💚"], true)

// Validate title is not undefined or untitled, then set title
title = await tp.user.templateSetTitle(title, tp)

// Get the Struct associated with the Search Tag selected
structs = await tp.user.templateGetStruts(tag, tp)

// move file to appropriate corresponding folder
await tp.file.move(structs.dest + "/" + structs.prefix + title);

//build the note
let note = await tp.user.templateBuildNote(title, structs.struct, tag, tp)
%>

<%* tR = `${note}` %>