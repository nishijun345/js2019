/* ------------------------------------
sec269 ESモジュール
-------------------------------------*/
//import
import { MyClass1 } from '../js/myClass1.js';
import { MyClass2 } from '../js/myClass2.js';

function sec269() {
	//文字列取得
	const txt1 = new MyClass1().myMethod1();
	const txt2 = new MyClass2().myMethod2();
	//出力
	document.querySelector('.txt1').innerHTML = txt1;
	document.querySelector('.txt2').innerHTML = txt2;
} sec269();

/* ------------------------------------
sec273 反復処理のためのイテレータを使う
-------------------------------------*/

function sec273() {
	const array = ['あか', 'あお', 'みどり'];
	const iterator = array[Symbol.iterator]();
	const next1 = iterator.next();
	console.log(next1.value);
	console.log(next1.done);
	const next2 = iterator.next();
	console.log(next2.value);
	console.log(next2.done);
	const next3 = iterator.next();
	console.log(next3.value);
	console.log(next3.done);
	const next4 = iterator.next();
	console.log(next4.value);
	console.log(next4.done);
} sec273();

/* ------------------------------------
sec274 イテレータを自作する（ジェネレータ）
-------------------------------------*/

function sec274() {
	//ジェネレータの定義
	function* range(start, end) {
		let result = start;
		while (result <= end) {
			yield result;
			result++;
		}
	}
	//使用例
	for (let value of range(2, 6)) {
		document.querySelector('.result274').append(`${value},`);
	}
} sec274();

/* ------------------------------------
sec275 Symbol
-------------------------------------*/

function sec275() {
	const symbol1 = Symbol();
	const symbol2 = Symbol();
	const symbol3 = Symbol('しんぼる');
	const symbol4 = Symbol(100);
	console.log(symbol1);
	console.log(symbol2);
	console.log(symbol3);
	console.log(symbol4);
} sec275();

/* ------------------------------------
sec276 prototype
-------------------------------------*/

function sec276() {
	//Symbol生成
	const shuffle = Symbol();
	//独自メソッドの追加
	Array.prototype[shuffle] = function () {
		//シャッフル処理
		const arrayLength = this.length;
		for (let i = arrayLength - 1; i >= 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[this[i], this[randomIndex]] = [this[randomIndex], this[i]];
		}
		//自身を返す
		return this;
	};
	//配列の各数値を偶数を抜き出しシャッフルして100倍する
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let result = array
		.filter((value) => value % 2 === 0)[shuffle]()
		.map((value) => value * 100);
	document.querySelector('.btn276').addEventListener('click', () => {
		document.querySelector('.result276').innerHTML = result;
	});

	console.dir(String.prototype);
	console.dir(Array.prototype);
	console.dir(Date.prototype);
} sec276();

/* ------------------------------------
sec277 Map
-------------------------------------*/

function sec277() {
	//マップの初期化
	const list = new Map();

	//マップの初期化（初期値設定）
	const list2 = new Map([[20, 'あお'], [50, 'あか']]);

	//マップに値を設定
	list.set(20, 'あお').set(50, 'あか').set(100, 'みどり');

	//マップから値を取得
	list.get(20); //'あお'

	//マップの存在をチェック
	list.has(100); //true

	//マップのペア数の取得
	list.size; //3

	//各キーの抽出
	const keyList = list.keys();
	for (let key of keyList) {
		console.log(key); //キーが順番に出力
	}

	//各値の抽出
	const valueList = list.values();
	for (let value of valueList) {
		console.log(value); //値が順番に出力
	}

	//各ペアの抽出
	const entryList = list.entries();
	for (let entry of entryList) {
		console.log(entry); //ペアが順番に出力
	}

	//各ペアの抽出（forEach）
	list.forEach((value, key) => {
		console.log(`${key} : ${value}`); //ペアが順番に出力
	});
} sec277();

/* ------------------------------------
sec278 Set
-------------------------------------*/

function sec278() {
	//セットの初期化
	const list = new Set();

	//セットの初期化（初期値設定）
	const list2 = new Set([20, 50]);

	//セットに値を設定
	list.add(20).add(50).add(100);

	//セットの存在をチェック
	list.has(100); //true

	//要素の数を取得
	list.size; //3

	//各値の抽出
	const valueList = list.values();
	for (let value of valueList) {
		console.log(value); //値が順番に出力
	}

	//各値の抽出（forEach）
	list.forEach((value) => {
		console.log(`IDは${value}`); //値が順番に出力
	});

	//同一の値をセット（無視される）
	list.add(100);
	//スプレッド演算子で配列に変換
	const array = [...list];
	console.log(array); //100は一つしか追加されてない
} sec278();