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