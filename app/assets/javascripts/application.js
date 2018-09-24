// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery3
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require home


@import "bootstrap-sprockets";
@import "bootstrap";
@import "font-awesome";
@import "jquery.datetimepicker";
@import "*";

$(document).ready(function() {
            $(".menu_nav").click(function() {
                $(".menu_nav").toggleClass("open");
                // $(".mobile_nav_container").toggleClass("show");
                $(".mobile_nav_ul").toggleClass("show");
                $(".mobile_nav_ul").toggleClass("fade");
                $(".menu_line").toggleClass("active");
            });
});


//= require jquery
//= require jquery3
//= require jquery_ujs
//= require bootstrap
//= require bindWithDelay
//= require jquery.datetimepicker
//= require_tree 