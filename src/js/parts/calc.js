function calc() {
    "use strict";

    let peoples = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        sumDay = 0,
        sumPeople =0,
        total = 0;

    let selIndex = document.getElementById("select").options.selectedIndex;
    let n =  document.getElementById("select").options[selIndex].value;

    totalValue.innerHTML = 0;
    peoples.value = '';
    days.value = '';

    peoples.addEventListener('input', function(){
        sumPeople = +this.value;
        total = sumPeople * sumDay * 4000;

        console.log(sumPeople);
        console.log(sumDay);
        if (peoples.value != 0 && days.value != 0) {
            totalValue.innerHTML = total * n;
            console.log(`${total}`) ;
        }else{
            totalValue.innerHTML = 0;
        }
    });

    days.addEventListener('input', function(){
        sumDay = +this.value;
        total = sumPeople * sumDay * 1000;

        console.log(sumPeople);
        console.log(sumDay);
        if (days.value != 0 && peoples.value != 0) {
            totalValue.innerHTML = total * n;
            console.log(`${total}`) ;
        } else{
            totalValue.innerHTML = 0;
        }
    });


    place.addEventListener('input', function () {
        if (days.value != 0 && peoples.value != 0) {
            let a = total;
            totalValue.innerHTML = total * this.options[this.selectedIndex].value;
        } else{
            totalValue.innerHTML = 0;
        }
    })
}

module.exports = calc;