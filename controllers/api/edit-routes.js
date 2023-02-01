const router = require('express').Router();
const { User } = require('../../models');

// update logged in user info in the database
router.put('/', async (req, res) => {
    try {
        const userData = await User.update(req.body, {
        //  fields you can update
        name: req.body.name || '',
        github: req.body.github || '',
        linkedin: req.body.linkedin || '',
        about: req.body.about || '',
        front_end: req.body.front_end || '',
        back_end: req.body.back_end || '',
        full_stack: req.body.full_stack || '',
        },  
         {   where: {
                id: req.session.user_id,
            },
        })
        // .then((updatedBook) => {
        //     res.json(updatedBook);
        //   });

        // if (!userData) {
        //     res.status(404).json({ message: 'No user found with this id!' });
        //     return;
        // }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});





// router.put('/', async (req, res) => {
//     try {
//         const userData = await User.update(req.body, {
//             where: {
//                 id: req.session.user,
//             },
//         });
//         if (!userData) {
//             res.status(404).json({ message: 'No user found with this id!' });
//             return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
