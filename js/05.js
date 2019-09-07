/* ------------------------------------
sec082 getFullYear
-------------------------------------*/

function sec082() {
	const date = new Date();
	const year = date.getFullYear();

	alert(`今年は西暦${year}年です`);
}


/* ------------------------------------
sec083 getMonth, getDate
-------------------------------------*/

function sec083() {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	alert(`今日は${month}月${day}日です`);
}


/* ------------------------------------
sec084 時刻の取得
-------------------------------------*/

function sec084() {
	const date = new Date();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	//午前午後の分岐
	let meridiem;
	let hour2;
	if (hour < 12) {
		meridiem = '午前';
		hour2 = hour;
	} else {
		meridiem = '午後';
		hour2 = hour - 12;
	}

	alert(`${meridiem}${hour2}時${minutes}分${seconds}秒です`);
}


/* ------------------------------------
sec085 曜日の取得
-------------------------------------*/

function sec085() {
	const date = new Date();
	const day = date.getDay();
	const dayList = ['日', '月', '火', '水', '木', '金', '土'];

	alert(`今日は${dayList[day]}曜日です`);
}


/* ------------------------------------
sec086 toLocalString()
-------------------------------------*/

function sec086() {
	const date = new Date();
	const locale = date.toLocaleString();
	const localeDate = date.toLocaleDateString();
	const localeTime = date.toLocaleTimeString();

	alert(`【toLocaleString()】\n${locale}\n【toLocaleDateString()】\n${localeDate}\n【toLocaleTimeString()】\n${localeTime}`);
}


/* ------------------------------------
sec087 タイムスタンプ
-------------------------------------*/

function sec087() {
	const num = Date.now();
	alert(num);
}


/* ------------------------------------
sec089 日付時刻の加算減算
-------------------------------------*/

const date089 = new Date();
let inputMonth, inputDate;
//入力値取得
function inputValue() {
	inputMonth = parseInt(document.querySelector('#inputMonth').value);
	inputDate = parseInt(document.querySelector('#inputDate').value);
	//空白の場合
	if (isNaN(inputMonth)) {
		inputMonth = 0;
	}
	if (isNaN(inputDate)) {
		inputDate = 0;
	}
}
//減算
function prev() {
	date089.setMonth(date089.getMonth() - inputMonth);
	date089.setDate(date089.getDate() - inputDate);
}
//加算
function next() {
	date089.setMonth(date089.getMonth() + inputMonth);
	date089.setDate(date089.getDate() + inputDate);
}
//過去出力
function sec089prev() {
	inputValue();
	prev();
	alert(`${inputMonth}ヶ月${inputDate}日前は${date089.toLocaleDateString()}`);
	next();
}
//未来出力
function sec089next() {
	inputValue();
	next();
	alert(`${inputMonth}ヶ月${inputDate}日後は${date089.toLocaleDateString()}`);
	prev();
}


/* ------------------------------------
sec090 日付の差分を計算
-------------------------------------*/

function sec090() {
	const inputDateA = document.querySelector('#inputDateA').value;
	const inputDateB = document.querySelector('#inputDateB').value;
	const dateA = new Date(inputDateA);
	const dateB = new Date(inputDateB);
	const diffMSec = dateA.getTime() - dateB.getTime();
	let diffDate = diffMSec / (24 * 60 * 60 * 1000);
	//空白のチェック
	if (isNaN(diffDate)) {
		alert(`日付を選択してください`);
	} else {
		alert(`${diffDate}日の差があります。`);
	}
}


/* ------------------------------------
sec091 経過時間を調べる
-------------------------------------*/

function sec091() {
	const oldTime = Date.now();

	setInterval(() => {
		const currentTime = Date.now();
		const diff = currentTime - oldTime;
		const sec = Math.floor(diff / 1000);
		document.querySelector('.time091').innerHTML = `${sec}秒が経過`;
	}, 1000);

	const btn091 = document.querySelector('#btn091');
	btn091.parentNode.removeChild(btn091);
}


/* ------------------------------------
sec092 カウントダウン
-------------------------------------*/

function sec092() {
	const totalT = 10000; //10秒
	const oldT = Date.now();

	const timerId = setInterval(() => {
		const currentT = Date.now();
		const diffT = currentT - oldT;
		const remainMSec = totalT - diffT;
		const remainSec = Math.ceil(remainMSec / 1000);
		let label = `残り${remainSec}秒`;

		if (remainSec <= 0) {
			clearInterval(timerId);
			label = `終了`;
		}
		document.querySelector('.time092').innerHTML = label;
	}, 1000);

	const btn092 = document.querySelector('#btn092');
	btn092.parentNode.removeChild(btn092);
}


/* ------------------------------------
sec093 アナログ時計
-------------------------------------*/

function sec093() {
	setInterval(() => {
		//現在時刻
		const now = new Date();

		//時間の数値
		const h = now.getHours(); //時間（0〜23）
		const m = now.getMinutes(); //分（0〜59）
		const s = now.getSeconds(); //秒（0〜59）

		//針の角度に反映する
		//短針（短針は時間だけでなく分も角度に考慮する）
		const degH = h * (360 / 12) + m * (360 / 12 / 60);
		//分針
		const degM = m * (360 / 60);
		//秒数
		const degS = s * (360 / 60);

		const eleH = document.querySelector('.lineHour');
		const eleM = document.querySelector('.lineMin');
		const eleS = document.querySelector('.lineSec');

		eleH.style.transform = `rotate(${degH}deg)`;
		eleM.style.transform = `rotate(${degM}deg)`;
		eleS.style.transform = `rotate(${degS}deg)`;
	}, 50);
} sec093();