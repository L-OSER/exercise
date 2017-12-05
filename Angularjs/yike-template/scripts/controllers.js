
//实例一个模块，用来专门管理所有的控制器
angular.module('DemoController',[])
.controller('DemoController', ['$scope', function ($scope) {
	console.log("启动成功")
}])

// 导航菜单
.controller('NavController', ['$scope', function ($scope) {
	// 导航数据
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/settings', text: '设置', icon: 'icon-cog'}
	];
}])

// 今日一刻
.controller('TodayController', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {
	$rootScope.title = '今日一刻';
	var today = $filter('date')(new Date,'yyyy-MM-dd');
    // console.log(today)
    $rootScope.loading = false ;
    $rootScope.index = 0 ;
	$http({
		url:'./api/today.php',//请求地址，解决跨域问题
		method:'get',
		params:{today:today}//传本机时间数据
 
	}).success(function(info){
    $rootScope.loading = true ;
        //日期
		$scope.date = info.date;
		// 文章数据
		$scope.posts = info.posts;
		console.log(info)
	})
}])

//往期内容
.controller('OlderController', ['$scope', '$http','$filter','$rootScope', function ($scope,$http,$filter,$rootScope) {
	//
	$rootScope.title = '往期内容';
    $rootScope.index = 1 ;
    $rootScope.loading = false ;
	var today = $filter('date')(new Date,'yyyy-MM-dd');
	$http({
		url:'./api/older.php',
		method:'get',
		params:{today:today}//传本机时间数据
	}).success(function(info){
    $rootScope.loading = true ;
        //日期
		$scope.date = info.date;
		// 文章数据
		$scope.posts = info.posts;
		console.log(info)
	})
}])

//热门作者
.controller('AuthorController', ['$scope', '$http','$filter','$rootScope', function ($scope,$http,$filter,$rootScope) {
    $rootScope.loading = false ;
	$rootScope.title = '热门作者';
    $rootScope.index = 2;
	var today = $filter('date')(new Date,'yyyy-MM-dd');
    $rootScope.loading = false;
    $http({
    	url:'./api/author.php',
    	method:'get',
    	params:{toady:today}
    }).success(function(info){
    	// console.log(info)
    $rootScope.loading = true ;
		$scope.recs = info.rec;
		$scope.alls = info.all;
    	
    })


}])
