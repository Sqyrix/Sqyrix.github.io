// ===== JAVASCRIPT KODLARI =====
// Bu dosya web sitesini etkileşimli hale getirir

console.log("Merhaba! Bu benim ilk JavaScript kodum 🎉");

// ===== FONKSİYONLAR =====

// 1. Merhaba mesajı gösterme fonksiyonu
function sayHello() {
    alert("Merhaba! Ben Sqyrix, kod öğreniyorum! 👋");
}

// 2. Proje detaylarını gösterme fonksiyonu
function showProject(projectType) {
    let message = "";
    
    if (projectType === "web") {
        message = "İlk web sayfam: HTML ve CSS kullanarak yaptım. Çok basit ama gurur duyuyorum!";
    } else if (projectType === "calc") {
        message = "Hesap makinesi: JavaScript ile basit matematiksel işlemler yapabilen bir uygulama.";
    } else {
        message = "Bu proje hakkında daha fazla bilgi yakında gelecek!";
    }
    
    alert(message);
}

// 3. Arka plan rengini değiştirme fonksiyonu
function changeBackgroundColor() {
    // Rastgele renkler dizisi
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8"];
    
    // Rastgele bir renk seç
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Sayfanın arka plan rengini değiştir
    document.body.style.backgroundColor = randomColor;
    
    // Kullanıcıya bilgi ver
    alert("Sayfa rengi değişti! Tekrar tıklayarak farklı renkler deneyebilirsin 🎨");
}

// 4. Form gönderme fonksiyonu
function sendMessage(event) {
    // Formun normal gönderimini engelle
    event.preventDefault();
    
    // Form verilerini al
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    
    // Boş alan kontrolü
    if (name === "" || message === "") {
        alert("Lütfen tüm alanları doldur!");
        return;
    }
    
    // Başarı mesajı
    alert(`Teşekkürler ${name}! Mesajın alındı: "${message}"`);
    
    // Formu temizle
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

// ===== SAYFA YÜKLENİNCE ÇALIŞACAK KODLAR =====
document.addEventListener("DOMContentLoaded", function() {
    console.log("Sayfa tamamen yüklendi!");
    
    // Hoş geldin mesajı (isteğe bağlı)
    // setTimeout(function() {
    //     alert("Sqyrix'in web sitesine hoş geldin! 🚀");
    // }, 2000);
});

// ===== SCROLL (KAYDIRMA) EFEKTİ =====
// Sayfa kaydırıldığında başlığın arka planını değiştir
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    
    if (window.scrollY > 50) {
        // 50 piksel aşağı kaydırılınca arka planı koyu yap
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
        // Yukarıdaysa normal arka plan
        header.style.backgroundColor = "#fff";
    }
});

// ===== SMOOTH SCROLLING (YUMUŞAK KAYDIRMA) =====
// Menü linklerine tıklandığında yumuşak kaydırma
document.querySelectorAll('.navbar a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Normal linki engelle
        
        // Hedef bölümü bul
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Yumuşak kaydırma
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log("Tüm JavaScript kodları başarıyla yüklendi! ✅");
