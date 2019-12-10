/* ------------------------------------
sec191 画像をスクリプトで読み込む
-------------------------------------*/

function sec191() {
	const btn191 = document.querySelector('.btn191');
	btn191.addEventListener('click', imgShow);

	function imgShow() {
		const photo191 = document.querySelector('#photo191');
		photo191.src = '../img/land.jpeg'
	}
} sec191();

/* ------------------------------------
sec192 画像の読み込み完了時に処理をする
-------------------------------------*/

function sec192() {
	const photo192 = document.querySelector('#photo192');
	photo192.src = '../img/okura_anime.png';
	photo192.classList.add('loading');
	photo192.onload = () => {
		photo192.classList.remove('loading');
	};
} sec192();

/* ------------------------------------
sec193 画像を遅延読み込みさせる
-------------------------------------*/

function sec193() {
	const srcMap = new Map();
	window.addEventListener('DOMContentLoaded', () => {
		//画像をすべて参照
		const photo193 = document.querySelectorAll('.photo193');
		photo193.forEach((img) => {
			//各imgのdata-srcをMapに保存
			srcMap.set(img, img.dataset.src);
		});
	});
	
	const btn193 = document.querySelector('.btn193');
	btn193.addEventListener('click', () => {
		const photo193 = document.querySelectorAll('.photo193');
		photo193.forEach((img) => {
			//保存していたMapからsrcを割り当てる
			const source = srcMap.get(img);
			img.src = source;
		});
	});
} sec193();

/* ------------------------------------
sec194 Base64の画像を表示する
-------------------------------------*/
//194.jsに記述

/* ------------------------------------
sec195 スクリプトからimg要素を追加する
-------------------------------------*/

function sec195() {
	const photo195 = document.querySelector('.photo195');
	for (let i = 0; i < 10; i++) {
		//Imageオブジェクト作成
		const img = new Image();
		img.src = `../img/photo-${i}.jpg`;
		photo195.appendChild(img);
	}
};

/* ------------------------------------
sec197 音声をスクリプトで制御する
-------------------------------------*/

function sec197() {
	const audio197 = document.querySelector('#audio197');
	document.querySelector('#audio197Play').addEventListener('click', function () {
		audio197.play();
	});
	document.querySelector('#audio197Pause').addEventListener('click', function () {
		audio197.pause();
	});
} sec197();

/* ------------------------------------
sec198 音声をスクリプトで制御する
-------------------------------------*/

function sec198() {
	const audio198 = document.querySelector('#audio198');
	const btn198 = document.querySelector('.btn198');
	audio198.addEventListener('loadedmetadata', () => {
		document.querySelector('.duration198').innerHTML = `この音声のdurationは「${audio198.duration}」秒`;
	});
	btn198.addEventListener('click', () => {
		audio198.currentTime += 3.0;
	});
} sec198();

/* ------------------------------------
sec199 音声のボリュームを変更する
-------------------------------------*/

function sec199() {
	const audio199 = document.querySelector('#audio199');
	const volumeMin199 = document.querySelector('.volumeMin199');
	const volumeMax199 = document.querySelector('.volumeMax199');
	const mutedTrue199 = document.querySelector('.mutedTrue199');
	const mutedFalse199 = document.querySelector('.mutedFalse199');
	function isMuted() {
		alert(`mutedは${audio199.muted}、volumeは${audio199.volume}`);
	};
	volumeMax199.addEventListener('click', () => {
		audio199.volume = 1;
		isMuted();
	});
	volumeMin199.addEventListener('click', () => {
		audio199.volume = 0;
		isMuted();
	});
	mutedTrue199.addEventListener('click', () => {
		audio199.muted = true;
		isMuted();
	});
	mutedFalse199.addEventListener('click', () => {
		audio199.muted = false;
		isMuted();
	});
} sec199();

/* ------------------------------------
sec200 Web Audio API
-------------------------------------*/
let source200;
async function loadAndPlay200() {
	const context = new AudioContext();
	//ファイル読み込み
	const data = await fetch('../img/music.mp3');
	//ArrayBufferとして扱う
	const buffer = await data.arrayBuffer();
	//オーディオデータとして変換
	const decodedBuffer = await context.decodeAudioData(buffer);
	//ソース作成
	source200 = context.createBufferSource();
	//ソースにオーディオデータを割り当てる
	source200.buffer = decodedBuffer;
	//スピーカーをつなげる
	source200.connect(context.destination);
	//再生を開始
	source200.start(0);
}
function stop200() {
	source200.stop();
}

/* ------------------------------------
sec202 動画をスクリプトで制御
-------------------------------------*/

function sec202() {
	const video202 = document.querySelector('#video202');
	document.querySelector('#video202Play').addEventListener('click', function () {
		video202.play();
	});
	document.querySelector('#video202Pause').addEventListener('click', function () {
		video202.pause();
	});
} sec202();

/* ------------------------------------
sec203 カメラを使う
-------------------------------------*/

let stream;
//loadAndPlay
async function loadAndPlay203() {
	const video203 = document.getElementById('video203');
	stream = await getDeviceStream({
		video: { width: 640, height: 320 },
		audio: false
	});
	video203.srcObject = stream;
}
//stop
function stop203() {
	const video203 = document.getElementById('video203');
	const tracks = stream.getTracks();
	tracks.forEach((track) => {
		track.stop();
	});
	video203.srcObject = null;
}
//getDeviceStream
function getDeviceStream(option) {
	if ('getUserMedia' in navigator.mediaDevices) {
		return navigator.mediaDevices.getUserMedia(option);
	} else {
		return new Promise(function (resolve, reject) {
			navigator.getUserMedia(option, resolve, reject);
		});
	}
}