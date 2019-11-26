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