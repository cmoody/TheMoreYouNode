Remember to add this to the top of your file
#!/usr/bin/env node

Make sure to change the main file for your application to be an executable
chmod +x localeur.js

Run the application in the current directory.
./localeur.js <search term>
Ex. ./localeur.js hotels

This is where I messed up.  I kept trying to install by name but it gets the name from the package.json
Remember sudo is to be able to install as admin.  This might differ on a Windows machine.

Also note that this installs the files into another directory.  So if you make updates in your current projects code you will have to rerun the global install.

sudo npm install -g
localeur hotels