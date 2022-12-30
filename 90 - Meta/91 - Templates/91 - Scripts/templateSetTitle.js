//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Functions /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// Name: getTitle
// Description: Ensure a valid title is supplied, or prompt user for title.
// Rename the created file from "Untitled" to what they've supplied.
// Supports both creating notes from "new note" or "ctrl + click"
async function setTitle(title, tp) {
	if (await validateTitle(title)) 
	{
		console.log(`Title: "${title}" is valid`);
		await tp.file.rename(title);
		return title;
	}
	else 
	{
		console.log("The supplied title was invalid.");
		title = await tp.system.prompt("Title of New Note");
		return setTitle(title, tp);
	}
}

// Name: validateTitle
// Description: Checks supplied string (title) against 'undefined' type , null 
// value, empty value and when the type is a string - we validate if it follows 
// the default naming scheme of 'Untitled #' - rejects assignment of any of these 
// cases
// Return: Boolean
async function validateTitle(noteTitle) {
	// if nothing was supplied, try again
    console.log(typeof noteTitle);
	if (typeof noteTitle === 'undefined' || (typeof noteTitle === 'string' && noteTitle.includes('Untitled')) || noteTitle === null || noteTitle === "") 
	{
		//console.log(noteTitle.includes('Untitled'))
		return false;
	} 
	else 
	{
		return true;
	}
}

module.exports = setTitle