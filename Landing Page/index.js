var MobileMenuButton = document.querySelector('.bm-header-right-mobile button');
var mobileMenuItems = document.querySelector('.bm-mobile-menu-items')
MobileMenuButton.addEventListener('click', function(){
	if(mobileMenuItems.classList.contains('bm-show')) {
		mobileMenuItems.classList.remove('bm-show');
	} 
	else {
		mobileMenuItems.classList.add('bm-show');
	}
})