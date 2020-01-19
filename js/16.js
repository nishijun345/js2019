/* ------------------------------------
sec248 位置情報を取得する
-------------------------------------*/

function sec248() {
	//現在位置の取得
	navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	//成功
	function geoSuccess(position) {
		//緯度
		const lat = position.coords.latitude;
		//経度
		const lng = position.coords.longitude;
		//誤差
		const accuracy = Math.floor(position.coords.accuracy);
		alert(`緯度「${lat}」経度「${lng}」誤差「${accuracy}」`);
		//GoogleMap
		//setMap(lat, lng);
	}
	//失敗
	function geoError() {
		alert('取得失敗');
	}
	//setMap
	function setMap(lat, lng) {
		//緯度経度の設定
		const latlng = new google.maps.LatLng(lat, lng);
		//マーカーを追加
		const marker = new google.maps.Marker({
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP,
			position: latlng
		});
	}
}

/* ------------------------------------
sec249 ジャイロセンサーと加速度センサー
-------------------------------------*/

function sec249() {
	//DeviceOrientation Event
	window.addEventListener('deviceorientation', deviceorientationHandler);
	function deviceorientationHandler(event) {
		const beta = event.beta;
		const gamma = event.gamma;
		const alpha = event.alpha;
		document.querySelector('.result249').innerHTML = `X軸${beta}Y軸${gamma}Z軸${alpha}`;
	}

	//方位磁石
	function getCompassHeading(alpha, beta, gamma) {
		const degtorad = Math.PI / 180;
		const _x = beta ? beta * degtorad : 0;
		const _y = gamma ? gamma * degtorad : 0;
		const _z = alpha ? alpha * degtorad : 0;
		const cY = Math.cos(_y);
		const cZ = Math.cos(_z);
		const sX = Math.sin(_x);
		const sY = Math.sin(_y);
		const sZ = Math.sin(_z);
		const Vx = -cZ * sY - sZ * sX * cY;
		const Vy = -sZ * sY + cZ * sX * cY;
		let compassHeading = Math.atan(Vx / Vy);
		if (Vy < 0) {
			compassHeading += Math.PI;
		} else if (Vx < 0) {
			compassHeading += 2 * Math.PI;
		}
		return compassHeading * (180 / Math.PI);
	}

	//DeviceMotion Event
	window.addEventListener('devicemotion', devicemotionHandler);
	//加速度が変化
	function devicemotionHandler(event) {
		//加速度
		const x = event.acceleration.x;
		const y = event.acceleration.y;
		const z = event.acceleration.z;
	}
} sec249();

/* ------------------------------------
sec250 バイブレーションを使う
-------------------------------------*/

function sec250() {
	function vibrate01() {
		navigator.vibrate(1000);
	}
	function vibrate02() {
		//500ミリ秒振動、100ミリ秒停止、,500ミリ秒振動
		navigator.vibrate([500, 100, 500]);
	}
	document.querySelector('.vibrate01').addEventListener('click', vibrate01);
	document.querySelector('.vibrate02').addEventListener('click', vibrate02);
} sec250();