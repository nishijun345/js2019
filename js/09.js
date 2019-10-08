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

/* ------------------------------------
sec176 カラーピッカーの情報を取得
-------------------------------------*/

function sec176() {
	const color176 = document.querySelector('#color176');
	const value176 = color176.value;
	alert(value176);
}

/* ------------------------------------
sec177 カラーピッカーの情報を取得
-------------------------------------*/

function sec177() {
	const color177 = document.querySelector('#color177');
	const result177 = document.querySelector('.result177');
	color177.addEventListener('change', (e) => {
		const value177 = e.target.value;
		result177.innerHTML = value177;
		result177.style.backgroundColor = value177;
	});
} sec177();

/* ------------------------------------
sec178 都道府県のプルダウンをつくる
-------------------------------------*/

function sec178() {
	//JISコードに対応した都道府県の連想配列
	const prefList = [
		{ value: 1, name: '北海道' },
		{ value: 2, name: '青森県' },
		{ value: 3, name: '岩手県' },
		{ value: 4, name: '宮城県' },
		{ value: 5, name: '秋田県' },
		{ value: 6, name: '山形県' },
		{ value: 7, name: '福島県' },
		{ value: 8, name: '茨城県' },
		{ value: 9, name: '栃木県' },
		{ value: 10, name: '群馬県' },
		{ value: 11, name: '埼玉県' },
		{ value: 12, name: '千葉県' },
		{ value: 13, name: '東京都' },
		{ value: 14, name: '神奈川県' },
		{ value: 15, name: '新潟県' },
		{ value: 16, name: '富山県' },
		{ value: 17, name: '石川県' },
		{ value: 18, name: '福井県' },
		{ value: 19, name: '山梨県' },
		{ value: 20, name: '長野県' },
		{ value: 21, name: '岐阜県' },
		{ value: 22, name: '静岡県' },
		{ value: 23, name: '愛知県' },
		{ value: 24, name: '三重県' },
		{ value: 25, name: '滋賀県' },
		{ value: 26, name: '京都府' },
		{ value: 27, name: '大阪府' },
		{ value: 28, name: '兵庫県' },
		{ value: 29, name: '奈良県' },
		{ value: 30, name: '和歌山県' },
		{ value: 31, name: '鳥取県' },
		{ value: 32, name: '島根県' },
		{ value: 33, name: '岡山県' },
		{ value: 34, name: '広島県' },
		{ value: 35, name: '山口県' },
		{ value: 36, name: '徳島県' },
		{ value: 37, name: '香川県' },
		{ value: 38, name: '愛媛県' },
		{ value: 39, name: '高知県' },
		{ value: 40, name: '福岡県' },
		{ value: 41, name: '佐賀県' },
		{ value: 42, name: '長崎県' },
		{ value: 43, name: '熊本県' },
		{ value: 44, name: '大分県' },
		{ value: 45, name: '宮崎県' },
		{ value: 46, name: '鹿児島県' },
		{ value: 47, name: '沖縄県' }
	];
	//select
	const selectElement = document.querySelector('#pref');
	//option初期表示
	let optionString = '<option value="">選択ください</option>';
	//optionを配列から作成
	prefList.forEach((item) => {
		//都道府県ごとにvalueとnameを反映
		optionString += `<option value="${item.value}">${item.name}</option>`;
	});
	//optionをselectに追加
	selectElement.innerHTML = optionString;
	//変更時のイベント
	selectElement.addEventListener('change', (e) => {
		//現在の値
		const index = e.target.selectedIndex;
		const value178 = e.target.options[index].text;
		console.log(value178);
		//メッセージ作成（三項演算子）
		const message = value178 === '' ? '選択されていません' : `選択されているのは${value178}です`;
		document.querySelector('.log178').innerHTML = message;
	});
} sec178();

/* ------------------------------------
sec179 フォームの送信時に処理を行う
-------------------------------------*/

function sec179() {
	const form179 = document.querySelector('#form179');
	form179.addEventListener('submit', handleSubmit);

	function handleSubmit(e) {
		const isYes = confirm('この内容で送信していいです？');
		if (isYes === false) {
			e.preventDefault();
		}
	}
} sec179();