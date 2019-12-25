/* ------------------------------------
sec219 現在時刻とsetTimeout後の時刻を表示するサンプル
-------------------------------------*/

function sec219() {
	let time219 = document.querySelector('#time219');
	time219.innerHTML = '起動時の時刻' + new Date().toLocaleTimeString();
	setTimeout(() => {
		time219.innerHTML = 'setTimeout後の時刻' + new Date().toLocaleTimeString();
	}, 1000);
}

/* ------------------------------------
sec221 現在時刻とsetInterval後の時刻を表示するサンプル
-------------------------------------*/

function sec221() {
	let time221 = document.querySelector('#time221');
	time221.innerHTML = '起動時の時刻' + new Date().toLocaleTimeString();
	setInterval(() => {
		time221.innerHTML = 'setInterval後の時刻' + new Date().toLocaleTimeString();
	}, 1000);
}

/* ------------------------------------
sec222 現在時刻の表示を5秒後に解除するサンプル
-------------------------------------*/

function sec222() {
	let count = 0;
	let time222 = document.querySelector('#time222');
	time222.innerHTML = '起動時の時刻' + new Date().toLocaleTimeString();
	const intervalId = setInterval(timer222, 1000);
	function timer222() {
		count += 1;
		time222.innerHTML = 'setInterval後の時刻' + new Date().toLocaleTimeString();
		if (count === 5) {
			clearInterval(intervalId);
		}
	};
}