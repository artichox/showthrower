Deps.autorun(function () {

  // Whenever this session variable changes, run this function.
  var message = Session.get('info_message');
  var alert_level = Session.get("alert_level");
  if(!alert_level)
    alert_level = 'info';
  if (message) {
    $.UIkit.notify({
      message : message,
      status  : alert_level,
      timeout : 5000,
      pos     : 'top-center'
    });
    Session.set('info_message', null);
  } 

});