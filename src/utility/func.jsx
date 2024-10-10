import axios from "axios";
export  function CreateArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
        newArr.push(i);
    }
    return newArr;
}

export const getData=()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => {
            console.log(response.data);
        })
       .catch(error => {
            console.log(error);
        });
}

export const sendData=()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
       .then(response => {
            console.log(response);
        })
       .catch(error => {
            console.log(error);
        });
}