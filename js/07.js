/* ------------------------------------
sec114 addEventListener
-------------------------------------*/

function sec114() {
	const button = document.querySelector('#btn114');
	button.addEventListener('click', (event) => {
		//イベントの情報を出力する
		alert(event);
		//クリックされたボタン要素が出力される
		alert(event.target);
	});
} sec114();

