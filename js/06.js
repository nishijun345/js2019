/* ------------------------------------
sec094 アラート
-------------------------------------*/

function sec094() {
	const btn094 = document.querySelector('#btn094');

	btn094.addEventListener('click', (event) => {
		alert(`これがアラートです`);
	});
} sec094();


/* ------------------------------------
sec095 アラート
-------------------------------------*/

function sec095() {
	const btn095 = document.querySelector('#btn095');

	btn095.addEventListener('click', (event) => {
		const confirmResult = confirm('ごはん食べていいですか？');
		alert(`戻り値は${confirmResult}`);
	});
} sec095();


/* ------------------------------------
sec096 プロンプト
-------------------------------------*/

function sec096() {
	const btn096 = document.querySelector('#btn096');

	btn096.addEventListener('click', (event) => {
		const promptResult = prompt('おとといの晩ごはんは？', '');
		alert(`戻り値は${promptResult}`);
	});
} sec096();


/* ------------------------------------
sec097 ウィンドウサイズ
-------------------------------------*/

function sec097() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	function windowSize() {
		document.querySelector('.width').innerHTML = `横幅は${w}pxです`;
		document.querySelector('.height').innerHTML = `高さは${h}pxです`;
	}
	windowSize();
	//リサイズイベント
	window.addEventListener('resize', resizeHandler);
	function resizeHandler(event) {
		w = window.innerWidth;
		h = window.innerHeight;
		windowSize();
	}
} sec097();


/* ------------------------------------
sec098 デバイスピクセル比
-------------------------------------*/

function sec098() {
	const dpr = window.devicePixelRatio;
	alert(`このデバイスのデバイスピクセル比は「${dpr}」です`);
}


/* ------------------------------------
sec099 デバイスピクセル比canvas
-------------------------------------*/

function sec099() {
	const dpr = window.devicePixelRatio;
	//canvasの理論的な大きさ
	const canvasW = 200;
	const canvasH = 200;

	const canvas = document.querySelector('canvas');
	//canvasの実体的な大きさ
	canvas.width = canvasW * dpr;
	canvas.height = canvasH * dpr;
	//画面表示上のサイズ
	canvas.style.width = canvasW + 'px';
	canvas.style.height = canvasH + 'px';

	const context = canvas.getContext('2d');
	//スケールを設定
	context.scale(dpr, dpr);
	//円を描く
	context.fillStyle = 'red';
	context.arc(canvasW / 2, canvasH / 2, 100, 0, 2 * Math.PI);
	context.fill();
} sec099();


/* ------------------------------------
sec100 タッチ可能か調べる
-------------------------------------*/

function sec100() {
	const isSupported = !!(
		'ontouchstart' in window || //ontouchstartが存在するか
		(navigator.pointerEnabled && navigator.maxTouchPoints > 0) //pointerEnabledが存在し、かつmaxTouchPointsが0より大きいか
	);
	alert(`このデバイスはタッチ可能か「${isSupported}」`);
}


/* ------------------------------------
sec102 リロード
-------------------------------------*/

function sec102() {
	location.reload(true);
}


/* ------------------------------------
sec105 ハッシュ変更イベントの監視
-------------------------------------*/

function sec105() {
	window.addEventListener('hashchange', handleHashChange);
	handleHashChange();
	function handleHashChange() {
		const hash = location.hash;
		document.querySelector('.hashTxt').innerHTML = `現在のアンカーは「${hash}」です`;
	}
}


/* ------------------------------------
sec106 新しいウィンドウを開く
-------------------------------------*/

function sec106() {
	const win = window.open('../index.html');
	win.focus();
}