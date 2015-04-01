define(['butterfly/view'], function(View){

  return View.extend({

    render: function(){
      console.log('main/subview.html render');
    },

    onShow: function(){
      console.log('main/subview.html onShow');
      
    }

  });
});
