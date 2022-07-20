function fetchData() {
    const requestObj = new XMLHttpRequest()
    requestObj.onreadystatechange = function () {
        //console.log(requestObj.readyState)
        if (requestObj.readyState === 4 && requestObj.status === 200) {
            const jsonPosts = requestObj.responseText
            const jsPosts = JSON.parse(jsonPosts)
            console.log(jsPosts)
        }
    }
    requestObj.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    requestObj.send()
}

fetchData()