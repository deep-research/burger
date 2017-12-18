# burger

This is a full stack food ordering application with persistant data storage.

* You can order a burger with a custom name and then eat it when you're ready.
* The user input is validated, and an error message is displayed if the data is invalid.
* The burgers can also be deleted when you are finished eating.

### Technologies
* Node.JS
* Express
* Handlebars
* MYSQL Server
* Heroku

### Prerequisites

* The project can be viewed on the following website:  
https://order-a-burger.herokuapp.com/
* Or to install the program you will need the following:
  * A command-line interpreter.
  * An updated Node.js installation.
  * An updated MySQL Server installation.

### Installation

* Download the application as a ZIP file or with the `git clone https://github.com/deep-research/burger` command in a Git command line such as Git Bash.
* The new directory will be called `burger`. Extracting the file may be necessary.
* Change directory to `burger` in a command-line interpreter.
* Run the `npm install` command to prepare the necessary NPM packages.
* Make sure that a database server instance of MySQL Server is running.
* Run the `burger\db\schema.sql` script in MySQL Server to create the database and an empty table.
* Optional: Run the `burger\db\seeds.sql` script in MySQL Server to populate the `burgers` table.
* Make sure the database credentials in the `config\connection.js` file (lines 11 to 15) are correct for your system.
    * Your password can be saved as an environmental variable and referenced as `process.env.YOUR_VARIABLE_NAME`, or typed explicitly.
* Entering `node server.js` into your command line will start the server if you are in the `burger` directory.
* Go to http://localhost:3000 in a web browser of your choice when your server on. This will run the web page locally.