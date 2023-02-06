//I will eventually get to creating an API for this, but due to time restraints I'm storing everything in local storage for now!//

//Current blog posts to start of with//

console.log(localStorage.getItem("defaultDark"))

const initialBlogs = `[
    {
        "name": "My First Hike - Box Hill 2020",
        "author": "Sandra Sookramanien",
        "post": "I'll be honest, I had a ball during the first COVID lockdown. Medical school didn't quite lend itself to remote teaching, and hospitals didn't want the walking vectors known as medical students on site. All my exams bar one were cancelled, so I was left with very little to do but relax in the spring sunshine with my family and cat. My sister even came down from Nottingham to stay with us, as she was in the same idle position as I was. \\n\\nAs great as it was, we eventually had to think of ways to entertain ourselves beyond Mario Kart and afternoon siestas. A quick google search of popular outdoor activities led us to finding out about Box Hill in Surrey. We decided on a day to visit, and my sister assured us that she had found an easy walking route with great views and nearby parking. The rest of us had never been hiking before, so the easier the better. \\n\\nWe rock up on a clear May morning after an hour of driving. Unfortunately, it looked like half of Surrey rocked up with us. The queues to the carpark extended back down the hills, with flustered staff funnelling cars along to try and prevent a complete stand still. \\n\\nWith no clue what to do from here, my mum aimlessly drove downhill until we found ourselves in Box Hill village. It was much quieter here, and we were able to find a parking spot on a residential road. It seemed we were lucky too – while it wasn’t the route we’d initially planned, it turns out we were parked along another walking route that lead to Box Hill view point! \\n\\nWe gathered our stuff and set out, following the typed directions on my sister’s phone. The first half-hour was fun, though it didn’t seem we were any closer to the top. That changed very quickly when we reached a set of steps that may as well have been a ladder. At least we knew we were going the right way. \\n\\nSeasoned hikers meandered past us as we took a pit stop every 15 steps or so. I’m pretty sure I was awry step away from throwing up my breakfast. We managed to reach a plateau after what felt like hours and needed about the same amount of time to catch our breaths. That pretty much set the tone for the rest of the walk. \\n\\nThe views were undeniably stunning and were much welcomed after each bout of exertion. We went through dense forests, open plains and even got to see the bluebells in bloom. Two hours in however, and we still weren’t at the viewing point at the top. My dad demanded my sister to tell him how much longer we had left. \\n\\nWe were only halfway. My dad immediately wanted to turn back, but at this point it would take us the same amount of time to just complete the loop. His next idea was to just leave him there and pick him up by car regardless of how long it took us. The melodrama after only a couple of hours is funny to look back at now that we’ve done our fair share of hikes, but at the time I could very much sympathise. \\n\\nWe did eventually reach the viewing point and got some great photos. And after 5 long hours we found our way back to the car. It turns out we, as a family who wouldn’t hesitate to get a lift to the corner shops, had done the most challenging hike in Box Hill. It did take us an hour longer than the guide stated it should’ve, but I was happy with the fact we made it back in one piece. \\n\\nAnd while at the time it was the most exhausting thing I’d ever done, I really loved it. We started making hikes a regular part of our week. We redid this same hike a couple of times since, and each time was easier than the last.",
        "image_link_1": "https://i.imgur.com/AyWY80o.jpg",
        "image_link_2": "https://i.imgur.com/uOhxuxZ.jpg",
        "time": "14:58",
        "date": "3/11/2023"
    },

    {
        "name": "North Snowdonia",
        "author": "Sandra Sookramanien",
        "post": "When I went to visit my sister in Warrington, I wasn’t expecting to go on one of my favourite hikes of all time! We had planned for time to go exploring, but waking up late after a night of games meant we couldn’t go far. \\n\\nLuckily, she only lived around an hour from the Welsh border. I whacked out my AllTrails app and found a few trails we could make it to, but then decided to change the destination enroute to one that had great reviews. And I’m so glad I did!\\n\\nWe ended up driving a bit longer than intended and found ourselves in the Glyderau mountain range in North Snowdonia. Up until this point, I had never actually been to any of the mountains in the UK at all, usually sticking to the forest-y trails of Surrey and Sussex. \\n\\nWe clambered for a spot in the tiny car park and made our way to the visitor’s center. There we found some nicely marked out trails and made our way.\\n\\nThe views were genuinely stunning, possibly the best I’ve seen so far. I had just been to the Wye Valley the week prior with my boyfriend, and honestly thought that I had reached the peak (pun intended) of UK sight-seeing. For once, I very happy to be wrong. \\n\\nWe followed our way around the tourist trail to where some paths diverged off up to the mountain peak. The more daring of my family wanted to get as high as possible, but we definitely weren’t equipped for that. We agreed to go as high as was safe without any climbing gear then make our way back down.\\n\\nThing is, the higher we went, the path became less of a path, and more of a random scattering of rocks. Inclines changed sharply and we ended up even needing to go on all-fours at some point to get across some especially tricky bits. My balance has always been bad, but I’d never been so acutely aware of it as when I was clinging for dear life to a rock face. And we weren’t even that high up.\\n\\nWith that, we decided to make our way back down, as going any higher would have probably meant me staying there for good. \\n\\nAs much as I had fun, I think I’ll enjoy mountains from ground level from now on.",
        "image_link_1": "https://i.imgur.com/WtXWeQY.jpg",
        "image_link_2": "https://i.imgur.com/6y47kWt.jpg",
        "time": "16:22",
        "date": "16/11/2023"
    },

    {
        "name": "Mushroom Foraging",
        "author": "Sandra Sookramanien",
        "post": "I only started getting into mushroom foraging in the autumn of 2022. My mum, who grew up in Poland, used to forage regularly as a child. On a muddy hike near the Chiltern’s AONB, we came across a path completely teeming with mushrooms, and my mum was ecstatic trying to identify them. \\n\\nWe decided then to soon go on a dedicated mushroom hunt. There was a certain family of mushrooms (boletes) that she was sure she could identify and were safe to eat. I’ve always hated eating mushrooms, but I was more than happy to try and find them! \\n\\nA quick google search revealed that these typically grow in more sparse woodland, particularly around beech and oak trees. We found a few forests that met the criteria within 30 minutes of us, and started hunting. We were after the prized ‘Penny Bun’ bolete (Cep) mushroom – this was the holy grail, according to my mum. \\n\\nOur first foray wasn’t too exciting. We found a few edible mushrooms, the most common of which being the ‘red cracking bolete’. We weren’t aware at the time that these mushrooms were particularly slimy when cooked… \\n\\nDespite the subsequent snot-like pasta sauce, we couldn’t wait to go mushroom hunting again. And that we did. Almost every week throughout September and October saw us in a different forest, ambling slowly through the woods with our eyes glued to the ground. I downloaded a mushroom identification app. I started dreaming about mushrooms regularly. I even kept trying to eat them, hoping my tastebuds had changed overnight – to no avail. \\n\\nAlthough persistent, after 2 months we still hadn’t found any particularly noteworthy mushrooms. Until the day we stopped looking! \\n\\nI had a free afternoon and invited my mum for an afternoon walk in Surrey that I’d done many times before. Towards the end, we decided to stray off-route a bit to extend the walk. We ended up in a small forest that I’d never been to before. And it was bursting to the brim with mushrooms. Lots of them were poisonous, like the bright red Fly Agaric, but there were edible ones too – many of them boletes. \\n\\nOn closer inspection, they weren’t Penny Buns like we were hoping, but they were a great second best – the ‘Bay’ bolete. You can see in the photo how plump and healthy they were. We had no equipment on us other than a small plastic bag I had in my jacket pocket. And we started squeezing in as many mushrooms as we could into said tiny bag. We stayed for 2 hours longer than planned, coming home with an overflowing bag of mushrooms.\\n\\nSince then this has been our favourite mushroom-hunting location. We went there almost weekly until the end of the mushroom season, and plan to be back as soon as September hits again. We definitely have enough dried mushrooms to last us until then!",
        "image_link_1": "https://i.imgur.com/45QLQXn.jpg",
        "image_link_2": "https://i.imgur.com/kgOV5LD.jpg",
        "time": "19:01",
        "date": "14/12/2023"
    }
]`

