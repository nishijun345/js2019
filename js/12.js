/* ------------------------------------
sec205 SVGで要素を動的に追加する
-------------------------------------*/

function sec205() {
	function createCircle() {
		const circle205 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		circle205.setAttribute('cx', '300');
		circle205.setAttribute('cy', '300');
		circle205.setAttribute('r', '300');
		circle205.setAttribute('fill', '#f9ff68');
		const svg205 = document.querySelector('.svg205');
		svg205.appendChild(circle205);
	}
	document.querySelector('.btn205').addEventListener('click', () => {
		createCircle();
	});
} sec205();

/* ------------------------------------
sec207 SVGのスタイルを変更する
-------------------------------------*/

function sec206() {
	function changeStyle() {
		const circle206 = document.querySelector('.svg206');
		circle206.setAttribute('fill-opacity', '0.3');
	}
	document.querySelector('.btn206').addEventListener('click', () => {
		changeStyle();
	});
} sec206();

/* ------------------------------------
sec207 SVG要素をマウス操作する
-------------------------------------*/

function sec207() {
	document.querySelector('.svg207').addEventListener('click', (e) => {
		alert('SVGがクリックされました！');
	});
} sec207();

/* ------------------------------------
sec208 SVG要素をアニメーションさせる
-------------------------------------*/

function sec208() {
	const svg208 = document.querySelector('.svg208');
	const circle208 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	circle208.setAttribute('cx', '300');
	circle208.setAttribute('cy', '300');
	circle208.setAttribute('r', '300');
	svg208.appendChild(circle208);

	let time = 0;
	document.querySelector('.btn208').addEventListener('click', () => {
		circleAnimate();
	});

	function circleAnimate() {
		//時間で変化
		time += 0.1;
		//色を変化
		svg208.style.fill = `hsl(200, 100%, ${time}%)`;
		//目標値まで繰り返す
		if (time < 50) {
			requestAnimationFrame(circleAnimate);
		}
	}
} sec208();

/* ------------------------------------
sec209 SVGで描いたグラフィックをダウンロードさせる
-------------------------------------*/

function sec209() {
	document.querySelector('#btnSave').addEventListener('click', saveFile);

	function saveFile() {
		const fileName = `svg209.svg`;
		//SVG要素を取得
		const content = document.querySelector('.svg209').outerHTML;
		//データを準備
		const dataUrl = 'data:image/svg+xml,\n' + encodeURIComponent(content);
		//BOMの文字化け対策
		const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
		const blob = new Blob([bom, content], { type: 'text/plain' });

		if (window.navigator.msSaveBlob) {
			//IE
			window.navigator.msSaveBlob(blob, fileName);
		} else if (window.URL && window.URL.createObjectURL) {
			//FF, Chrome, Safari
			const a = document.createElement('a');
			a.download = fileName;
			a.href = window.URL.createObjectURL(blob);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		} else {
			//Safari
			window.open(dataUrl, '_blank');
		}
	}
} sec209();

/* ------------------------------------
sec210 キャンバス要素を使う
-------------------------------------*/

function sec210() {
	const canvas210 = document.querySelector('#canvas210');
	const context = canvas210.getContext('2d');
	context.fillRect(0, 0, 200, 200);
} sec210();

/* ------------------------------------
sec211 キャンバスに塗りと線を描く
-------------------------------------*/

function sec211() {
	const canvas211 = document.querySelector('#canvas211');
	const context = canvas211.getContext('2d');
	context.fillStyle = 'red';
	context.fillRect(0, 0, 200, 200);
	//線の幅
	context.lineWidth = 6;
	//線の色
	context.strokeStyle = '#fff';
	context.strokeRect(23, 23, 100, 100);
} sec211();

/* ------------------------------------
sec212 キャンバスに画像を貼り付ける
-------------------------------------*/

function sec212() {
	const canvas212 = document.querySelector('#canvas212');
	const context = canvas212.getContext('2d');
	//Imageインスタンス
	const img = new Image();
	//画像読み込み後の処理
	img.onload = () => {
		context.drawImage(img, 0, 0);
	}
	//画像読み込みを開始
	img.src = '../img/land.jpeg';
} sec212();

/* ------------------------------------
sec213 キャンバスに画像を貼り付ける
-------------------------------------*/

function sec213() {
	const canvas213 = document.querySelector('#canvas213');
	const context = canvas213.getContext('2d');
	context.fillStyle = 'red';
	context.fillRect(0, 0, 200, 200);
	context.lineWidth = 6;
	context.strokeStyle = '#fff';
	context.strokeRect(23, 23, 100, 100);
	const imageData = context.getImageData(0, 0, 10, 10);
	document.querySelector('.btn213').addEventListener('click', () => {
		document.querySelector('.data213').innerHTML = imageData.data;
	});
} sec213();

/* ------------------------------------
sec214 キャンバスに画像を貼り付ける
-------------------------------------*/

