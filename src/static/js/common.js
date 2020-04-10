
$(function() {
  // メニューの状態維持
  (function() {
    var path = '/';　
    $('.js-pushmenu').on('click', function() {
      if ($('body').hasClass('sidebar-collapse')) {
        document.cookie = 'sidebarToggleState=opened; path=' + path + ';';
      } else {
        document.cookie = 'sidebarToggleState=closed; path=' + path + ';';
      }
    });
    var re = new RegExp('sidebarToggleState' + '=([^;]+)');
    var value = re.exec(document.cookie);
    var toggleState = (value != null) ? unescape(value[1]) : null;
    if (toggleState == 'closed') {
      $('body').addClass('sidebar-collapse');
    }
  })();
});