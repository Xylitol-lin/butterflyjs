define(['butterfly/view', 'spin'], function(View, Spinner) {
  return View.extend({
    route: function(paths, options) {
      if (paths == null|| paths == '#') paths = 'views/home';
      var Spin = new Spinner().spin(this.el);
      var me = this;
      require(['view!' + paths + '.html'], function(TheView) {
        if (me.contentView) {
          me.contentView.hide();
          me.contentView.remove();
        }

        me.contentView = new TheView().render();
        console.log(me);
        me.$el.append(me.contentView.el);
        me.contentView.show();
        Spin.stop();
      });
    },

    onShow: function(){
      console.log('...show');
      $(window).on('hashchange',function(){
        $('.notification').remove();
      })
    }
  });
});