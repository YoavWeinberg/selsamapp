var User = require('./UserModel');
exports.add = function (req, res, next) {
    var newUser = new User(req.body.user);
        newUser.created = new Date();
        newUser.modified = new Date();
        newUser.save(function (err, user){
            if (err) {
                return next(err);
            }
            res.json({user: user});
        });
}
exports.getAll = function (req, res, next) {
    User.find({})
        .then(function (users)
        {
                res.json(users)
        }, function (err) {
        });
};