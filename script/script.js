let btns = document.querySelectorAll('.btn');
let contents = document.querySelectorAll('.contents');

function openPage(page) {
    Array.from(contents).forEach(function (content) {
        content.style.display = 'none';
        if (content.classList.contains(page)) {
            content.style.display = 'block';

        }
    });

    Array.from(btns).forEach(function (btn){
        btn.classList.remove('active-btn')
    })

    let clickedBtn = document.querySelector(`.${page}-btn`)
    if(clickedBtn){
        clickedBtn.classList.add('active-btn')
    }

     
}

