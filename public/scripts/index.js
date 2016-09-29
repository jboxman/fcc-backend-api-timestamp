$(function() {
  $('#go').click(function() {
    $.ajax({
      type: 'post',
      url: '/',
      data: JSON.stringify({
        natural: $('#time').val()
      }),
      contentType: 'application/json',
      dataType: 'json',
      success: function(payload) {
        $('#output').text(JSON.stringify(payload));
      },
      // Bad news
      failure: function() {}
    });
  });
});
