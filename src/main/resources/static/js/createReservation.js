/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//Table 값 출력
function table_click(num) {
    const element = document.getElementById('selected-table-number');
    element.value = num;
}

//예약 생성 유효성 검사
function CheckReservationUserForm() {
    var TableNumber = document.getElementById("selected-table-number");
    var selectedSits = document.getElementById("selected-sits");
    var startDate = document.getElementById("startDate");
    var startTime = document.getElementById("startTime");
    var CustomerID =  document.getElementById("CustomerID");
    var now = new Date();
    var nYY = now.getFullYear();
    var nMO = ('0' + (now.getMonth() + 1)).slice(-2);
    var nDD = ('0' + now.getDate()).slice(-2);
    var nHH = now.getHours();
    var nMM = now.getMinutes();

    var replaceDate = startDate.value.replace(/\-/g, "");
    var sYY = replaceDate.substring(0, 4);
    var sMO = replaceDate.substring(4, 6);
    var sDD = replaceDate.substring(6, 8);

    var replaceTime = startTime.value.replace(/\:/g, "");
    var sHH = replaceTime.substring(0, 2);
    var sMM = replaceTime.substring(2, 4);

    if (TableNumber.value == "") {
        alert("테이블을 정해주세요.");
        TableNumber.select();
        TableNumber.focus();
        return false;
    } else if (selectedSits.value == "") {
        alert("자릿 수를 선택해주세요.");
        selectedSits.select();
        selectedSits.focus();
        return false;
    } else if (startDate.value == "") {
        alert("날짜를 선택해주세요.");
        startDate.select();
        startDate.focus();
        return false;
    } else if (startTime.value == "") {
        alert("시간을 선택해주세요.");
        startTime.select();
        startTime.focus();
        return false;
    } else if (sYY == nYY && sMO == nMO && sDD == nDD && sHH - nHH < 0) {
        alert("금일을 선택하셨습니다. 현재 시간 이후를 선택해주세요.");
        startTime.select();
        startTime.focus();
        return false;
    } else if (sYY == nYY && sMO == nMO && sDD == nDD && sHH == nHH && sMM - nMM < 0) {
        alert("금일을 선택하셨습니다. 현재 시간 이후를 선택해주세요.");
        startTime.select();
        startTime.focus();
        return false;
    } else if(CustomerID.value == "") {
        alert("고객님의 ID를 적어주세요.");
        CustomerID.select();
        CustomerID.focus();
        return false;
    }
    return true;
}
