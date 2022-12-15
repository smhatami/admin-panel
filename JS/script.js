
// aside | sidebar :

var sidebarToggleOn = document.getElementById("sidebar-toggle-on");
var sidebarToggleOff = document.getElementById("sidebar-toggle-off");
var aside = document.getElementById("aside");
var main = document.getElementById("main");

function hideSidebar() {
  sidebarToggleOn.classList.remove("d-md-inline");
  sidebarToggleOff.classList.remove("d-md-none");
  sidebarToggleOff.classList.remove("d-none");
  sidebarToggleOn.classList.add("d-none");

  aside.classList.remove("animate__slideInRight");
  aside.classList.add("animate__animated");
  aside.classList.add("animate__slideOutRight");
  setTimeout(function () {
    aside.classList.remove("d-md-block");
    aside.classList.remove("d-none");
    aside.style.display = "none";
  }, 700);
  main.style.width = "100vw";
}

function showSidebar() {
  sidebarToggleOn.classList.add("d-md-inline");
  sidebarToggleOff.classList.add("d-md-none");
  sidebarToggleOn.classList.remove("d-none");
  sidebarToggleOff.classList.remove("d-inline");
  sidebarToggleOff.classList.add("d-none");

  aside.classList.remove("d-md-block");
  aside.classList.remove("d-none");
  aside.classList.remove("animate__slideOutRight");
  aside.style.display = "block";
  aside.classList.add("animate__animated");
  aside.classList.add("animate__slideInRight");
}

$(".sidebar-group-link").click(function() { 


  $(".sidebar-group-link").removeClass("sidebar-group-link-active");
  $(".sidebar-group-link").children('.sidebar-dropdown-toggle').children('.sidebar-angle').removeClass('fa-angle-down');
  $(".sidebar-group-link").children(".sidebar-dropdown-toggle").children(".sidebar-angle").addClass("fa-angle-left");
  
  $(this).addClass("sidebar-group-link-active");
  $(this).children('.sidebar-dropdown-toggle').children('.sidebar-angle').removeClass('fa-angle-left');
  $(this).children('.sidebar-dropdown-toggle').children('.sidebar-angle').addClass('fa-angle-down');
  $(this).children(".sidebar-dropdown").addClass("animate__animated");
  $(this).children(".sidebar-dropdown").addClass("animate__bounceInDown");  
  
});

////////////////////////////////////////////////////////////////

// body header :

var bodyHeader = document.getElementById("body-header");
var headerEllipsis = document.getElementById("sidebar-header-ellipsis");

function bodyHeaderRemote() {
  if (bodyHeader.classList.contains("d-none")) {
    bodyHeader.classList.remove("animate__flipOutX");
    bodyHeader.classList.add("animate__animated");
    bodyHeader.classList.add("animate__flipInX");
    bodyHeader.classList.remove("d-md-flex");
    bodyHeader.classList.remove("d-none");
    bodyHeader.classList.add("d-flex");
  } else {
    bodyHeader.classList.remove("animate__flipInX");
    bodyHeader.classList.add("animate__flipOutX");
    setTimeout(function () {
      bodyHeader.classList.remove("d-flex");
      bodyHeader.classList.add("d-none");
      bodyHeader.classList.add("d-md-flex");
      bodyHeader.classList.remove("animate__animated");
      bodyHeader.classList.remove("animate__flipOutX");
    }, 500);
  }
}

//////////////////////////////////////////////////////////////

//  search aria :

var searchAria = document.getElementById("search-aria");
var searchIcon = document.getElementById("header-search-icon");
var searchInput = document.getElementById("search-input");
var searchAriaX = document.getElementById("search-aria-x");
var searchAriaIcon = document.getElementById("search-aria-icon");

function showSearchAria() {
  searchAria.classList.add("d-lg-inline");
  searchInput.animate({ width: "12rem" }, 300);
  setTimeout(function () {
    searchInput.style.width = "12rem";
  }, 300);
  searchIcon.classList.add("d-none");
}

function hideSearchAria() {
  searchInput.style.width = "0";
  setTimeout(function () {
    searchAria.classList.remove("d-lg-inline");
    searchIcon.classList.remove("d-none");
  }, 280);
}

////////////////////////////////////////////////////////////////

// notification :

var notifications = document.getElementById("notifications");

function showNotification(){
  
  if(notifications.classList.contains("d-none")){
    $(notifications).fadeIn(200);
    notifications.classList.remove("d-none");
  }else{
    $(notifications).fadeOut(200);
    setTimeout(function(){
      notifications.classList.add("d-none");
    },200)
  }

}

// comments:

var comments = document.getElementById("comments");

function showComments(){

  if(comments.classList.contains("d-none")){
    $(comments).fadeIn(200);
    comments.classList.remove("d-none");
  }else{
    $(comments).fadeOut(200);
    setTimeout(function(){
      comments.classList.add("d-none");
    },200)
  }
  
}

// profile :

var profileAttachment = document.getElementById("profile-attachment")

function showProfileAttachment(){

  if(profileAttachment.classList.contains("d-none")){
    $(profileAttachment).fadeIn(200);
    profileAttachment.classList.remove("d-none");
  }else{
    $(profileAttachment).fadeOut(200);
    setTimeout(function(){
      profileAttachment.classList.add("d-none");
    },200)
  }
  
}

////////////////////////////////////////////////////////////////////

// fullscreen mood :

var compress = document.getElementById("compress-icon");
var expand = document.getElementById("expand-icon");
var elem = document.documentElement;

function changeToFullscreen(){

  compress.classList.remove("d-none");
  expand.classList.add("d-none");

  elem.requestFullscreen();
  elem.webkitRequestFullscreen();

}

function closeFullscreen(){

  expand.classList.remove("d-none");
  compress.classList.add("d-none");

  document.exitFullscreen();
  
}