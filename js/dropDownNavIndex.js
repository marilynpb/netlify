// Function to toggle the dropdown menu when clicking the dropdown toggle button
function toggleDropdown(dropdownToggle, dropdown, logo, navigator, navLinks, links) {
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default behavior of the event

        // Logs a message depending on which dropdown toggle button was clicked
        console.log(dropdownToggle.id === 'navbarDropdown-services' ? 'Click en services' : 'Click en company');

        const dropdownStyle = window.getComputedStyle(dropdown);

        // If the services dropdown toggle button was clicked, hide the company dropdown menu and set styles
        if(dropdownToggle.id === 'navbarDropdown-services'){
            dropdownCompany.style.display = 'none'
            setStyle()
        }
        // If the company dropdown toggle button was clicked, hide the services dropdown menu and set styles
        else{
            dropdownServices.style.display = 'none'
            setStyle()
        }

        // Function to set the styles of the dropdown menu and navigation links
        function setStyle(){
            if (dropdownStyle.display === 'none') {
                dropdown.style.display = 'block';
                navigator.style.backgroundColor = '#FFFFFF';
                navLinks.forEach(link => {
                    link.style.color = '#343D3F';
                    link.style.opacity = '0.5';
                    logo.src = 'img/MainLogo/mainLogoBlack.png';
                    imgDropDownCompany.src = 'img/Control/downArrow.png'
                    imgDropDownServices.src = 'img/Control/downArrow.png'
                });
                for (let i = 0; i < links.length; i++) {
                    links[i].style.opacity = '1';
                    links[i].style.fontWeight = 'bold';
                }
            } else {
                dropdown.style.display = 'none';
                navigator.style.backgroundColor = 'transparent';
                navLinks.forEach(link => {
                    link.style.color = '#FFFFFF';
                    link.style.opacity = '1';
                    logo.src = 'img/MainLogo/mainLogo.png';
                    imgDropDownServices.src = 'img/Control/downArrowWhite.png'
                    imgDropDownCompany.src = 'img/Control/downArrowWhite.png'
                });
                for (let i = 0; i < links.length; i++) {
                    links[i].style.opacity = '1';
                    links[i].style.fontWeight = 'lighter';
                }
            }        
        }
    });
}

// Get elements for the company dropdown menu
const dropdownToggleCompany = document.getElementById('navbarDropdown-company');
const dropdownCompany = document.getElementById('dropdown-company');
const logoCompany = document.getElementById('imgLogo');
const navigator = document.querySelector('header');
const navLinksCompany = document.querySelectorAll('.nav-link');
const company = document.getElementsByClassName('link-company');
const imgDropDownCompany = document.getElementById('imgDropDownCompany')

// Toggle the company dropdown menu
toggleDropdown(dropdownToggleCompany, dropdownCompany, logoCompany, navigator, navLinksCompany, company, imgDropDownCompany);

// Get elements for the services dropdown menu
const dropdownToggleServices = document.getElementById('navbarDropdown-services');
const dropdownServices = document.getElementById('dropdown-services');
const logoServices = document.getElementById('imgLogo');
const nav = document.querySelector('header');
const navLinksServices = document.querySelectorAll('.nav-link');
const services = document.getElementsByClassName('link-services');
const imgDropDownServices = document.getElementById('imgDropDownServices')

// Toggle the services dropdown menu
toggleDropdown(dropdownToggleServices, dropdownServices, logoServices, nav, navLinksServices, services, imgDropDownServices);
