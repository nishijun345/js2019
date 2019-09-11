/* ------------------------------------
sec114 addEventListener
-------------------------------------*/

function sec114() {
	const button = document.querySelector('#btn114');
	button.addEventListener('click', (event) => {
		//イベントの情報を出力する
		alert(event);
		//クリックされたボタン要素が出力される
		alert(event.target);
	});
} sec114();


/* ------------------------------------
sec115 イベントリスナーオプション
-------------------------------------*/

function sec115() {
	const option = {
		once: true
	};
	//オプションなし
	document.querySelector('#btn115').addEventListener('click', onClickButton);
	//オプションあり
	document.querySelector('#btn115once').addEventListener('click', onClickButton, option);

	function onClickButton() {
		alert('ボタンが押されました');
	}
} sec115();


/* ------------------------------------
sec117 DOMContentLoaded、load
-------------------------------------*/

function sec117() {
	window.addEventListener('DOMContentLoaded', () => {
		//sectionの数を取得
		const sectionNum = document.querySelectorAll('section').length;
		console.log(`sectionの数は${sectionNum}`);
	});

	window.addEventListener('load', () => {
		const sectionNum = document.querySelectorAll('section').length;
		console.log(`sectionの数は${sectionNum}`);
	});
} sec117();


/* ------------------------------------
sec118 click
-------------------------------------*/

function sec118() {
	document.querySelector('#btn118').addEventListener('click', () => {
		alert('ボタンがクリックされました');
	})
} sec118();


/* ------------------------------------
sec119 マウス操作イベント
-------------------------------------*/

function sec119() {
	const logArea = document.querySelector('.logArea');

	logArea.addEventListener('mousedown', () => {
		logArea.innerHTML = 'マウスボタンを押した';
	});
	logArea.addEventListener('mouseup', () => {
		logArea.innerHTML = 'マウスボタンを離した';
	});
	logArea.addEventListener('mousemove', () => {
		logArea.innerHTML = 'マウスを動かした';
	});
} sec119();


/* ------------------------------------
sec120 マウスオーバーイベント
-------------------------------------*/

function sec120() {
	const logArea2 = document.querySelector('.logArea2');
	const logArea2Child = document.querySelector('.logArea2_child');

	logArea2.addEventListener('mouseenter', () => {
		console.log('2マウスが乗った');
	});
	logArea2Child.addEventListener('mouseenter', () => {
		console.log('2Childマウスが乗った');
	});
	logArea2.addEventListener('mouseleave', () => {
		console.log('2マウスが離れた');
	});
	logArea2Child.addEventListener('mouseleave', () => {
		console.log('2Childマウスが離れた');
	});
} sec120();


/* ------------------------------------
sec121 マウスオーバーイベント（バブリングあり）
-------------------------------------*/

function sec121() {
	const logArea3 = document.querySelector('.logArea3');
	const logArea3Child = document.querySelector('.logArea3_child');

	logArea3.addEventListener('mouseover', () => {
		console.log('3マウスが乗った');
	});
	logArea3Child.addEventListener('mouseover', () => {
		console.log('3Childマウスが乗った');
	});
	logArea3.addEventListener('mouseout', () => {
		console.log('3マウスが離れた');
	});
	logArea3Child.addEventListener('mouseout', () => {
		console.log('3Childマウスが離れた');
	});
} sec121();