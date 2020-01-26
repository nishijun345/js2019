/* ------------------------------------
sec260 クラスを定義する
-------------------------------------*/

function sec260() {
	class MyClass {
		constructor(value1, value2) {
			console.log(value1);
			console.log(value2);
		}
	}
	new MyClass('あか', 25);
} sec260();

/* ------------------------------------
sec261 クラスを使う（インスタンス化）
-------------------------------------*/

function sec261() {
	class MyClass {
		constructor() {
			this.classField = 12;
		}
		classMethod() {
			console.log('sec261のメソッドが実行');
		}
	}
	const myInstance = new MyClass();
	console.log('sec261のフィールド：' + myInstance.classField);
	myInstance.classMethod();
} sec261();

/* ------------------------------------
sec262 API通信結果のJSONデータを格納するクラスの作成
-------------------------------------*/

function sec262() {
	//クラス
	class ApiResultData {
		constructor() {
			this.result;
			this.errorMessage;
			this.userName;
			this.age;
		}
	}
	//レスポンスデータのパース（ApiResultDataでの変換）の関数
	function parseData(responce) {
		//インスタンス化
		const apiResultData = new ApiResultData();
		apiResultData.result = responce.result;
		apiResultData.errorMessage = responce.error_message;
		apiResultData.userName = responce.user_name;
		apiResultData.age = responce.age;
		//出力
		alert(`${apiResultData.userName}は${apiResultData.age}歳`);
	}
	//APIのレスポンスデータ
	const apiResponce = {
		result: true, //API通信の結果
		user_name: '山口',
		age: 24
	};
	//データをパース
	parseData(apiResponce);
}

/* ------------------------------------
sec263 クラスでメソッドを使う
-------------------------------------*/

function sec263() {
	class MyClass {
		constructor() {
			this.myField = 'さかな';
		}
		myMethod() {
			return this.myField;
		}
	}
	const myInstance = new MyClass();
	//さかなが出力
	console.log(myInstance.myMethod());
} sec263();

/* ------------------------------------
sec264 汎用的なスタティックメソッドのサンプル
-------------------------------------*/

function sec264() {
	class StringUtil {
		//スタティックメソッド
		static createFullName(firstName, familyName) {
			return `${familyName} ${firstName}`;
		}
	}
	//呼び出し
	const fullName = StringUtil.createFullName('やすたか', 'なかた');
	console.log(fullName);
} sec264();

/* ------------------------------------
sec265 クラスを継承する
-------------------------------------*/

function sec265() {
	//継承元のクラス（親クラス）
	class MyParent {
		parentMethod() {
			console.log('MypaParentクラスのメソッド');
		}
	}
	//MyParentを継承したクラス（子クラス）
	class MyChild extends MyParent {
		constructor() {
			//子クラスのconstructorに必須
			super();
		}
		childMethod() {
			console.log('MypaChildクラスのメソッド');
		}
	}
	const myChild = new MyChild();
	//両方実行できる
	myChild.parentMethod();
	myChild.childMethod();
} sec265();

/* ------------------------------------
sec266 「customField」という名前のsetter、getterを定義する
-------------------------------------*/

function sec266() {
	class MyClass {
		//「customField」のsetter
		set customField(value) {
			this._customField = value;
		}
		//「customField」のgetter
		get customField() {
			return this._customField;
		}
		constructor(value) {
			this._customField = value;
		}
	}
	const myInstance = new MyClass();
	//値のセット（setが実行）
	myInstance.customField = 20;
	//値の取得（getが実行）
	console.log(myInstance.customField);
} sec266();

/* ------------------------------------
sec267 クリック回数をカウントするサンプル
-------------------------------------*/

function sec267() {
	class LikeCounter {
		constructor() {
			//クリックした数（メンバー変数）
			this.clickedCount = 0;
			const button = document.querySelector('.btn267');
			const text = document.querySelector('.text267');
			//イベントリスナー
			button.addEventListener('click', () => {
				//カウントが1増える
				this.clickedCount += 1;
				//カウント数出力
				text.textContent = this.clickedCount;
			});
		}
	}
	new LikeCounter();
} sec267();


