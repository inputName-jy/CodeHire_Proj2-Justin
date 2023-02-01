const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// Sign Up

router.post('/signup', async (req, res) => {
  try{
    const dbUserData = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      github: req.body.github,
      linkedin: req.body.linkedin,
      is_employer: req.body.is_employer,
      front_end: req.body.front_end,
      back_end: req.body.back_end,
      full_stack: req.body.full_stack,
      about: req.body.about
    });
    // Session saved as logged in with created account
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.id;
      console.log(req.session.user);
      res.status(200).json(dbUserData);
    });

    console.log(`You are now logged in, ${dbUserData.firstName} ${dbUserData.lastName}`);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user = userData.id;
      console.log(req.session.user);
      req.session.loggedIn = true;
      console.log(
        'file: user-routes.js req.session.save req.session.cookie',
        req.session.cookie
      );

      console.log(req.session.user);

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
      console.log(`You are now logged in, ${userData.firstName} ${userData.lastName}`);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;