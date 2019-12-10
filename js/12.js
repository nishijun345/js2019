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