const router = require('express').Router();
const logedRoutInginfo = require('../utils/logRouting');
const {User, Job, Comment} = require('../models');

router.get('/', logedRoutInginfo, async (req, res) => {
    try {
        const jobData = await Job.findAll()

        const jobs = jobData.map((job) => 
            job.get({plain: true})
        );

        // console.log(jobs);
        const jobsFour = jobs.filter((jobs,index)=>{
            // console.log(index)
            return index < 4;
        })

        res.render('homepage', {jobsFour, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// GET conditional login page through href in main.handlebar
router.get('/login', logedRoutInginfo, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    res.render('login');
});


router.get('/signup', logedRoutInginfo, async (req, res) => {
    res.render('signup', {loggedIn: req.session.loggedIn});
});

router.get('/profile', logedRoutInginfo, async (req, res) => {
    if(!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('profile', {loggedIn: req.session.loggedIn});
});

router.get('/job/:id', logedRoutInginfo, async (req, res) => {
    try {
        const oneJob = await Job.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['firstName', 'lastName', 'email' ]
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['firstName', 'lastName', 'email'],
                    },
                },
            ],
        })

        const job = oneJob.get({plain: true});
        res.render('oneJob', {job, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;

