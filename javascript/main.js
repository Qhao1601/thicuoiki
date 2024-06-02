// lưu dữ liệu xuống data , và đẩy lên 
const cards = document.querySelectorAll(".home-product-item")
cards.forEach((item)=>{
    item.addEventListener("click",() => {
        const img = item.querySelector(".home-product-item-img")
        // Phương thức này sử dụng một biểu thức chính quy (regular expression) để tìm kiếm một chuỗi có định dạng url('...') 
        // hoặc url("..."), và trích xuất phần tử URL bên trong nó.
        const arrURL = window.getComputedStyle(img).backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1].split("/")
        console.log(arrURL);
        const linkImg = arrURL[arrURL.length-1]
        const name = item.querySelector(".home-product-item__name").textContent
        const price = item.querySelector(".home-product-item__price-current").textContent
        const arrayTemp = name.split(" ")
        const gb = arrayTemp[arrayTemp.length-2]
        const data = {
            linkImg,
            name,
            price,
            gb
        }
        localStorage.setItem("product",JSON.stringify(data))
    })
})

const productName = document.querySelector(".heading-title")
const price = document.querySelector(".heading-giatien")
const backgroundImg = document.querySelector(".img-carousel")
const gb = document.querySelector(".heading-GB")
if(productName&&price&&backgroundImg){
    const data = JSON.parse(localStorage.getItem("product"))
    productName.textContent = data.name
    price.textContent = data.price
    backgroundImg.src = `../img/${data.linkImg}`
    gb.textContent = data.gb
}
// nút chạy về trang đầu 
const scrollTopButton = document.getElementById('scrollTopButton');
 scrollTopButton.addEventListener('click', function() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
let lastScrollY = window.scrollY;
 window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY || window.scrollY==0) {
          // Cuộn xuống
          scrollTopButton.style.display = 'none';
      } else {
          // Cuộn lên
          scrollTopButton.style.display = 'block';
      }
      lastScrollY = window.scrollY;
  });