// Name: buildNote
// Description: Performs the actual concatenation of our discrete header, body and 
// footer note elements then handles the creation of the note itself.
async function buildNote(title, struct, tag, tp) {
	console.log("Building Note");

	// Primary Note Elements
	let metadata = await setMetadata(tag, tp) + "\n";
	let pageTitle = "# " + title + " \n";
	let note = "";

	if (!(await isCategory(struct))) {
		let body = await tp.file.include(struct) + "\n";
		let resources = await tp.file.include("[[9102 - Struct_Resources]]") + "\n";

		if(!isQuickNote(struct))  {
			let header = await tp.file.include("[[9101 - Struct_Header]]") + "\n";
			note = metadata + header + pageTitle + body + resources;
		}
		else {
			note = metadata + pageTitle + body + resources;
		}

	} else {
		if(struct.toLowerCase().includes('primary')) {
            let primaryCatHeader = await tp.file.include("[[9103 - Struct_Primary_Category_Header]]") + "\n";
            let primaryCatBody = await tp.file.include("[[9110 - Struct_Primary_Category_Body]]")
			note = metadata + primaryCatHeader + pageTitle + "---\n" + primaryCatBody;
		}
		else if(struct.toLowerCase().includes('secondary')) {
            let secondaryCatHeader = await tp.file.include("[[9104 - Struct_Secondary_Category_Header]]") + "\n";
            let secondaryCatBody = await tp.file.include("[[9109 - Struct_Secondary_Category_Body]]")
			note = metadata + secondaryCatHeader + pageTitle + "---\n" + secondaryCatBody;
		}
	}

    return note;
}

function isQuickNote(struct) {
	if(struct.toLowerCase().includes("struct_quick_body")) {
		return true;
	}
	return false;
}
// Name: isCategory
// Description: Determines whether or not the struct is related to a category
// by its name containing "category"
// Returns: Boolean
async function isCategory(struct) {
	// dont build out template elements, just reference
	if (struct.toLowerCase().includes('category')) {
		console.log("yes");
		return true;
	} 
	console.log("no");
	return false;
}

// Name: setMetdata
// Description: References templater file fields to build and assign the metdata
// element which will prefix all content files and permit dataview quering
// Returns: String
async function setMetadata(inTag, tp) {
	var metadata = "---\ncreation date: " + tp.file.creation_date('YYYY-MM-DD HH:mm') + "\nmodified date: " + tp.file.creation_date('YYYY-MM-DD HH:mm') + "\n---\ntags: #" + inTag;
	
	return metadata;
}

module.exports = buildNote;