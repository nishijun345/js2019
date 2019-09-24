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


/* ------------------------------------
sec148 createElement
-------------------------------------*/

function sec148() {
	document.querySelector('.modal148').addEventListener('click', displayModalWindow);
	function displayModalWindow() {
		//modalの生成
		const modalElement = document.createElement('div');
		modalElement.classList.add('modal');
		//モーダル内部要素の生成
		const innerElement = document.createElement('div');
		innerElement.classList.add('inner');
		innerElement.innerHTML = `<p>モーダルの中身です（クリックで削除）</p>`;
		//モーダルに内部要素の配置
		modalElement.appendChild(innerElement);
		//bodyにモーダルを配置
		document.body.appendChild(modalElement);
		//内部要素をクリックでモーダルを削除
		innerElement.addEventListener('click', () => {
			closeModalWindow(modalElement);
		});
	}

	function closeModalWindow(modalElement) {
		document.body.removeChild(modalElement);
	}
} sec148();


/* ------------------------------------
sec149 cloneNode
-------------------------------------*/

function sec149() {
	const cloneWrap = document.querySelector('.cloneWrap');
	const cloneTrueBtn = document.querySelector('.true149');
	const cloneFalseBtn = document.querySelector('.false149');
	cloneTrueBtn.addEventListener('click', cloneTrue);
	cloneFalseBtn.addEventListener('click', cloneFalse);

	function cloneTrue() {
		const cloneTrueElement = cloneTrueBtn.cloneNode(true);
		cloneWrap.appendChild(cloneTrueElement);
	}
	function cloneFalse() {
		const cloneFalseElement = cloneFalseBtn.cloneNode();
		cloneWrap.appendChild(cloneFalseElement);
	}
} sec149();


/* ------------------------------------
sec150 replaceChild
-------------------------------------*/

function sec150() {
	const replaceChildWrap = document.querySelector('.replaceChildWrap');
	const old150 = document.querySelector('.old150');
	const new150 = document.createElement('p');
	new150.innerHTML = '新しいnew';
	document.querySelector('.btn.replaceChild').addEventListener('click', () => {
		replaceChildWrap.replaceChild(new150, old150);
	});
} sec150();


/* ------------------------------------
sec151 replaceWith
-------------------------------------*/

function sec151() {
	const old151 = document.querySelector('.old151');
	const new151 = document.createElement('p');
	new151.innerHTML = '新しいnew';
	document.querySelector('.btn.replaceWith').addEventListener('click', () => {
		old151.replaceWith(new151);
	});
} sec151();


/* ------------------------------------
sec158 classList.toggle
-------------------------------------*/

function sec158() {
	const btn158 = document.querySelector('.btn158');
	btn158.addEventListener('click', () => {
		btn158.classList.toggle('on');
	});
} sec158();


/* ------------------------------------
sec160 getComputedStyle
-------------------------------------*/

function sec160() {
	const btn160 = document.querySelector('.btn160');
	btn160.addEventListener('click', () => {
		alert(getComputedStyle(document.body).backgroundColor);
	});
} sec160();