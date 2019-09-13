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
		console.log(event.clientX, event.clientY);
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



/* ------------------------------------
sec122 マウスに合わせて要素を動かす
-------------------------------------*/

function sec122() {
	const chara = document.querySelector('.chara');
	const charaArea = document.querySelector('.charaArea');
	//マウスを押すとキャラの移動開始
	charaArea.addEventListener('mousedown', () => {
		//キャラを動かす
		charaArea.addEventListener('mousemove', onMouseMove);
		//マウスを離したらキャラの移動終了
		charaArea.addEventListener('mouseup', () => {
			charaArea.removeEventListener('mousemove', onMouseMove);
		});
	});

	function onMouseMove(event) {
		chara.style.left = `${event.offsetX - 160}px`;
		chara.style.top = `${event.offsetY - 160}px`;
	}
} sec122();


/* ------------------------------------
sec123 スクロール
-------------------------------------*/

function sec123() {
	const scrollBox = document.querySelector('.scrollBox');
	window.addEventListener('scroll', () => {
		scrollBox.innerHTML = `スクロール X「${window.scrollX}」 Y「${window.scrollY}」`;
	});
} sec123();


/* ------------------------------------
sec124 テキスト選択
-------------------------------------*/

function sec124() {
	const balloon = document.querySelector('#balloon');
	const paragraph = document.querySelector('.paragraph');

	paragraph.addEventListener('selectstart', () => {
		//マウスを離したとき
		paragraph.addEventListener('mouseup', (event) => {
			//選択された文字列を取得
			const selectionCharacters = window.getSelection().toString();
			if (selectionCharacters.length > 0) {
				balloon.innerHTML = selectionCharacters;
				balloon.classList.add('on');
				balloon.style.left = `${event.offsetX - 10}px`;
				balloon.style.top = `${event.offsetY - 10}px`;
			} else {
				//吹き出しを閉じる
				removePopup();
			}
		},
		{
			once: true
		});
	});

	//吹き出しを閉じる
	balloon.addEventListener('click', removePopup);

	function removePopup() {
		balloon.classList.remove('on');
	}
} sec124();


/* ------------------------------------
sec125 タッチ操作
-------------------------------------*/

function sec125() {
	const targetBox = document.querySelector('.touchWrap');
	const logBox = document.querySelector('.log');

	//タッチ開始
	targetBox.addEventListener('touchstart', () => {
		logBox.innerHTML = 'タッチ開始';
	});
	//タッチ位置を移動
	targetBox.addEventListener('touchmove', () => {
		logBox.innerHTML = 'タッチ位置移動';
	});
	//タッチ終了
	targetBox.addEventListener('touchend', () => {
		logBox.innerHTML = 'タッチ終了';
	});
} sec125();


/* ------------------------------------
sec126 タッチイベント
-------------------------------------*/

function sec126() {
	const targetBox2 = document.querySelector('.touchWrap2');
	const logBox2 = document.querySelector('.log2');

	targetBox2.addEventListener('touchstart', (event) => {
		const touch = event.changedTouches;
		logBox2.innerHTML = `${touch[0].pageX.toFixed(2)}<br>${touch[0].pageY.toFixed(2)}`;
	});
} sec126();


/* ------------------------------------
sec127 キー入力
-------------------------------------*/

function sec127() {
	const text127 = document.querySelector('.text127');
	let result127 = document.querySelector('.result127');
	let num127 = document.querySelector('.num127');

	text127.addEventListener('keydown', () => {
		result127.innerHTML = 'キーが押された';
	});
	text127.addEventListener('keypress', () => {
		result127.innerHTML = '文字が入力された';
	});
	text127.addEventListener('keyup', onKeyUp);

	function onKeyUp() {
		result127.innerHTML = 'キーが離された';
		const inputText = text127.value;
		num127.innerText = inputText.length;
	}
} sec127();


/* ------------------------------------
sec128 入力されたキー
-------------------------------------*/

function sec128() {
	const text128 = document.querySelector('.text128');
	const arrow128 = document.querySelector('.arrow128');

	text128.addEventListener('keydown', handleKeydown);

	function handleKeydown() {
		document.querySelector('.key128').innerHTML = event.key;
		document.querySelector('.code128').innerHTML = event.code;
		document.querySelector('.altKey128').innerHTML = event.altKey;
		document.querySelector('.ctrlKey128').innerHTML = event.ctrlKey;
		document.querySelector('.shiftKey128').innerHTML = event.shiftKey;
		document.querySelector('.metaKey128').innerHTML = event.metaKey;
		document.querySelector('.repeat128').innerHTML = event.repeat;
		document.querySelector('.isComposing128').innerHTML = event.isComposing;

		//キーコードで判定
		const keyCode = event.keyCode;
		if (keyCode === 37) {
			arrow128.innerHTML = '左';
		}
		if (keyCode === 38) {
			arrow128.innerHTML = '上';
		}
		if (keyCode === 39) {
			arrow128.innerHTML = '右';
		}
		if (keyCode === 40) {
			arrow128.innerHTML = '下';
		}
	}
} sec128();