export default {  //something else in program can input this file and call this function
    getRandomWYR() { //returns a promise object
        return fetch('/wyr').then(response => {
            return response.json()  // ask to get the response in json
        })
    }
}
//makes fetch request
//returns promise that fetch collects
//wyr is URL we chose when setting up API server. In server index.js
//fetch returns promise that says once it gets the data back, it will let you know what it is

