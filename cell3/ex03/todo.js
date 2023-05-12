function addItem() {
	let toDo = document.getElementById('objective').value;
	if (toDo.length > 0) {
		let list = new Date();
		/* `'obj' + list.getTime()` is concatenating the string `'obj'` with
		the result of calling the `getTime()` method on a new `Date` object,
		which returns the number of milliseconds since January 1, 1970. This
		creates a unique identifier for each new cookie that is set,
		ensuring that each cookie has a distinct name. */
		if (confirm("¿Añadir a la lista?"))
		{
			setCookie('obj' + list.getTime(), encodeURIComponent(toDo));
			addListItem('obj' + list.getTime(), toDo);
		}
		/* `document.getElementById('objective').value = '';` is setting the value of the
		input field with the ID "objective" to an empty string. This clears the input
		field after the user has submitted a new item to the to-do list. */
		document.getElementById('objective').value = '';
	}
}

/* `document.cookie = sName + '=' + escape(sValue);` is setting a cookie in the
user's browser. The `sName` parameter is the name of the cookie, and `sValue` is
the value of the cookie. The `escape()` function is used to encode the value of
the cookie so that it can be safely stored in the cookie. */
/* `escape()` is a function used to encode a
	string so that it can be safely stored in a
	cookie. It replaces certain characters with
	their hexadecimal escape sequences. This is
	necessary because some characters, such as
	semicolons and commas, have special meanings in
	cookies and can cause problems if they are not
	properly encoded. */
function setCookie(sName, sValue) {
	document.cookie = sName + '=' + escape(sValue);
	let date = new Date();
	/* Setting the expiration date of the cookie to one year from the current date. The
	`setMonth()` method sets the month of the date object, and `getYear()` method
	returns the year of the date object. By adding 1 to the year, it sets the
	expiration date to one year from the current date. */
	date.setMonth(date.getYear()+1);
	/* `document.cookie += ('; expires=' + date.toUTCString());` is appending the
	expiration date of the cookie to the existing cookie string. The
	`date.toUTCString()` method returns a string representation of the date object
	in UTC time zone format, which is then concatenated with the string `';
	expires='`. This sets the expiration date of the cookie to one year from the
	current date. */
	document.cookie += ('; expires=' + date.toUTCString()); 
}

function unsetCookie(sName) {
	/* `document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;'` is
	setting the value of the cookie with the name `sName` to an empty string and
	setting the expiration date of the cookie to December 31, 1999 at 23:59:59 GMT.
	This effectively deletes the cookie from the user's browser. */
	document.cookie = sName + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}

function checkObjectives() {
	let list = document.getElementById('list');
	let cookies = document.cookie.split('; ');
	let i = 0;
	
	cookies.sort();
	/* This code block is iterating through an array of cookies stored in the user's
	browser and checking if each cookie's name starts with the string "obj". If a
	cookie's name starts with "obj", it calls the `addListItem()` function with the
	cookie's name and value as arguments, which adds a new item to the to-do list
	on the webpage. The `decodeURI()` function is used to decode the value of the
	cookie, which was encoded using the `escape()` function when it was set. The
	`while` loop continues until it has checked all of the cookies in the array. */
	while (i < cookies.length)
	{
		let elem = cookies[i].split('=');
		if (elem[0].indexOf('obj') === 0) 
			addListItem(elem[0], decodeURI(decodeURI(elem[1])));
		i++;
	}
}

function addListItem (id, toDo) {
	let toDoList = document.getElementById('list');
	toDoList.innerHTML += '<li id='+id+'>'+toDo+' <button onclick="removeListItem(\''+id+'\')">X</button></li>';
}

function removeListItem (id) {
	if (confirm("¿Estás seguro de que quieres borrarlo?"))
	{
		let elem = document.getElementById(id);
		elem.style.display = "none";
		unsetCookie(id);
	}
}
