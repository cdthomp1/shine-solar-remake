setTimeout(()=> {
    var reviews = document.getElementsByClassName("romw-list")[0].children
    document.getElementById("reviewsCount").innerHTML = reviews.length
}, 5000)