// load trang . khi 2s sẽ trở về trang
function load()
{
    setTimeout(() => {
        document.querySelector('.spinner-wrapper').style.display='none';
    },2000);
}
window.onload=load();