//localStorage.clear(); // - Uncomment if editing above code//

//check to see if current blogs already stored//

if (localStorage.getItem("blog_posts") === null) {
    window.localStorage.setItem("blog_posts", initialBlogs)
}

//Save current blog data as variable from local storage//

let blogData = JSON.parse(window.localStorage.getItem("blog_posts"))


//HOME PAGE//

//Fill out recent blog posts based on fields above//

function recentBlogs() {


    const postTitle1 = blogData[blogData.length-1].name
    const postAuth1 = blogData[blogData.length-1].author
    const postDate1 = blogData[blogData.length-1].date
    const postTime1 = blogData[blogData.length-1].time
    const postText1 = blogData[blogData.length-1].post
    const postImg1_1 = blogData[blogData.length-1].image_link_1

    const postTitle2 = blogData[blogData.length-2].name
    const postAuth2 = blogData[blogData.length-2].author
    const postDate2 = blogData[blogData.length-2].date
    const postTime2 = blogData[blogData.length-2].time
    const postText2 = blogData[blogData.length-2].post
    const postImg2_1 = blogData[blogData.length-2].image_link_1

    const postTitle3 = blogData[blogData.length-3].name
    const postAuth3 = blogData[blogData.length-3].author
    const postDate3 = blogData[blogData.length-3].date
    const postTime3 = blogData[blogData.length-3].time
    const postText3 = blogData[blogData.length-3].post
    const postImg3_1 = blogData[blogData.length-3].image_link_1


    document.getElementById('recent_1_img').innerHTML = `<img src="${postImg1_1}">`
    document.getElementById('data_1').innerHTML = `<h2>${postTitle1}</h2><h3>By: ${postAuth1}</h3><h5>${postDate1}, ${postTime1}</h5>`
    document.getElementById('post_1').innerHTML = `<p>${postText1}</p>`

    document.getElementById('recent_2_img').innerHTML = `<img src="${postImg2_1}">`
    document.getElementById('data_2').innerHTML = `<h2>${postTitle2}</h2><h3>By: ${postAuth2}</h3><h5>${postDate2}, ${postTime2}</h5>`
    document.getElementById('post_2').innerHTML = `<p>${postText2}</p>`

    document.getElementById('recent_3_img').innerHTML = `<img src="${postImg3_1}">`
    document.getElementById('data_3').innerHTML = `<h2>${postTitle3}</h2><h3>By: ${postAuth3}</h3><h5>${postDate3}, ${postTime3}</h5>`
    document.getElementById('post_3').innerHTML = `<p>${postText3}</p>`
}

