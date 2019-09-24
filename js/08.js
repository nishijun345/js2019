/* ------------------------------------
sec138 querySelectorAll
-------------------------------------*/

function sec138() {
	document.querySelectorAll('.box138').forEach((targetBox) => {
		targetBox.addEventListener('click', () => {
			alert(`${targetBox.textContent}がクリックされました`);
		});
	});
} sec138();


/* ------------------------------------
sec145 insertAdjacentHTML
-------------------------------------*/

function sec145() {
	const container145 = document.querySelector('.container145');
	const btnBeforebegin = document.querySelector('.btn.beforebegin');
	const btnAfterbegin = document.querySelector('.btn.afterbegin');
	const btnBeforeend = document.querySelector('.btn.beforeend');
	const btnAfterend = document.querySelector('.btn.afterend');
	btnBeforebegin.addEventListener('click', function () {
		container145.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>');
	});
	btnAfterbegin.addEventListener('click', function () {
		container145.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>');
	});
	btnBeforeend.addEventListener('click', function () {
		container145.insertAdjacentHTML('beforeend', '<p>beforeend</p>');
	});
	btnAfterend.addEventListener('click', function () {
		container145.insertAdjacentHTML('afterend', '<p>afterend</p>');
	});
} sec145();