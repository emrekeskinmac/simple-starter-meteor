Router.configure({
    layoutTemplate: 'blankLayout',
    notFoundTemplate: 'notFound'

});


Router.route('/:id', function () {
    this.render(this.params.id);
});
Router.route('/notFound', function () {
    this.render('notFound');
});


Router.route('/', function () {
    this.render('Homepage');
});
