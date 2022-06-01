const postBtn = document.getElementById('post-btn');

const title = document.getElementById('title');
const director = document.getElementById('director');
const releaseDate = document.getElementById('releaseDate');

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.responseType = 'json';
        
        if(data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        
        xhr.onload = () => {
            resolve(xhr.response);
        };
    
        xhr.send(JSON.stringify(data));
    }); 
    return promise;  
};

/* const getData = () => {
    sendHttpRequest('GET', 'http://localhost:8080/api/v1/movie').then(responseData => {
        console.log(responseData);
    });
}; */

function deleteValues() {
    title.value = "";
    director.value = "";
    releaseDate.value = "";
}

const sendData = () => {
    sendHttpRequest('POST', 'http://localhost:8080/api/v1/movie', {
        title: title.value,
        director: director.value,
        releaseDate: releaseDate.value,
        //foreignKey: '3'
    }).then(responseData => {
        console.log(responseData);
    });
    deleteValues();
};

postBtn.addEventListener('click', sendData);