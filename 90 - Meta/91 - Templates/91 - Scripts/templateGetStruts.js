async function getNoteStruct(noteTag) {
	let structName;
    let dest;
    let prefix;
	console.log("Getting Struct MD for tag: " + noteTag);
	
	if (noteTag.startsWith('๐ ๏ธ')) {
		structName = "[[9105 - Struct_Tool_Body]]";
		dest = "03 - Content";
		prefix = "";
	} else if (noteTag.startsWith('๐งป')) {
		structName = "[[9106 - Struct_Document_Body]]";
		dest = "03 - Content";
		prefix = "";
	} else if (noteTag.startsWith('๐ก')) {
		structName = "[[9106 - Struct_Document_Body]]";
		dest = "03 - Content";
		prefix = "";
	} else if (noteTag.startsWith('โข๏ธ')) {
		structName = "[[9107 - Struct_Quick_Body]]";
		dest = "05 - Quick Note";
		prefix = "";
	} else if(noteTag.startsWith('๐')) {
		structName = "[[9108 - Struct_Media_Body]]";
		dest = "04 - Media";
		prefix = "";
	} else if (noteTag.startsWith('๐')) {
		structName = "[[9104 - Struct_Secondary_Category_Header]]";
		dest = "02 - Secondary Categories";
		prefix = "02 - ";
	} else if (noteTag.startsWith('๐')) {
		structName = "[[9103 - Struct_Primary_Category_Header]]";
		dest = "01 - Primary Categories";
		prefix = "01 - ";
	} else {
		console.log("You selected an option outside what was expected.");
		console.log("Try again.");
	}

    let structs = {
        dest: dest,
        prefix: prefix,
        struct: structName
    }
    console.log(dest + ": " + prefix + ": " + structName);
	return structs;
}

module.exports = getNoteStruct;