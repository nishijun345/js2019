/* ------------------------------------
sec161 テキストボックスの値を取得
-------------------------------------*/

function sec161() {
	const value161 = document.querySelector('#input161').value;
	if (value161) {
		alert(value161);
	} else {
		alert('テキストを入力してください');
	}
}

/* ------------------------------------
sec162 テキストボックスの変更を検知
-------------------------------------*/

function sec162() {
	const form162 = document.querySelector('#form162');
	const input162 = document.querySelector('#input162');
	const result162i = document.querySelector('.result162i');
	const result162c = document.querySelector('.result162c');
	input162.addEventListener('input', handleInput);
	input162.addEventListener('change', handleChange);
	function handleInput(event) {
		const value162 = event.target.value;
		result162i.innerHTML = value162;
	}
	function handleChange(event) {
		const value162 = event.target.value;
		result162c.innerHTML = value162;
	}
	//enterで遷移させない
	form162.addEventListener('submit', (e) => {
		if (e.target.type !== "submit") {
			e.preventDefault();
		}
	});
} sec162();

/* ------------------------------------
sec163 テキストエリアの値を取得
-------------------------------------*/

function sec163() {
	const value163 = document.querySelector('#input163').value;
	if (value163) {
		alert(value163);
	} else {
		alert('テキストを入力してください');
	}
}

/* ------------------------------------
sec164 テキストエリアの変更を検知
-------------------------------------*/

function sec164() {
	const input164 = document.querySelector('#input164');
	const result164i = document.querySelector('.result164i');
	const result164c = document.querySelector('.result164c');
	input164.addEventListener('input', handleInput);
	input164.addEventListener('change', handleChange);
	function handleInput(event) {
		const value164 = event.target.value;
		const htmlstr = value164.split('\n').join('<br>');
		result164i.innerHTML = htmlstr;
	}
	function handleChange(event) {
		const value164 = event.target.value;
		result164c.innerHTML = value164;
	}
} sec164();

/* ------------------------------------
sec166 チェックボックスの情報を取得
-------------------------------------*/

function sec166() {
	const checkedA = document.querySelector('#checkA');
	const checkedB = document.querySelector('#checkB');
	const checkedC = document.querySelector('#checkC');
	document.querySelectorAll('.check166').forEach(function (checkBtn) {
		checkBtn.addEventListener('change', () => {
			checkResult();
		});
	});
	document.querySelector('#checkAll').addEventListener('click', (e) => {
		if (e.target.checked == true) {
			checkedA.checked = checkedB.checked = checkedC.checked = true;
		} else {
			checkedA.checked = checkedB.checked = checkedC.checked = false;
		}
		checkResult();
	});
	function checkResult() {
		document.querySelector('.checkA').innerHTML = checkedA.checked;
		document.querySelector('.checkB').innerHTML = checkedB.checked;
		document.querySelector('.checkC').innerHTML = checkedC.checked;
	}
} sec166();

/* ------------------------------------
sec167 ローカルファイルの情報を取得
-------------------------------------*/

function sec167() {
	const input167 = document.querySelector('#input167');
	input167.addEventListener('change', (e) => {
		const files = e.target.files;    //ファイルの配列
		const file = files[0];
		alert(`${file.name}が選択されました`);
	});
} sec167();

/* ------------------------------------
sec168 ローカルファイルをテキストとして読み込む
-------------------------------------*/

function sec168() {
	const input168 = document.querySelector('#input168');
	const log = document.querySelector('.log168');
	input168.addEventListener('input', (e) => {
		const files = e.target.files;
		const file = files[0];
		//FileReaderのインスタンス作成
		const reader = new FileReader();
		reader.addEventListener('load', () => {
			//load後resultを.logに出力
			log.textContent = reader.result;
		});
		//テキストファイルとして読み込む
		reader.readAsText(file);
	});
} sec168();

/* ------------------------------------
sec169 ローカルファイルをDataURLとして読み込む
-------------------------------------*/

function sec169() {
	const input169 = document.querySelector('#input169');
	const log = document.querySelector('.log169 img');
	input169.addEventListener('input', (e) => {
		const files = e.target.files;
		const file = files[0];
		//FileReaderのインスタンス作成
		const reader = new FileReader();
		reader.addEventListener('load', () => {
			//load後resultを.logに出力
			log.src = reader.result;
		});
		//テキストファイルとして読み込む
		reader.readAsDataURL(file);
	});
} sec169();

/* ------------------------------------
sec171 ラジオボタンの変更を検知
-------------------------------------*/

function sec171() {
	const form171 = document.querySelector('#form171');
	const color171 = document.querySelector('.color171 span');
	const food171 = document.querySelector('.food171 span');
	form171.addEventListener('change', handleChange);

	function handleChange(e) {
		const colorValue = form171.color.value;
		const foodValue = form171.food.value;
		color171.innerHTML = colorValue;
		food171.innerHTML = foodValue;
	}
} sec171();

/* ------------------------------------
sec173 ドロップダウンメニューの変更を検知
-------------------------------------*/

function sec173() {
	const select173 = document.querySelector('#select173');
	const result173 = document.querySelector('.result173 span');
	select173.addEventListener('change', handleChange);

	function handleChange(e) {
		const selectValue = select173.value;
		result173.innerHTML = selectValue;
	}
} sec173();

/* ------------------------------------
sec174 スライダーの情報を取得
-------------------------------------*/

function sec174() {
	const range174 = document.querySelector('#range174');
	const result174 = document.querySelector('.result174');
	const value174 = range174.value;
	result174.innerHTML = value174;
}

/* ------------------------------------
sec175 スライダーの情報を取得
-------------------------------------*/

function sec175() {
	const range175 = document.querySelector('#range175');
	const result175i = document.querySelector('.result175i');
	const result175c = document.querySelector('.result175c');
	range175.addEventListener('input', handleInput);
	range175.addEventListener('change', handleChange);
	function handleInput(e) {
		const value175 = e.target.value;
		result175i.innerHTML = value175;
	}
	function handleChange(e) {
		const value175 = e.target.value;
		result175c.innerHTML = value175;
	}
} sec175();