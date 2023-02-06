//Image link creator - connects to Imgur API and saves link to uploaded image as variable//

const file1 = document.getElementById("img1")
let image_url_1

const file2 = document.getElementById("img2")
let image_url_2


file1.addEventListener("change", ev => {
    const formdata = new FormData()
    formdata.append("image", ev.target.files[0])
    fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
            Authorization: "Client-ID b29092b80a511e1"
        },
        body: formdata
    }).then(data => data.json()).then(data => {
        image_url_1 = data.data.link
    })
})

file2.addEventListener("change", ev => {
    const formdata = new FormData()
    formdata.append("image", ev.target.files[0])
    fetch("https://api.imgur.com/3/image/", {
        method: "post",
        headers: {
            Authorization: "Client-ID b29092b80a511e1"
        },
        body: formdata
    }).then(data => data.json()).then(data => {
        image_url_2 = data.data.link
    })
})