/* ------------------------------------
sec007 let/const
-------------------------------------*/

function sec007() {
	//let
	let age = 24;
	age = age + 1;
	console.log('age='+ age);

	//const
	const year = 2019;
	console.log('year='+ year);

	year = year + 1; //再代入でエラー
	console.log('year=' + year);
}



/* ------------------------------------
sec017 for文
-------------------------------------*/

function sec017() {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
}



/* ------------------------------------
sec018 while文
-------------------------------------*/

function sec018() {
	let num = 0;

	while (num < 10) {
		console.log(num);
		num += 1;
	}
}



/* ------------------------------------
sec019
-------------------------------------*/

function sec019() {
	for (let i = 0; i < 10; i++) {
		if (i % 2 === 0) {
			continue;
		}
		console.log(i);
	}
}