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

  $('#mG61Hd').submit(function (e) {
    console.log("I submitted")

    $this = $(this);

    $this.toggleClass('progress');



  })
});

var api = 'https://hapramp.herokuapp.com/api/';

function subscribeAPI($this, subscriptionType) {

  $this = $($this);

  $this.toggleClass('progress');
  var $email = $this.find('input.email');
  var email = $email.val();

  $.ajax({
    url: 'https://hapramp.herokuapp.com/api/subscribe/'+subscriptionType,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ email: email }),
    dataType: 'json',
    success: function(data){
      $this.toggleClass('progress');
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

function clearPartnerForm() {
  var $form = $('#mG61Hd');
  $form.find('input.email').val("");
  $form.find('input.username').val("");
  $form.find('select.plan-dropdown').val("none");
  $form.find('textarea.query').val("");
  $form.toggleClass('progress');


}