// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require wiselinks
//= require_tree .

$(function() {
    window.wiselinks = new Wiselinks($('#content'));
    $(document).off('page:loading').on('page:loading', function(event, $target, render, url) {
        $('.loader').show();
    });
    $(document).off('page:redirected').on('page:redirected', function(event, $target, render, url) {
        $('.loader').show();
    });
    $(document).off('page:always').on('page:always', function(event, xhr, settings) {
        $('.loader').hide();
    });
    $(document).off('page:done').on('page:done', function(event, $target, status, url, data) {
        $('.loader').hide();
    });
    return $(document).off('page:fail').on('page:fail', function(event, $target, status, url, error, code) {
        $('.loader').hide();
    });
});