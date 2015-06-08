define(['butterfly/view'], function(View){

  return View.extend({

    render: function(){
      console.log('index.html render');
    },

    onShow: function(){
      console.log('index.html onShow');
      
    }

  });
});
