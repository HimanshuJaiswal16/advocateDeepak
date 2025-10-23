// Automatically detect correct base path
let basePath = '';
if (location.pathname.includes('/components/')) {
  basePath = '../';
} else {
  basePath = './';
}

// ✅ Replace with your actual WhatsApp number (country code + number, no + or spaces)
const whatsappNumber = '918568060606'; // Example: 91 for India

// ✅ Create the floating icon container
const floatingIcon = document.createElement('span');
floatingIcon.className = 'floating-icon';
floatingIcon.innerHTML = `
  <a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">
    <img src="${basePath}assets/whatsapp.png" alt="Support" style="width:60px; height:60px; object-fit:contain;" />
  </a>
`;

// ✅ Append icon to body when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(floatingIcon);
});
