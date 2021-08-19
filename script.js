window.addEventListener('scroll', () => {
	let content = document.querySelector('.body1');
	let contentPosition = content.getBoundingClientRect().top*1.2;
	let contentPositionBot = content.getBoundingClientRect().bottom/2;
	let screenPosition = window.innerHeight;

	if(contentPosition < screenPosition){
		content.classList.add('body-animation');
		if(contentPositionBot < screenPosition){
			$('.body1-content').show();
		}
	}
	else{
		content.classList.remove('body-animation');
		$('.body1-content').hide();
	}
})

window.addEventListener('scroll', () => {
	let content = document.querySelector('.body2');
	let contentPosition = content.getBoundingClientRect().top*1.3;
	let contentPositionBot = content.getBoundingClientRect().bottom;
	let screenPosition = window.innerHeight;

	if(contentPosition < screenPosition){
		content.classList.add('body-animation');
		if(contentPositionBot < screenPosition){
			$('.body2-content').show();
		}
	}
	else{
		content.classList.remove('body-animation');
		$('.body2-content').hide();
	}
})

window.addEventListener('scroll', () => {
	let content = document.querySelector('.body3');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;

	if(contentPosition < screenPosition){
		content.classList.add('body-animation');
		$('.body3-content').show();
	}
	else{
		content.classList.remove('body-animation');
		$('.body-content').hide();
	}
})