function sec214() {
	const canvas214 = document.querySelector('#canvas214');
	const context = canvas214.getContext('2d');
	//Imageインスタンス
	const img = new Image();
	//画像読み込み後の処理
	img.onload = () => {
		context.drawImage(img, 0, 0);
	}
	//画像読み込みを開始
	img.src = '../img/land.jpeg';

	//mouseEvent
	canvas214.addEventListener('mousemove', (e) => {
		const x = e.layerX;
		const y = e.layerY;
		//ImageData
		const imageData = context.getImageData(x, y, 1, 1);
		//画素配列を取得
		const data = imageData.data;
		const r = data[0];
		const g = data[1];
		const b = data[2];
		const a = data[3];
		//文字列として色情報を扱う
		const color = `rgba(${r},${g},${b},${a})`;
		const color214 = document.querySelector('.color214');
		color214.style.background = color;
		color214.textContent = color;
	});
} sec214();

/* ------------------------------------
sec215 キャンバスに画像を貼り付ける
-------------------------------------*/

function sec215() {
	const canvas215 = document.querySelector('#canvas215');
	const context = canvas215.getContext('2d');
	//Imageインスタンス
	const img = new Image();
	//画像読み込み後の処理
	img.onload = () => {
		//original
		context.drawImage(img, 0, 0);
		const imageData = context.getImageData(0, 0, 500, 300);
		const data = imageData.data;

		//mono
		const monoImageData = new ImageData(500, 300);
		const monoArr = monoImageData.data;
		for (let i = 0; i < data.length / 4; i++) {
			const r = data[i * 4 + 0];
			const g = data[i * 4 + 1];
			const b = data[i * 4 + 2];
			const a = data[i * 4 + 3];
			//平均値
			const color = (r + g + b) / 3;
			//新しい配列に色を指定
			monoArr[i * 4 + 0] = color;
			monoArr[i * 4 + 1] = color;
			monoArr[i * 4 + 2] = color;
			monoArr[i * 4 + 3] = a;
		}
		const canvasMono = document.querySelector('#canvasMono');
		const contextMono = canvasMono.getContext('2d');
		contextMono.putImageData(monoImageData, 0, 0);
	};
	//画像読み込みを開始
	img.src = '../img/land.jpeg';
} sec215();

/* ------------------------------------
sec216 キャンバスの画像をDataURLで取得する
-------------------------------------*/

function sec216() {
	const canvas216 = document.querySelector('#canvas216');
	const context = canvas216.getContext('2d');
	context.fillStyle = 'red';
	context.fillRect(0, 0, 200, 200);
	context.lineWidth = 6;
	context.strokeStyle = '#fff';
	context.strokeRect(23, 23, 100, 100);
	//Base64
	const data = canvas216.toDataURL();
	//imgに代入
	const btn216 = document.querySelector('.btn216');
	const img216 = document.querySelector('#img216');
	btn216.addEventListener('click', () => {
		img216.src = data;
	});
} sec216();


/* ------------------------------------
sec217 PNG / JPEGなど異なる形式のDataURLを取得する
-------------------------------------*/

function sec217() {
	//サンプルアニメ-------------------------------------------------
	const STAGE_W = 300; // 幅
	const STAGE_H = 300; // 高さ
	const CENTER_X = STAGE_W / 2; // 中心X座標
	const CENTER_Y = STAGE_H / 2; // 中心Y座標
	const MAX = 150; // ループ回数
	// 変数の初期化
	const canvas = document.getElementById('canvas217');
	const context = canvas.getContext('2d');
	let n = 0; // カウント
	// アニメーションを開始
	tick();
	function tick() {
		// 描画をリセット
		context.clearRect(0, 0, STAGE_W, STAGE_H);
		// 変数
		let oldX = CENTER_X;
		let oldY = CENTER_Y;
		// 模様を描く
		for (let i = 0; i < MAX; i++) {
			context.beginPath();
			context.lineWidth = 1;
			context.strokeStyle = 'hsl(' + ((i / MAX) * 360 + n * 4000) + ', 100%, 50%)';
			context.moveTo(oldX, oldY);
			context.lineTo((oldX = CENTER_X + i * Math.cos(i + i * n)), (oldY = CENTER_Y + i * Math.sin(i + i * n)));
			context.stroke();
		}
		// カウントを更新
		n += 0.00025;
		requestAnimationFrame(tick);
	}

	// JPEG 画像を取得
	const btnJpeg = document.querySelector('.btnJpeg');
	btnJpeg.addEventListener('click', () => {
		const data = canvas.toDataURL('image/jpeg');
		cloneToImage(data);
	});

	// PNG 画像を取得
	const btnPng = document.querySelector('.btnPng');
	btnPng.addEventListener('click', () => {
		const data = canvas.toDataURL('image/png');
		cloneToImage(data);
	});

	// img要素にDataURLの文字列を代入
	function cloneToImage(data) {
		document.querySelector('#img217').src = data;
	}
} sec217();