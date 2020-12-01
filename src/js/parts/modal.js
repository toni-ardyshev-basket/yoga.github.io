function modal() {
    "use strict";


    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами связемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formBottom = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(elem){
        elem.addEventListener('submit', function(e){
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data){
                return new Promise(function(resolve, reject){
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if(request.readyState < 4) {
                            statusMessage.innerHTML = message.loading;
                        } else if(request.readyState === 4) {
                            if(request.status === 200){
                                resolve();
                            } else {
                                reject()
                            }
                        }
                    };
                    request.send(data)
                })
            } // End postData

            function clearInput(){
                for(let i = 0; i < input.length; i++){
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    thanksModal.style.display = 'block'; //присвоить значения
                    mainModal.style.display = 'none'; //присвоить значения
                    statusMessage.innerHTML = '';
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        })
    }
    sendForm(form);
    sendForm(formBottom);
}

module.exports = modal;