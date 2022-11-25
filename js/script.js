const tabNavItems = document.querySelectorAll('.tabs-work__button');
const tabItems = document.querySelectorAll('.tabs-work__item');
document.addEventListener("click", function (e){
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if(targetElement.closest('.tabs-work__button')){
		tabNavItems.forEach((tabNavItem, index) => {
			if(tabNavItem.classList.contains('active')){
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if(tabNavItem === targetElement){
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[newActiveIndex].classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
	  }
	});

const fstabNavItems = document.querySelectorAll('.fstabs-work__button');
const fstabItems = document.querySelectorAll('.fstabs-work__item');
document.addEventListener("click", function (e){
	const fstargetElement = e.target;
	let fscurrentActiveIndex = null;
	let fsnewActiveIndex = null;
	if(fstargetElement.closest('.fstabs-work__button')){
		fstabNavItems.forEach((fstabNavItem, index) => {
			if(fstabNavItem.classList.contains('active')){
				fscurrentActiveIndex = index;
				fstabNavItem.classList.remove('active');
			}
			if(fstabNavItem === fstargetElement){
				fsnewActiveIndex = index;
			}
		});
		fstargetElement.classList.add('active');
		fstabItems[fsnewActiveIndex].classList.add('active');
		fstabItems[fscurrentActiveIndex].classList.remove('active');
	  }
	});