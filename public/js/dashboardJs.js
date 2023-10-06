

var ali = document.querySelector('#taodon')
// ali.addEventListener('change', function(){
//     var valueAli = ali.options[ali.selectedIndex].value;
//     if (valueAli == 'alipaytrung' || valueAli == 'alipayvietnam' ) {
        
//         let aliTab = document.querySelector('.ali')
//         aliTab.classList.add('active')
//     } else {
//         console.log('gu nguyenb');
//     }
// })



function taodon() {
    $.ajax({
        url: '/thanhtoan',
        type: 'POST',
        data: {
            soTe: $('#inputTe').val(),
            hinhThucTT: ali.options[ali.selectedIndex].value,
            ndGiaoDich: $('#inputTtgd').val(),
            noteGiaoDich: $('#inputNote').val()
        }
    })
    .then(data => {
        console.log('tao yeu cau thanh conng')
    })
    .catch(err => {
        console.log('tao yeu cau thanh conng');

    })
}


var sidebarList = document.querySelectorAll('.sidebar-list')
var tabDashboard = document.querySelectorAll('.tab-dashboard')
sidebarList.forEach(function (list, index) {
    list.addEventListener('click', function(){
        for(let dashboard of tabDashboard) {
            dashboard.classList.remove('active')
        }
        for(let sidebar of sidebarList) {
            sidebar.classList.remove('active')
        }
        tabDashboard[index].classList.add('active')
        sidebarList[index].classList.add('active')
    })
});






























        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Thanh Toán hộ',
                    'Vận chuyển hộ',
                    'Đặt hàng TQ'
                ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    '#5e3d92',
                    '#fdb04c',
                    '#c4b9d7'
                ],
                hoverOffset: 4
            }]

        },
            
        });

  

function xulyfile(){
    var f1 = event.target.files[0];
    var hinh = document.querySelector("#hinh");
    if (f1.type=="image/png" || f1.type=="image/jpeg"){
     hinh.src = window.URL.createObjectURL(f1);
    }
 }
    
 
