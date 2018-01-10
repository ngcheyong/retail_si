

function togglesidemenu()
{
    
    if(open==5)
    {
        
        openNav();
    }
    else
    {
        
        closeNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
    document.getElementById("icontogglemenu").innerHTML = "&lt;&lt;";
    document.getElementById("main").style.background= 'rgb(' + 86 + ',' + 127 + ',' + 57 + ')';
    open=10;
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

    document.getElementById("icontogglemenu").innerHTML = "&#9776;";
    document.getElementById("main").style.background= 'rgb(' + 172 + ',' + 255 + ',' + 114 + ')';
    open=5;

}
function logoutapp(){
    window.localStorage.setItem("username", "");
    window.localStorage.setItem("password", "");
    window.localStorage.setItem("nama", "");
    window.localStorage.setItem("kodestand", "");
    window.localStorage.setItem("kodedapur", "");
    window.localStorage.setItem("hakakses", "");
    window.localStorage.setItem("macaddress", "");
    
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('nama');
    sessionStorage.removeItem('kodestand');
    sessionStorage.removeItem('kodedapur');
    sessionStorage.removeItem('hakakses');
    sessionStorage.removeItem('macaddress');
    window.location.replace("login.html");
}

