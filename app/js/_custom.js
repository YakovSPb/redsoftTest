document.addEventListener("DOMContentLoaded", function() {


// SLIDER START
$('.slider').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
	appendDots: '.slider__dots',
	dots: true,
});
// SLIDER END

// GUTTER START
const width = document.body.clientWidth
const container = document.querySelector('.container').clientWidth
const gutter = (width - container) / 2
const gutterElement = document.querySelector('.gutter')
gutterElement.style.width = gutter + 'px'

//GUTTER END

// POPUP FORM START
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        closeMarkup:'<button title="%title%" class="mfp-close">&#10006;</button>',
    });
// POPUP FORM END


// EMULITOR SEND MAIL START
const form = document.getElementById('my-form')
const formHidden = document.getElementById('callback')
formHidden.addEventListener('submit', submitHiddenEmailTest)
form.addEventListener('submit', submitEmailTest)
// EMULITOR SEND MAIL END

function submitEmailTest(event){
	event.preventDefault()
	if(form.querySelector('input').value.length >= 1){
	alert('Выше сообщение отправлено')
	form.querySelector('input').value = ''
}
}

function submitHiddenEmailTest(event){
	event.preventDefault()
	if(formHidden.querySelector('input').value.length >= 1){
	alert('Выше сообщение отправлено')
	formHidden.querySelector('input').value = ''
	$.magnificPopup.close();
}
}

});
