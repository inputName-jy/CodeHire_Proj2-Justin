const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req,res) => {
    try{
        const userData = await User.findByPk(req.session.user, {
            attributes: {exclude: ['id', 'password']}
        });

        const user = userData.get({plain: true});

        // res.render('profile', {
        //     user,
        //     loggedIn: req.session.loggedIn
        // });

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;