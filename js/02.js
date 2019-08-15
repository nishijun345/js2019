/* ------------------------------------
sec020 真偽値
-------------------------------------*/

function sec020() {
	const num = 1;
	alert(`num = 1の反転は${!num}`);

	const name = '';
	alert(`name =  \' \'の反転は${!name}`);
}



/* ------------------------------------
sec023 ランダム
-------------------------------------*/

function sec023() {
	const randomArray = crypto.getRandomValues(new Uint16Array(3));
	const password = randomArray.join('');
	alert(password);
}



/* ------------------------------------
sec029 文字列の検索（インデックスを調べる）
-------------------------------------*/

function sec029() {
	const inputTxt = document.getElementById("input029").value,
		targetTxt = document.getElementById("target029").value,
		searchTxt = new RegExp(targetTxt);
	alert('最初に現れるインデックスは' + inputTxt.indexOf(targetTxt));
	alert('最後に現れるインデックスは' + inputTxt.lastIndexOf(targetTxt));
	alert('正規表現にマッチするインデックスは' + inputTxt.search(searchTxt));
}



/* ------------------------------------
sec030 文字列の検索（含まれているかを調べる）
-------------------------------------*/

function sec030() {
	const inputTxt = document.getElementById("input030").value,
		targetTxt = document.getElementById("target030").value;
	alert(`「${inputTxt}」に「${targetTxt}」は含まれるか：${inputTxt.includes(targetTxt)}`);
	alert(`「${inputTxt}」の最初は「${targetTxt}」で始まるか：${inputTxt.startsWith(targetTxt)}`);
	alert(`「${inputTxt}」の最後は「${targetTxt}」で終わるか：${inputTxt.endsWith(targetTxt)}`);
}



/* ------------------------------------
sec033 〇文字目～〇文字だけ取り出す
-------------------------------------*/

function sec033() {
	const inputTxt = document.getElementById("input033").value,
		startNum = document.getElementById("start033").value,
		targetNum = document.getElementById("target033").value;
	
	alert(`「${inputTxt}」の「${startNum}文字目」から「${targetNum}文字」取り出すと【${inputTxt.substr((startNum - 1), targetNum)}】`);
}



/* ------------------------------------
sec037 文字列の検索（含まれているかを調べる）
-------------------------------------*/

function sec037() {
	const inputTxt = document.getElementById("input037").value;
	alert(`小文字に変換→「${inputTxt.toLowerCase()}」\n大文字に変換→「${inputTxt.toUpperCase()}」`);
}



/* ------------------------------------
sec038 テンプレート文字列
-------------------------------------*/

function sec038() {
	const msg = `10 + 10は${10 + 10}です
20 - 2は${20 - 2}です`
	alert(msg);
}



/* ------------------------------------
sec040 正規表現（電話番号）
-------------------------------------*/

function sec040() {
	const phoneNumber = document.getElementById("input040").value;
	const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

	if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
		alert('電話番号を正しく入力してください。');
	} else {
		alert('OK');
	}

}



/* ------------------------------------
sec041 桁数指定
-------------------------------------*/

function sec041() {
	const inputNum = document.getElementById("input041").value,
		targetNum = document.getElementById("target041").value,
		result = `【toFixedの場合】${parseFloat(inputNum).toFixed(parseInt(targetNum))}
【toPrecisionの場合】${parseFloat(inputNum).toPrecision(parseInt(targetNum))}`;
	
	alert(result);
}


/* ------------------------------------
sec042 桁数指定
-------------------------------------*/

function sec042Time() {
	const hourEl = document.querySelector('.hour');
	const secondEl = document.querySelector('.second');
	const minuteEl = document.querySelector('.minute');

	update();

	function update() {
		const currentTime = new Date();
		hourEl.innerText = addZeroPadding(currentTime.getHours());
		secondEl.innerText = addZeroPadding(currentTime.getSeconds());
		minuteEl.innerText = addZeroPadding(currentTime.getMinutes());

		//次のフレームで再度update()を実行
		requestAnimationFrame(update);

		function addZeroPadding(num) {
			//冒頭に0をつける
			return String(num).padStart(2, '0');
		}
	}
}
sec042Time();



/* ------------------------------------
sec043 ハッシュタグ付きツイート
-------------------------------------*/

function sec043() {
	document.querySelector('#button043').addEventListener('click', () => {
		console.log(decodeURI('http://example.com/%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.html'));
		let tweetText = document.querySelector('#input043').value;
		tweetText += ' #jsむずい';
		const encodedText = encodeURIComponent(tweetText);
		const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
		window.open(tweetURL);
	})
}
sec043();