//BLOG PAGE//

//Fill out blog post holder with latest blog post on load//

//variable to hold a number used to index blogs//

let n 


function reloadBlog() {
    console.log(localStorage.getItem("n"))

    if (localStorage.getItem("n") != null) {
        n = localStorage.getItem("n")
    } else {
        n = 1
    }

    localStorage.removeItem("n")

    const postTitle1 = blogData[blogData.length-n].name
    const postAuth1 = blogData[blogData.length-n].author
    const postDate1 = blogData[blogData.length-n].date
    const postTime1 = blogData[blogData.length-n].time
    const postText1 = blogData[blogData.length-n].post
    const postImg1_1 = blogData[blogData.length-n].image_link_1
    const postImg1_2 = blogData[blogData.length-n].image_link_2

    document.getElementById('blog_data').innerHTML = `<h1>${postTitle1}</h1><h3>By: ${postAuth1}</h3><h5>${postDate1}, ${postTime1}</h5>`
    document.getElementById('blog_text').innerHTML = `<p>${postText1}</p>`
    document.getElementById('image_1').innerHTML = `<img src="${postImg1_1}">`
    document.getElementById('image_2').innerHTML = `<img src="${postImg1_2}">`

}

//Scroll through blog post list//

function blogRight() {
    if (n < blogData.length) {
        n++
    }

    const postTitle = blogData[blogData.length-n].name
    const postAuth = blogData[blogData.length-n].author
    const postDate = blogData[blogData.length-n].date
    const postTime = blogData[blogData.length-n].time
    const postText = blogData[blogData.length-n].post
    const postImg1 = blogData[blogData.length-n].image_link_1
    const postImg2 = blogData[blogData.length-n].image_link_2

    document.getElementById('blog_data').innerHTML = `<h1>${postTitle}</h1><h3>By: ${postAuth}</h3><h5>${postDate}, ${postTime}</h5>`
    document.getElementById('blog_text').innerHTML = `<p>${postText}</p>`
    document.getElementById('image_1').innerHTML = `<img src="${postImg1}">`
    document.getElementById('image_2').innerHTML = `<img src="${postImg2}">`

}

