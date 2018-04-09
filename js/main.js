/**
 * Created by ansarimofid on 09/12/17.
 */
$(document).ready(function () {

  $('#early-access').submit(function (e) {
    e.preventDefault();
    subscribeAPI(this, 'early-access');
  });

  $('#request-apk').submit(function (e) {
    e.preventDefault();
    subscribeAPI(this, 'apk');
  })
});

var api = 'https://hapramp.herokuapp.com/api/';

function subscribeAPI($this, subscriptionType) {

  $this = $($this);
  var $email = $this.find('input.email');
  var email = $email.val();

  $.ajax({
    url: api+'subscribe/'+subscriptionType,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ email: email }),
    dataType: 'json',
    success: function(data){
      $email.val("");
      UIkit.notification({
        message: "We've received your email. We'll get back to you soon.",
        status: 'success',
        pos: 'bottom-center',
        timeout: 2500
      });

    },
    error: function(){
      UIkit.notification({
        message: 'Something Went Wrong',
        status: 'danger',
        pos: 'bottom-center',
        timeout: 2500
      });
    },
    processData: false
  });
}