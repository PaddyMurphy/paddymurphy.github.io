$(function(){var t=$("body").attr("data-mountain");var a=["bugaboo","tetons","rainier","glacier-peak"];var n=a.length;var o,r;$("body").on("click",".nav-arrow",function(t){t.preventDefault();o=a.indexOf($("body").attr("data-mountain"));if(t.currentTarget.classList.contains("nav-right")){r=o===n-1?0:o+1;e(r);i(a[r])}else{r=o===0?n-1:o-1;e(r);i(a[r])}});function e(t){$("body").attr("data-mountain",a[t]);console.log(o=a.indexOf($("body").attr("data-mountain")))}function i(t){$(".title").text(c(t))}function c(t){return t=t.replace("-"," ")}});