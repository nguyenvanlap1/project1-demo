function createSlider(sliderSelector, imgSelector, nextBtnSelector, prevBtnSelector) {
    let currentIndex = 0;
    const slides = document.querySelectorAll(imgSelector);
    const totalSlides = slides.length;
    const slider = document.querySelector(sliderSelector);
    
    function getSlidesToShow() {
        return window.matchMedia("(max-width: 768px)").matches ? 3 : 5;
    }

    function showSlide(index) {
        const slidesToShow = getSlidesToShow();
        const maxIndex = totalSlides - slidesToShow;
        
        if (index > maxIndex) {
            currentIndex = 0; // Quay lại ảnh đầu tiên khi đến ảnh cuối
        } else if (index < 0) {
            currentIndex = maxIndex; // Quay lại ảnh cuối khi ở ảnh đầu
        } else {
            currentIndex = index;
        }

        slider.style.transform = `translateX(-${(currentIndex * 100) / slidesToShow}%)`;
    }

    // Xử lý sự kiện khi nhấn nút Next / Prev
    document.querySelector(nextBtnSelector).addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });
    document.querySelector(prevBtnSelector).addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    // Cập nhật khi thay đổi kích thước màn hình
    window.addEventListener("resize", () => showSlide(currentIndex));

    showSlide(0); // Hiển thị ảnh đầu tiên khi tải trang
}

function myFunction() {
        var x = document.getElementById("myTopnav");
        x.classList.toggle("responsive");
      }
// Khởi tạo các slider
createSlider(".slider", ".product-img", ".next", ".prev");
createSlider(".slider-2", ".product-img-2", ".next-2", ".prev-2");
createSlider(".slider-3", ".product-img-3", ".next-3", ".prev-3");



function updateUserId(){
    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        document.getElementById("userName").innerText = storedUser.username;
    } else {
        document.getElementById("userName").innerText = "Đăng nhập"
    }
}


function updateCartCount() {
    //Chuyen chuoi thanh doi tuong
    let products = JSON.parse(localStorage.getItem("cartItems")) || [];
    document.getElementById("addCart").innerText = t = `(${products.length})`;
}
updateCartCount()
updateUserId()