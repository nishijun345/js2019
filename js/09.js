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
sec165 チェックボックスの情報を取得
-------------------------------------*/

function sec165() {
	document.querySelectorAll('.check165').forEach(function (checkBtn) {
		checkBtn.addEventListener('click', () => {
			checkChange();
		});
	});
	function checkChange() {
		const checkedA = document.querySelector('#checkA').checked;
		const checkedB = document.querySelector('#checkB').checked;
		const checkedC = document.querySelector('#checkC').checked;
		document.querySelector('.checkA').innerHTML = checkedA;
		document.querySelector('.checkB').innerHTML = checkedB;
		document.querySelector('.checkC').innerHTML = checkedC;
	}
} sec165();
