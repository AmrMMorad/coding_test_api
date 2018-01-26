# coding_test_api
It is a a small single page application. It uses a simple API which contains two urls and does not accept extra parameters, /instances – this returns a json object with metadata about all instances /instances/id – this returns a json object with metadata for the specific instance with the given id The fake API has been given a 750ms latency.

## Requirements 
For this test, it is required to extend the HTML file into a single page application that does the following:
* When the application loads, it loads data about all the instances from the API and visualizes this data in some way. (e.g: a table with all the data)
* The application must have some mechanism for refreshing the data of only a single record (e.g. A refresh record button)
* The application should show the user some indication that it is refreshing/loading new data

## Code structure
The code structure contains the following:
* HTML file called index.html. This HTML file is used to build the table which will hold all the resource instances and refresh button beside each instance.
* Folder called lib, which contains jquery 1.7 and mockjax (a library used to mock ajax APIs). It also loads a fake API for getting information about a single type of resource - instances.
* Folder called js, which contains javascript file called index.js. This contains the script used in the solution to make Ajax queries to get the resource instances and get specific instance by id. This also contains some functionalities such as disabling a button, filling the HTML table with the data and so on.
* Folder called css, which contains css file called index.css. This contains the styles used for each class in the HTML file.

## Environment
For the environment, we used the following:
* HTML5, this is used in modern web development (https://www.w3schools.com/html/html5_intro.asp).
* Bootstrap, this is used to ease the usage of CSS and used in modern web development (https://www.w3schools.com/bootstrap/). Version 3.2.0 is used instead of latest version to be compatible with the given jquery version.
* Jquery 1.7, this is given with the problem zip folder.
* Mockjax, a library used to mock ajax APIs.

## Testing instructions
Open the index.html file in a browser. We should see HTML page with a paragraph and a loading icon. This is shown as below:
![alt text](https://github.com/AmrMMorad/coding_test_api/blob/master/screenshots/Screenshot%20from%202018-01-26%2019-09-37.png)
After getting the result, a table with the instances will be shown as below:
![alt text](https://github.com/AmrMMorad/coding_test_api/blob/master/screenshots/Screenshot%20from%202018-01-26%2019-09-26.png)
If refresh button is clicked, it is disabled as shown below:
![alt text](https://github.com/AmrMMorad/coding_test_api/blob/master/screenshots/Screenshot%20from%202018-01-26%2019-09-53.png)