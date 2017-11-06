  (function($) {
    'use strict';
    // Collapseイベント
    $('#menuOne, #menuTwo').on({
      // 折り畳み開く処理
      'show.bs.collapse': function() {
        $('a[href="#' + this.id + '"] span.glyphicon-chevron-down')
          .removeClass('glyphicon-chevron-down')
          .addClass('glyphicon-chevron-up');
      },
      // 折り畳み閉じる処理
      'hide.bs.collapse': function() {
        $('a[href="#' + this.id + '"] span.glyphicon-chevron-up')
          .removeClass('glyphicon-chevron-up')
          .addClass('glyphicon-chevron-down');
      }
    });
    // ハッシュリンクキャンセル
    $('a[href="#menuOne"], a[href="#menuTwo"]').on('click', function(event) {
      event.preventDefault();
    });
  })(jQuery);