var localUser = "rpadrell";
var localChat = "awedd7dwfwq"
var data = {};
function pushServer(callback=null){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        if(callback){
            callback(true)
        }
    }
    };

    req.open("PUT", "https://api.jsonbin.io/v3/b/" + binID, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", masterKey);
    req.send(JSON.stringify(data));
}
function getServer(callback=null){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        data = JSON.parse(req.responseText);
        if(callback){
            callback(true)
        }
    }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/" + binID + "/?meta=false", true);
    req.setRequestHeader("X-Master-Key", masterKey);
    req.send();
}
function send(text){
    let ob = {}
    ob.content = text;
    let d = new Date()
    ob.time = d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    ob.user = localUser;
    data.chats[localChat].messages.push(ob);
    pushServer()
}