/* ------------------------------------
sec180 CSS Transitions・CSS Animationsを使う
-------------------------------------*/

function sec180() {
	const btn180 = document.querySelector('.btn180');
	btn180.addEventListener('click', handleClick);

	function handleClick() {
		if (btn180.classList.contains('on') === false) {
			btn180.classList.add('on');
		} else {
			btn180.classList.remove('on');
		}
	}
} sec180();

/* ------------------------------------
sec181 transitionendイベント
-------------------------------------*/
function sec181() {
	const btn181 = document.querySelector('.btn181');
	btn181.addEventListener('transitionend', (e) => {
		e.target.innerHTML = 'transition完了';
	});
} sec181();

/* ------------------------------------
sec182 CSS Animationイベント
-------------------------------------*/
function sec182() {
	const circle182 = document.querySelector('.circle182');
	const circle182_i = document.querySelector('.circle182_i');
	circle182.addEventListener('click', handleClick);
	circle182_i.addEventListener('click', handleClick);
	circle182.addEventListener('animationstart', (e) => {
		e.target.innerHTML = '開始';
	});
	circle182.addEventListener('animationend', (e) => {
		e.target.innerHTML = '終了';
	});
	circle182_i.addEventListener('animationstart', (e) => {
		e.target.innerHTML = '開始';
	});
	circle182_i.addEventListener('animationiteration', (e) => {
		e.target.innerHTML = '繰り返す';
	});
	function handleClick(e) {
		if (e.target.classList.contains('on') === false) {
			e.target.classList.add('on');
		}
	}
} sec182();

/* ------------------------------------
sec183 Web Animation API
-------------------------------------*/
function sec183() {
	const square183 = document.querySelector('.square183');
	square183.animate(
		{
			transform: [
				'translateX(0px) rotate(0deg)',
				'translateX(500px) rotate(360deg)'
			]
		},
		{
			duration: 3000,
			iterations: Infinity,
			direction: 'normal',
			easing: 'ease'
		}
	);
} sec183();