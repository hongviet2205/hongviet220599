load();
function load (){
    const number = document.getElementById('number').value;
    const chieudai = document.getElementById('chieudai').value;
    const chieurong = document.getElementById('chieurong').value;
    const margin = document.getElementById('margin').value;
    var check = true;
    if (isNaN(number) && number != null) {
        document.getElementById('loiso').innerHTML = "Nhap so";
        check = false;
    }
    if(number < 0 && number != null){
        document.getElementById('loiso').innerHTML = "Nhap so lon hon 0";
        check = false;
    }if(isNaN(chieudai) && chieudai != null){
        document.getElementById('loichieudai').innerHTML = "Chi nhap so";
        check = false;
    }if (chieudai < 0 && chieudai != null) {
        document.getElementById('loichieudai').innerHTML = "Nhap width lon hon 0";
        check = false;
    }if (isNaN(chieurong) && chieurong != null) {
        document.getElementById('loichieurong').innerHTML = "Nhap so";
        check = false;
        
    }if (chieurong < 0 && chieurong != null) {
        document.getElementById('loichieurong').innerHTML = "Nhap height lon hon 0";
        check = false;
        
    }if (isNaN(margin) && margin != null) {
        document.getElementById('loimargin').innerHTML = "Nhap so";
        check = false;
        
    }if (margin < 0 && margin != null) {
        document.getElementById('loimargin').innerHTML = "Nhap margin lon hon 0";
        check = false;
        
    }

    if (check) {
        if (number != null) {
            var html = '';
            let htmlspan = '';
            for(let index = 1; index <= number; index ++){
                html += '<li> </li>';
                htmlspan += '<span> </span>';
            }
            document.getElementById('chanle').innerHTML = html;
            document.getElementById('span').innerHTML = htmlspan;
        }

        if (chieudai != null) {
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');
            for (let index = 0; index < li.length; index++) {
                li[index].style.width = chieudai + "px";
            }
            for(let index = 0; index < span.length; index++) {
                span[index].style.width = chieudai + "px";
            }
            
        }
        if(chieurong != null) {
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');
            for(let index = 0; index < li.length; index++){
                li[index].style.height = chieurong + "px";
            }
            for(let index = 0; index < span.length; index++){
                span[index].style.height = chieurong + "px";
            }
        }
        if(margin != null) {
            const li = document.getElementsByTagName('li');
            const span = document.getElementsByTagName('span');
            for(let index = 0; index < li.length; index++){
                li[index].style.margin = margin + "px";
            }
            for(let index = 0; index < span.length; index++){
                span[index].style.margin = margin + "px";
            }
        }
        
    }
}

