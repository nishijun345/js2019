/* ------------------------------------
sec047 forEach
-------------------------------------*/

function sec047() {
	const userList =  [
		{name: '山口', part: 'vo'},
		{name: '岩寺', part: 'gt'},
		{name: '草刈', part: 'ba'},
		{name: '江島', part: 'dr'},
		{name: '岡崎', part: 'key'}
	];

	const resultArea = document.querySelector('.result047');
	userList.forEach((userData) => {
		resultArea.innerHTML += `<p>${userData.name} ${userData.part}</p>`;
	});
}


/* ------------------------------------
sec050 unshift() push()
-------------------------------------*/

function sec050() {
	const fishArray = ['マグロ', 'カツオ', 'タイ'];
	const unshiftTxt = document.getElementById("unshift050").value;
	const pushTxt = document.getElementById("push050").value;
	if (unshiftTxt) {
		fishArray.unshift(unshiftTxt);
	}
	if (pushTxt) {
		fishArray.push(pushTxt);
	}
	alert(fishArray);
}



/* ------------------------------------
sec059 オブジェクトを含む配列のソート
-------------------------------------*/

function sec059() {
	const userDataList = [
		{id: 2, name: 'あか'},
		{id: 20, name: 'みどり'},
		{id: 5, name: 'くろ'},
		{id: 67, name: 'こん'},
		{id: 33, name: 'しろ'}
	];

	//表示を更新
	function updateList() {
		let listHtml = '';
		for (const data of userDataList) {
			listHtml += `<li>${data.id} : ${data.name}</li>`;
		}
		document.querySelector('.userList').innerHTML = listHtml;
	}
	updateList();

	//昇順にソート
	function sortByAscending() {
		userDataList.sort((a, b) => {
			return a.id - b.id;
		});
		updateList();
	}
	//降順にソート
	function sortByDescending() {
		userDataList.sort((a, b) => {
			return b.id - a.id;
		});
		updateList();
	}

	document.querySelector('.ascending').addEventListener('click', (event) => {
		sortByAscending();
	});

	document.querySelector('.descending').addEventListener('click', (event) => {
		sortByDescending();
	});
}
sec059();



/* ------------------------------------
sec062 filter()
-------------------------------------*/

function sec062() {
	const userList = [
		{ age: 12, name: 'あか' },
		{ age: 20, name: 'みどり' },
		{ age: 32, name: 'こん' },
		{ age: 48, name: 'しろ' },
		{ age: 54, name: 'くろ' }
	];

	//初期表示
	let listHtml = '';
	for (const data of userList) {
		listHtml += `<li>${data.name} : ${data.age}歳</li>`;
	}
	document.querySelector('.userList062').innerHTML = listHtml;

	//buttonにイベント
	document.querySelectorAll('.btn062').forEach((element) => {
		element.addEventListener('click', (event) => {
			onClickButton(event);
		})
	});

	//クリックイベント
	function onClickButton(event) {
		//クリックされたボタン
		const button = event.target;
		//data-ageを取得
		const targetAge = button.dataset.age;
		//targetAge以上のユーザー配列を生成
		const filterdList = userList.filter((data) => data.age >= targetAge);
		//配列を出力
		updateList(filterdList);
	}

	//ユーザー配列を出力
	function updateList(filterdList) {
		listHtml = '';
		for (const data of filterdList) {
			listHtml += `<li>${data.name} : ${data.age}歳</li>`;
		}
		document.querySelector('.userList062').innerHTML = listHtml;
	}
}
sec062();



/* ------------------------------------
sec066 配列のシャッフル
-------------------------------------*/

function sec066() {
	const numArray = [1, 2, 3, 4, 5, 6];
	const shuffled = shuffleArray(numArray);
	alert(shuffled);

	//シャッフルする関数を定義
	function shuffleArray(sourceArr) {
		//元の配列の複製
		const array = sourceArr.concat();
		//Fisher Yatesのアルゴリズム
		const arrayLength = array.length;
		for (let i = arrayLength - 1; i >= 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i + 1));
			[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
		}
		return array;
	}
}