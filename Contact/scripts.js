 
   // menu burger
  
  const burger = document.getElementById('burger');
    const nav = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // whatsapp

  
  document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const fullMessage = `Nom: ${name}%0ANuméro: ${phone}%0AMessage: ${message}`;
    const whatsappNumber = "+242068301796";

    // Affiche le message de confirmation
    document.getElementById("confirmation-message").style.display = "block";

    // Redirection vers WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/242068301796?text=${fullMessage}`, '_blank');
    }, 1000); // délai de 1 seconde pour montrer la confirmation
  });


//  gallerie

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const closeBtn = document.querySelector(".close");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = item.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });






   //Date
  
	document.getElementById("year").textContent = new Date().getFullYear(); 