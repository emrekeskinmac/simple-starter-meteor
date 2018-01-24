


Template.Homepage.helpers({

});

Template.Homepage.events({ 
  'submit #form': function(event, template) { 
    event.preventDefault()

    Meteor.loginWithPassword(event.target.username.value, event.target.password.value, function(error,result) { 
       if (error) {
         alert("Giriş Bilgileriniz Hatalıdır")
       }else {
         Router.go('/Panel')
       }
    });

  } 
});

Template.Homepage.onRendered(function () {

});
