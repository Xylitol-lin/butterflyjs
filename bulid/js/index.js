define(['butterfly/view'], function(View){

  return View.extend({

    render: function(){
      console.log('main/index.html render');
    },

    onShow: function(){
      console.log('main/index.html onShow');
      
    }

  });
});
