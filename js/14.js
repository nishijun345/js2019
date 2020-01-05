/* ------------------------------------
sec229 JSONをパースする
-------------------------------------*/

function sec229() {
	//JSON文字列
	const jsonStrings = `{"students":40,"grade":4,"name":"C組"}`;
	//文字列をJavaScriptのオブジェクトに変換
	const data229 = JSON.parse(jsonStrings);
	console.log(data229);
	console.log(data229.grade);
	console.log(data229.name);
} sec229();

/* ------------------------------------
sec230 オブジェクトをJSONに変換する
-------------------------------------*/

function sec230() {
	const data230 = { a: 1000, b: 'こんにちは' };
	const str230 = JSON.stringify(data230);
	console.log(str230);
} sec230();

/* ------------------------------------
sec231 JSONの変換時にインデントをつける
-------------------------------------*/

function sec231() {
	const data231 = { a: 1000, b: 'こんにちは' };
	//タブ
	let str231 = JSON.stringify(data231, null, '\t');
	console.log(str231);
	//スペース
	str231 = JSON.stringify(data231, null, '  ');
	console.log(str231);
} sec231();

/* ------------------------------------
sec232 JSONの変換時に数値の場合無効化し、文字列だけを変換する
-------------------------------------*/

function sec232() {
	const replacer = (key, value) => {
		//数値だったら無視する
		if (typeof value === 'number') {
			return undefined;
		}
		return value;
	};
	const obj232 = {
		pref: 'tokyo',
		orange: 100,
		pref2: 'osaka',
		apple: 200
	};
	const str232 = JSON.stringify(obj232, replacer, '  ');
	alert(str232);
}

/* ------------------------------------
sec233 fetch()メソッドでテキストを読み込む
-------------------------------------*/

function sec233() {
	const log233 = document.querySelector('.log233');
	//Promiseのみ
	fetch('sample.txt')
		.then((data) => data.text())
		.then((text) => {
			console.log(text);
		});
	//await・async
	async function load() {
		const data = await fetch('sample.txt');
		const text = await data.text();
		log233.innerHTML = text;
	}
	load();
}

/* ------------------------------------
sec234 fetch()メソッドでJSONを読み込む
-------------------------------------*/

function sec234() {
	const log234 = document.querySelector('.log234');
	//Promiseのみ
	fetch('sample.json')
		.then((data) => data.json())
		.then((obj) => {
			console.log(obj);
		});
	//await・async
	async function load() {
		//データ読み込み
		const data = await fetch('sample.json');
		//JSONとして解析
		const obj = await data.json();
		//テキストとして出力
		log234.innerHTML = JSON.stringify(obj, null, '  ');
	}
	load();
}

/* ------------------------------------
sec235 fetch()メソッドでXMLを読み込む
-------------------------------------*/

function sec235() {
	const log235 = document.querySelector('.log235');
	//Promiseのみ
	fetch('sample.xml')
		.then((response) => response.text())
		.then((str) => new DOMParser().parseFromString(str, 'application/xml'))
		.then((xml) => {
			console.log(xml);
			console.log(xml.querySelector('orange').innerHTML);
		});
	//await・async
	async function load() {
		//ファイル読み込み
		const response = await fetch('sample.xml');
		//テキストとして解析
		const text = await response.text();
		//XMLとして解析
		const xml = new DOMParser().parseFromString(text, 'application/xml');
		console.log(xml);
		//テキストを出力
		log235.textContent = text;
	}
	load();
}

/* ------------------------------------
sec236 fetch()メソッドでバイナリを読み込む
-------------------------------------*/

function sec236() {
	const log236 = document.querySelector('.log236');
	//Promiseのみ
	fetch('../img/chara.png')
		.then((response) => response.blob())
		.then((blob) => {
			const image = new Image();
			image.src = URL.createObjectURL(blob);
			log236.appendChild(image);
		});
	//await・async
	async function load() {
		//データ読み込み
		const response = await fetch('../img/chara.png');
		//blobとして解析
		const blob = await response.blob();
		//img要素作成
		const image = new Image();
		//blobをsrc属性に代入
		image.src = URL.createObjectURL(blob);
		//画面に表示
		log236.appendChild(image);
	}
	load();
}

/* ------------------------------------
sec238 XMLHttpRequestでテキストを読み込む
-------------------------------------*/

