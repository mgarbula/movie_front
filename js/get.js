class Movie {
    constructor(title, director, releaseDate) {
        this.title = title;
        this.director = director;
        this.releaseDate = releaseDate;
    }
}

var list = document.getElementById('list');

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.responseType = 'json';
        
        xhr.onload = () => {
            resolve(xhr.response);
        };
    
        xhr.send();
    }); 
    return promise;  
};

const getData = () => {
    sendHttpRequest('GET', 'http://localhost:8080/api/v1/movie').then(responseData => {
        console.log(responseData[2].title);
        printData(responseData);
    });
};

function printData(data) {
    data.array.forEach(element => {
        let li = document.createElement("li");
        li.innerText = element.title;
        list.appendChild(li);
    });
}

window.onload = function() {
    getData();
}