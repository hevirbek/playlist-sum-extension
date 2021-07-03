// console.log("It is working!")

var list = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer")
var where = document.getElementsByClassName("style-scope ytd-playlist-sidebar-primary-info-renderer")

// console.log(where)

var hours = 0
var minutes = 0
var seconds = 0

var result = ""

var i = 0
for (let item of list) {
    if (i % 2 == 1) {
        let txt = item.textContent
        let sp = txt.split(':')
        if (sp.length == 2) {
            let m = parseInt(sp[0])
            let s = parseInt(sp[1])
            minutes += m
            seconds += s
        } else {
            let h = parseInt(sp[0])
            let m = parseInt(sp[1])
            let s = parseInt(sp[2])
            hours += h
            minutes += m
            seconds += s
        }
    }
    i++
}

let minfromsec = seconds / 60
let b = parseInt(minfromsec)
minutes += b
seconds = seconds % 60

let hourfrommin = minutes / 60
b = parseInt(hourfrommin)
hours += b
minutes = minutes % 60

console.log(hours, minutes, seconds)

if (seconds < 10) {
    seconds = "0" + seconds.toString()
} else {
    seconds = seconds.toString()
}

if (minutes < 10) {
    minutes = "0" + minutes.toString()
} else {
    minutes = minutes.toString()
}

if (hours == 0) {
    result = "Toplam Süre: " + minutes + ":" + seconds
} else {
    if (hours < 10) {
        hours = "0" + hours.toString()
    } else {
        hours = hours.toString()
    }

    result = "Toplam Süre: " + hours + ":" + minutes + ":" + seconds
}

// console.log(hours, minutes, seconds)

var node = document.createElement("P")
var textnode = document.createTextNode(result)
node.appendChild(textnode)

where[5].appendChild(node)