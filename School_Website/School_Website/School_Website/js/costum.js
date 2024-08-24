function addclass() {
    // var addclass = document.getElementById('addRemove');
    // addclass.classList.toggle('asider_add_remove');

    var kazifahim = document.getElementById('kaziFahim');
    kazifahim.classList.toggle('login_pannel_two');

    var addclasstwo = document.getElementById('headerMain');
    addclasstwo.classList.toggle('header_add_class');

    var blockasidebar = document.getElementById('addRemove');
    blockasidebar.classList.toggle('aside-bar-block');

    // var nestted = document.getElementById('addRemove');
    // nestted.classList.toggle('cacle_class');

    // var nestted = document.getElementById('addRemove');
    // nestted.classList.toggle('cacle_class');

    var navbar = document.getElementById('mainSection_remove');
    navbar.classList.toggle('main_section_remove');
}

// function removeclass() {
//     var mybtn = document.getElementById('addRemove');
    
//     mybtn.classList.add('aside-display-none');
//     mybtn.classList.remove('aside-display-none');
    

// }

// function removerclassfunc() {
//     var removeasidebar = document.getElementById('addRemove');
//     removeasidebar.classList.add('aside-remove');
// }

function handleUserAction() {
    var mybtton = document.getElementById('addRemove');
    mybtton.classList.add('aside-display-none');
}

//     var hideasidebar = document.getElementById('addRemove');
//     hideasidebar.classList.add('aside-hidden');
// }


// SCROLL



const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['collections', 'Fees', 'Expenses',],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});







