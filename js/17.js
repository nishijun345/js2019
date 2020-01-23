/* ------------------------------------
sec251 情報・エラー・警告を出力する
-------------------------------------*/

function sec251() {
	console.log('ログ');
	console.info('情報');
	console.warn('警告');
	console.error('エラー');
}

/* ------------------------------------
sec252 オブジェクトの構造を出力する
-------------------------------------*/

function consoleDir() {
	const myObj = {
		id: 5,
		name: 'なまえ'
	};
	console.dir(myObj);
	//bodyの構造を出力
	//console.dir(document.body);
}
function consoleTable() {
	const myArr = [
		{id: 100, age: 25, name: 'あか'},
		{id: 50, age: 5, name: 'くろ'},
		{id: 1000, age: 88, name: 'みどり'}
	]
	console.table(myArr);
}

/* ------------------------------------
sec253 エラーを発生させる
-------------------------------------*/

function sec253() {
	const a = 10;
	a = 20;
}

/* ------------------------------------
sec254 Errorオブジェクトを生成する
-------------------------------------*/

function sec254() {
	const error = new Error('エラーが発生しました');
	console.log(error.message);
}

/* ------------------------------------
sec255 エラーを投げる
-------------------------------------*/

function sec255() {
	function myFunc(value) {
		if (typeof value !== 'number') {
			const error = new Error(`「${value}」はNumberではありません`);
			alert(error.message);
			//エラーを投げる
			throw error;
		}
		alert(`「${value}」はNumberです`);
	}
	let inputValue = document.querySelector('#input255').value;
	if (!isNaN(inputValue)) {
		inputValue = parseInt(inputValue);
	}
	myFunc(inputValue);
}

/* ------------------------------------
sec256 エラー発生時にエラーを検知する
-------------------------------------*/

function sec256() {
	const a = 10;
	try {
		a = 20;
	} catch(error) {
		console.log(`エラーが発生しました${error.message}`);
	}
	//中断されることなく実行される
	alert(`定数aの値は${a}です`);
}

/* ------------------------------------
sec257 エラー発生時にもコードを実行する
-------------------------------------*/

function sec257() {
	try {
		//50%の確率でエラーを発生させる
		if (Math.random() > 0.5) {
			throw new Error();
		} else {
			alert('エラーなし');
		}
	} catch(error) {
		alert('エラー発生！！');
	} finally {
		alert('エラー処理完了（finally）')
	}
}