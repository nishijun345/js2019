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

/* ------------------------------------
sec223 1秒後に続く処理をPromiseを使って実行
-------------------------------------*/

function sec223() {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			//resolve()を呼び出すとPromiseの処理が完了
			resolve('次の処理');
		}, 1000);
	});
	//then()で続く処理を記述
	promise.then((value) => {
		alert(value);
	});
}

/* ------------------------------------
sec224 Promiseで処理の成功時・失敗時の処理を行う
-------------------------------------*/

function sec224() {
	let flag;
	document.querySelector('.resolve').addEventListener('click', () => {
		flag = true;
		promise224();
	});
	document.querySelector('.reject').addEventListener('click', () => {
		flag = false;
		promise224();
	});

	function promise224() {
		const promise = new Promise((resolve, reject) => {
			if (flag === true) {
				resolve('成功');
			} else {
				reject('失敗');
			}
		});
		//then
		promise.then((value) => {
			alert(value);
		});
		//catch
		promise.catch((value) => {
			alert(value);
		});
	}

	//メソッドチェーンで記述
	function sample() {
		new Promise((resolve, reject) => {
			if (flag === true) {
				resolve('成功');
			} else {
				reject('失敗');
			}
		})
		.then((value) => {
			alert(value);
		})
		.catch((value) => {
			alert(value);
		});
	}
} sec224();

/* ------------------------------------
sec225 Promiseで並列処理をする
-------------------------------------*/

function sec225() {
	//非同期処理を行う関数の配列を作成
	const arrFunc = [];
	const log225 = document.querySelector('.log225');
	for (let i = 0; i < 5; i++) {
		//非同期処理を行う関数
		const func = (resolve) => {
			log225.insertAdjacentHTML('beforeend', `処理${i}を開始、`);
			//0〜3秒で遅延
			const delayMsec = 3000 * Math.random();
			//遅延処理
			setTimeout(() => {
				log225.insertAdjacentHTML('beforeend', `<p>処理${i}が完了</p>`);
				resolve();
			}, delayMsec);
		};
		//配列に保存
		arrFunc.push(func);
	}
	//上の配列をPromiseの配列に変換
	const arrPromise = arrFunc.map((func) => new Promise(func));
	//並列処理を実行
	Promise.all(arrPromise).then(() => {
		alert('すべての処理が完了しました');
	});
}

/* ------------------------------------
sec226 Promiseで直列処理をする
-------------------------------------*/

function sec226() {
	//Promiseのみ
	function promise226() {
		Promise.resolve()
			.then(
				() => new Promise((resolve) => {
					setTimeout(() => {
						alert('1つ目のPromise（Promiseのみ）');
						resolve();
					}, 1000);
				})
			)
			.then(
				() => new Promise((resolve) => {
					setTimeout(() => {
						alert('2つ目のPromise（Promiseのみ）');
						resolve();
					}, 1000);
				})
			);
	}
	//await・async
	async function async226() {
		await new Promise((resolve) => {
			setTimeout(() => {
				alert('1つ目のPromise（await・async）');
				resolve();
			}, 1000);
		});
		await new Promise((resolve) => {
			setTimeout(() => {
				alert('2つ目のPromise（await・async）');
				resolve();
			}, 1000);
		});
	}
	//clickEvent
	document.querySelector('.promise226').addEventListener('click', function () {
		promise226();
	});
	document.querySelector('.async226').addEventListener('click', function () {
		async226();
	});
} sec226();

/* ------------------------------------
sec227 Promiseで動的に直列処理をする
-------------------------------------*/

function sec227() {
	const log227 = document.querySelector('.log227');
	//配列を作成
	const listFuctions = [];
	//動的に関数を追加
	for (let i = 0; i < 5; i++) {
		//1秒後に処理をする非同期関数を作成
		const func = (resolve) => {
			setTimeout(() => {
				log227.insertAdjacentHTML('beforeend', `処理${i}が完了、`);
				resolve(); //Promiseを完了
			}, 1000);
		};
		//配列に保存
		listFuctions.push(func);
	}
	//execute()
	async function execute() {
		//非同期処理を順番に実行
		for (let i = 0; i < listFuctions.length; i++) {
			const func = listFuctions[i];
			await new Promise(func);
		}
	}
	document.querySelector('.btn227').addEventListener('click', () => {
		execute();
	});
} sec227();