function sec238() {
	const log238 = document.querySelector('.log238');
	//XHRを作成
	const req = new XMLHttpRequest();
	//読み込み完了時のイベント
	req.addEventListener('load', (event) => {
		//レスポンスを受け取る
		const text = event.target.responseText;
		//テキストを出力
		log238.innerHTML = text;
	});
	//ファイル指定
	req.open('GET', 'sample.txt');
	//読み込み開始
	req.send();
}

/* ------------------------------------
sec239 XMLHttpRequestでデータの読み込み状況を取得する
-------------------------------------*/

function sec239() {
	const log239 = document.querySelector('.log239');
	const bar = document.querySelector('.bar');
	const percent = document.querySelector('.percent');
	const req = new XMLHttpRequest();
	//データの種類を設定
	req.responseType = 'blob';
	//読み込み進行時のイベント
	req.addEventListener('progress', (event) => {
		//読み込みの割合を算出（0〜1）
		const rate = event.loaded / event.total;
		bar.style.width = `${rate * 100}%`;
		percent.innerHTML = `${Math.floor(rate * 100)}%`;
	});
	//読み込み完了時のイベント
	req.addEventListener('load', (event) => {
		//レスポンスを受け取る
		const data = event.target.response;
		//画像データに変換
		const source = URL.createObjectURL(data);
		//画像作成
		const image = new Image();
		image.src = source;
		//画像を出力
		log239.appendChild(image);
	});
	req.open('GET', '../img/landscape.jpg');
	req.send();
}

/* ------------------------------------
sec240 50%の確率で読み込みを失敗するサンプル
-------------------------------------*/

function sec240() {
	const log240 = document.querySelector('.log240');
	const percent = document.querySelector('.percent240');
	const req = new XMLHttpRequest();
	req.responseType = 'blob';
	//読み込み進行時のイベント
	req.addEventListener('progress', (event) => {
		//読み込みの割合を算出（0〜1）
		const rate = event.loaded / event.total;
		percent.innerHTML = `${Math.floor(rate * 100)}%`;
	});
	//読み込み失敗時のイベント
	req.addEventListener('abort', (event) => {
		percent.innerHTML = '読み込みに失敗しました';
	});
	//読み込み完了時のイベント
	req.addEventListener('load', (event) => {
		const data = event.target.response;
		const source = URL.createObjectURL(data);
		const image = new Image();
		image.src = source;
		log240.appendChild(image);
	});
	req.open('GET', '../img/landscape.jpg');
	req.send();
	if (Math.random() > 0.5) {
		req.abort();
	}
}

/* ------------------------------------
sec241 Web Workerのサンプル
-------------------------------------*/

function sec241() {
	//参照を取得
	const numA = document.querySelector('#numA');
	const numB = document.querySelector('#numB');
	const result241 = document.querySelector('.result241');
	const btn = document.querySelector('.btn241');
	//ワーカーを作成
	const worker = new Worker('../js/worker.js');
	//クリックイベント
	btn.addEventListener('click', () => {
		worker.postMessage([Number(numA.value), Number(numB.value)]);
		console.log('[メインスクリプト]ワーカーへメッセージを送信');
	});
	//ワーカーから受信したとき
	worker.onmessage = function (e) {
		//結果を画面に表示
		result241.textContent = e.data;
		console.log('[メインスクリプト]ワーカーへメッセージを受信');
	}
} sec241();

/* ------------------------------------
sec242 ServiceWorkerのサンプル
-------------------------------------*/

function sec242() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('../js/worker.js')
			.then((registration) => {
				//登録成功
				console.log('ServiceWorkerの登録に成功');
			})
			.catch((error) => {
				//登録失敗
				console.log('ServiceWorkerの登録に失敗', error);
			});
	}
} sec242();

/* ------------------------------------
sec243 プッシュ通知を実行させる
-------------------------------------*/

function sec243() {
	const btn = document.querySelector('.btn243');
	btn.addEventListener('click', notify);
	//通知を試みる
	function notify() {
		switch (Notification.permission) {
			//デフォルト状態なら通知の許可を求める
			case 'default':
				Notification.requestPermission();
				break;
			//許可されているならNotificationで通知
			case 'granted':
				new Notification('Hello');
				break;
			//拒否されていればアラート
			case 'denied':
				alert('通知が拒否されています');
				break;
		}
	};
} sec243();