function blogLeft() {
    if (n > 1) {
        n--
    }

    const postTitle = blogData[blogData.length-n].name
    const postAuth = blogData[blogData.length-n].author
    const postDate = blogData[blogData.length-n].date
    const postTime = blogData[blogData.length-n].time
    const postText = blogData[blogData.length-n].post
    const postImg1 = blogData[blogData.length-n].image_link_1
    const postImg2 = blogData[blogData.length-n].image_link_2

    document.getElementById('blog_data').innerHTML = `<h1>${postTitle}</h1><h3>By: ${postAuth}</h3><h5>${postDate}, ${postTime}</h5>`
    document.getElementById('blog_text').innerHTML = `<p>${postText}</p>`
    document.getElementById('image_1').innerHTML = `<img src="${postImg1}">`
    document.getElementById('image_2').innerHTML = `<img src="${postImg2}">`

}


//Upload new blog post//

//Time and date stamp//
let currentTime
let currentDate

function getTime() {

    const rightNow = new Date();
    currentTime = `${rightNow.getHours()}:${rightNow.getMinutes()}`

}

function getDate() {
    const rightNow = new Date();
    currentDate = `${rightNow.getDate()}/${rightNow.getMonth()+1}/${rightNow.getFullYear()}`
}



// function checkDefault() {
//     console.log(typeof document.getElementById("blog_title").value)
//     console.log(typeof document.getElementById("full_name").value)
//     console.log(typeof document.getElementById("form_text").value)
//     console.log(typeof document.getElementById("img1").value)
// }


function uploadBlog() {
    const newName = document.getElementById("blog_title").value
    const newAuthor = document.getElementById("full_name").value
    const newPost = document.getElementById("form_text").value
    const imgCheck1 = document.getElementById("img1").value
    const imgCheck2 = document.getElementById("img2").value
    const newLink1 = image_url_1;
    const newLink2 = image_url_2;
    getTime()
    getDate()

    if (newName == "" || newAuthor == "" || newPost == "" || imgCheck1 == "" || imgCheck2 == "") {
        alert('Please complete all fields')
    } else {
        blogData.push({
            "name": newName,
            "author": newAuthor,
            "post": newPost,
            "image_link_1": newLink1,
            "image_link_2": newLink2,
            "time": currentTime,
            "date": currentDate
        })

        localStorage.clear()
        window.localStorage.setItem("blog_posts", JSON.stringify(blogData))
        alert('Post successful!')
        reloadBlog()
        document.getElementById("blog_title").value = ""
        document.getElementById("full_name").value = ""
        document.getElementById("form_text").value = ""
        document.getElementById("img1").value = "";
        document.getElementById("img2").value = "";
    }

}


//DARK MODE//


let toggle = document.getElementById('toggle');
let body = document.body;

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark');
        window.localStorage.setItem("defaultDark", true)
    } else {
        body.classList.remove('dark');
        window.localStorage.removeItem("defaultDark")
    }
    console.log(localStorage.getItem("defaultDark"))
});

//function to store if in dark or light mode to carry across to other pages//
let darkMode

function makeDark() {
    darkMode = window.localStorage.getItem("defaultDark")
    if (darkMode) {
        body.classList.add('dark');
        document.getElementById("toggle").checked = true
    } else {
        body.classList.remove('dark');
        document.getElementById("toggle").checked = false
    }
}



//Function to set local storage to default - will have first 3 blogs only//

function clearStorage() {

    localStorage.clear()
    window.localStorage.setItem("blog_posts", initialBlogs)
    blogData = JSON.parse(window.localStorage.getItem("blog_posts"))
    reloadBlog()
}



//functions to store which blog post to jump to on blog page from index page//

function goOne() {
    localStorage.setItem("n", 1)
}

function goTwo() {
    localStorage.setItem("n", 2)
}

function goThree() {
    localStorage.setItem("n", 3)
}









