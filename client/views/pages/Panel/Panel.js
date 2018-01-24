


Template.Panel.helpers({
  fetchData: function(){
    return Personel.find().fetch();
  },
  signOut: ()=> Meteor.userId() ? "Sign Out" : "Homepage"
});

Template.Panel.events({
  "click #logout": function(event){
    Meteor.logout();
    Router.go("/")
  },

  "click #form": function(event){
    const data  = $("form").serializeJSON()
    data.check ? data.check = true : data.check = false
    Meteor.call('SaveData', data, function(error, success) { 
      if (error) { 
        alert(error.message)
      } 
      if (success) { 
         alert("KAYIT EKLENDİ");
      } 
    });
    return false
  }
});


Template.Panel.onRendered(function ( ){
    this.subscribe('Personel');
})