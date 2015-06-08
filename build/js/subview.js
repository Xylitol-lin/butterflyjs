define(['butterfly/view'], function(View){

  return View.extend({

    render: function(){
      console.log('subview.html render');
    },

    onShow: function(){
      console.log('subview.html onShow');
      
    }

  });
});
