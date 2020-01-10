/* ------------------------------------
sec244 localStorageの保存・読み出し
-------------------------------------*/

function sec244() {
	const section = document.querySelector('.box244');
	const btnRead = section.querySelector('.btnRead');
	const btnSave = section.querySelector('.btnSave');
	const input = section.querySelector('.input');
	//保存
	btnSave.addEventListener('click', () => {
		//文字列取得
		const data = input.value;
		//ローカルストレージに保存
		localStorage.setItem('myKey', data);
		input.value = '';
	});
	//読み出し
	btnRead.addEventListener('click', () => {
		//ローカルストレージから読み出し
		const data = localStorage.getItem('myKey');
		//文字列に代入
		input.value = data;
	});
} sec244();

/* ------------------------------------
sec245 localStorageの保存・読み出し
-------------------------------------*/

function sec245() {
	const section = document.querySelector('.box245');
	const btnRead = section.querySelector('.btnRead');
	const btnSave = section.querySelector('.btnSave');
	const btnRemove = section.querySelector('.btnRemove');
	const btnClear = section.querySelector('.btnClear');
	const inputUser = section.querySelector('.user');
	const inputPass = section.querySelector('.pass');
	//保存
	btnSave.addEventListener('click', () => {
		const dataUser = inputUser.value;
		const dataPass = inputPass.value;
		localStorage.setItem('user', dataUser);
		localStorage.setItem('pass', dataPass);
	});
	//読み出し
	btnRead.addEventListener('click', () => {
		const dataUser = localStorage.getItem('user');
		const dataPass = localStorage.getItem('pass');
		inputUser.value = dataUser;
		inputPass.value = dataPass;
	});
	//一部削除
	btnRemove.addEventListener('click', () => {
		localStorage.removeItem('pass');
	});
	//クリア
	btnClear.addEventListener('click', () => {
		localStorage.clear();
	});
} sec245();