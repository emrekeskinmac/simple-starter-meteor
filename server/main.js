

Meteor.startup(function() {
  const userData = Meteor.users.findOne()
  if (!userData) {
    const id = Accounts.createUser({
      username: "admin",
      email: "emrekeskinmac@gmail.com",
      password: "admin"
    }) 
    Roles.addUsersToRoles(id, 'admin')
  }
});




Meteor.methods({ 
  SaveData: function(data) { 
      if (!data.email) {
        throw new Meteor.Error(300, 'Email Adresi Boş Olamaz');
      }else(
        Personel.insert(data)
      )
  } 
});







Meteor.publish('Personel', function() {
  if (this.userId) {
    return Personel.find();    
  }
});


Personel.allow({
  remove(userId, doc) {
    return false
  }
});


