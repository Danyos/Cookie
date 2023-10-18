// setInterval(()=>{
//     let date=new Date()
//     console.log(date.getHours().toString().padStart(2,"0")+":"+date.getMinutes().toString().padStart(2,"0")+":"+date.getSeconds().toString().padStart(2,"0"))
// },1000)


// function User(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }
//
// // Adding a register method to the User prototype
// User.prototype.register = function() {
//     // Code to register the user in the system
//     console.log(`Registered user: ${this.name} ${this.email} (${this.password})`);
// };
// User.prototype.login = function() {
//     // Code to perform login authentication
//     console.log(`Logged in: ${this.email}  ${this.password}`);
// };
// let usersReg=new User("John Doe", "john@example.com", "password123")
//
// console.log(usersReg.register())
// console.log(usersReg.login())


function User(username, password) {
    this.username = username;
    this.password = password;
    this.loggedIn = false;
}

function AuthManager() {
    this.users = [];
}

AuthManager.prototype.register = function (username, password) {
    var newUser = new User(username, password);
    delete newUser.loggedIn
    this.users.push(newUser);
    // console.log("Registered user: " + newUser.username);
    // console.log(this.users)

};

AuthManager.prototype.login = function (login, password) {
    let userInfo = null
        if(getCookie("username")){
            console.log("login exacac")
            return  false
        }
    var loginUser = new User(login, password );

    if (loginUser instanceof User) {

        userInfo = this.users.find(res => res.username === login && res.password === password)
        if (userInfo) {
            setCookie("username",  userInfo.username, 7);

            return userInfo
        }

    } else {
        console.log("mutqy chhajoxvec")
    }
    return false


};
AuthManager.prototype.logout = function () {

    deleteCookie('username')
    return true

}

var authManager = new AuthManager();
authManager.register("john_doe", "password123");
authManager.register("jane_smith", "qwerty");
function login(){
    console.log(authManager.login("john_doe", "password123"))

}
function logout(){
  authManager.logout()

}
// console.log(authManager.logout())



function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    console.log(cookies)
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/js-45-11/js-45-11; domain=localhost";
}

console.log(window.location.hostname)
const username = getCookie("muxi");
console.log("Username: " + username);

