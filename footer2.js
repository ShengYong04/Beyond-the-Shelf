var facebook = document.getElementById("facebook");
var facebook_img = document.getElementById("facebook_img");
const facebook_normal = "/icon/facebook_normal.png";
const facebook_hover = "/icon/facebook_hover.png";

facebook.addEventListener("mouseover",() => {
    facebook_img.src = facebook_hover;
});

facebook.addEventListener("mouseout",() => {
    facebook_img.src = facebook_normal;
});

facebook.addEventListener("click", function() {
    window.location.href = "https://www.facebook.com";
});

var twitter = document.getElementById("twitter");
var twitter_img = document.getElementById("twitter_img");
const twitter_normal = "/icon/twitter_normal.png";
const twitter_hover = "/icon/twitter_hover.png";

twitter.addEventListener("mouseover",() => {
    twitter_img.src = twitter_hover;
});

twitter.addEventListener("mouseout",() => {
    twitter_img.src = twitter_normal;
});

twitter.addEventListener("click", function() {
    window.location.href = "https://www.twitter.com";
});

var instagram = document.getElementById("instagram");
var instagram_img = document.getElementById("instagram_img");
const instagram_normal = "/icon/instagram_normal.png";
const instagram_hover = "/icon/instagram_hover.png";

instagram.addEventListener("mouseover",() => {
    instagram_img.src = instagram_hover;
});

instagram.addEventListener("mouseout",() => {
    instagram_img.src = instagram_normal;
});

instagram.addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/";
});

var linkedin = document.getElementById("linkedin");
var linkedin_img = document.getElementById("linkedin_img");
const linkedin_normal = "/icon/linkedin_normal.png";
const linkedin_hover = "/icon/linkedin_hover.png";

linkedin.addEventListener("mouseover",() => {
    linkedin_img.src = linkedin_hover;
});

linkedin.addEventListener("mouseout",() => {
    linkedin_img.src = linkedin_normal;
});

linkedin.addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F";
});