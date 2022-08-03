module.exports = (application) => {
    application.get('/', ( req, res) =>{
       // res.render('index');
       // express app module file method
       application.app.controllers.index.home(application, req, res);
    })
}