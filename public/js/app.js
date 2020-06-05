var toggleBtn = document.getElementById('toggleBtn');
var navItems = document.getElementById('nav-items');
var DeviceRes = window.matchMedia('(max-width: 600px)');
toggleBtn.style.display = 'none';

/*   
Responsive NavBar
*/

if (DeviceRes.matches) {
    toggleBtn.style.display = 'block';
    navItems.style.display = 'none';
}

function toggleNav() {

    if (navItems.style.display == 'none') {
        navItems.style.display = 'block';
    }
    else if (navItems.style.display == 'block') {
        navItems.style.display = 'none';
    }

}