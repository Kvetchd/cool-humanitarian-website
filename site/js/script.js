$(function () {

	$("#navbarToggler").focusout(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 992) {
			$(".collapsable-nav").collapse('hide');
		}
	});
});

(function (global) {

	var alas = {};

	var homeHtml = "home.html";

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/Spinner-1s-200px.gif'></div>";
		insertHtml(selector, html);
	};

	document.addEventListener("DOMContentLoaded", function (event) {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		}, false);
	});

	alas.loadPage = function (url, event) {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(url, function (responseText) {
			document.querySelector("#main-content").innerHTML = responseText;
		}, false);
		event.preventDefault();
	};

	global.$alas = alas;

})(window);	
