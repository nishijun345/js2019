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

/* ------------------------------------
sec184 scale
-------------------------------------*/
function sec184() {
	const square184 = document.querySelector('.square184');
	square184.animate(
		{
			transform: [
				'scale(1)',
				'scale(3)'
			]
		},
		{
			duration: 3000,
			fill: 'forwards',
			easing: 'ease'
		}
	);
}

/* ------------------------------------
sec185 scale
-------------------------------------*/
function sec185() {
	const square185 = document.querySelector('.square185');
	square185.animate(
		{
			transform: [
				'translate(0px)',
				'translate(600px)'
			]
		},
		{
			duration: 3000,
			fill: 'forwards',
			easing: 'ease'
		}
	);
}

/* ------------------------------------
sec186 scale
-------------------------------------*/
function sec186() {
	const square186 = document.querySelector('.square186');
	square186.animate(
		{
			opacity: [
				'1.0',
				'0.2'
			]
		},
		{
			duration: 1000,
			fill: 'forwards',
			easing: 'ease'
		}
	);
}

/* ------------------------------------
sec187 brightness
-------------------------------------*/
function sec187() {
	const square187 = document.querySelector('.square187');
	square187.animate(
		{
			filter: [
				'brightness(100%)',
				'brightness(300%)'
			]
		},
		{
			duration: 3000,
			fill: 'forwards',
			easing: 'ease'
		}
	);
}

/* ------------------------------------
sec188 grayscale
-------------------------------------*/
function sec188() {
	const square188 = document.querySelector('.square188');
	square188.animate(
		{
			filter: [
				'grayscale(0%)',
				'grayscale(100%)'
			]
		},
		{
			duration: 3000,
			fill: 'forwards',
			easing: 'ease'
		}
	);
}

/* ------------------------------------
sec190 grayscale
-------------------------------------*/
function sec190() {
	const el = document.querySelector('.stoker');
	el.classList.add('on');

	//マウス座標
	let mouseX = 0;
	let mouseY = 0;
	//ストーカー座標
	let currentX = 0;
	let currentY = 0;
	//マウス移動時
	document.body.addEventListener('mousemove', (e) => {
		//マウス座標を保存
		mouseX = e.clientX;
		mouseY = e.clientY;
	});

	tick();
	function tick() {
		//アニメーションフレームを指定
		requestAnimationFrame(tick);
		//マウス座標を遅延してストーカー座標へ反映
		currentX += (mouseX - currentX) * 0.1;
		currentY += (mouseY - currentY) * 0.1;
		//ストーカーへ反映
		el.style.transform = `translate(${currentX}px, ${currentY}px)`;
	}
}