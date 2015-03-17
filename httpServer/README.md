The first thing you must do is read the file off the system.

Use fs.readFile to grab the HTML file.

You can then take the data retrieved from the file system and use http.createServer to send that data when requested.