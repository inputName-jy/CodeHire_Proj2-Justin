const router = require('express').Router();
const { Job, User, Comment } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// const withAuth = require('../../utils/auth');
function logedRoutInginfo(req,res,next) {
console.log(`*********  ${req.method } ${req.url}`)
next();
};
// GET all jobs
router.get('/',logedRoutInginfo, async (req, res) => {
    try {
        const allJobs = await Job.findAll(
        //     {
        //     include: [
        //         {
        //             model: Comment,
        //             include: {
        //                 model: User,
        //                 attributes: ['username'],
        //             },
        //         },
        //         {
        //             model: User,
        //             attributes: ['username'],
        //         },
        //     ],
        // }
        )
        const jobs = allJobs.map((job) => job.get({plain: true}));
        res.render('allJobs', {jobs, loggedIn: req.session.loggedIn});

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/search',logedRoutInginfo, async (req, res) => {
    // console.log("route search")
    // console.log(req.query)
    try {
        // retrieve the title from the query string
        const title = req.query.title;
        const location = req.query.location;
        // query the database for jobs with matching title
        let results;
        if (title && location) {
            // This will look for both title and location
            results = await Job.findAll({
                where: {
                    title: { [Op.like]: `%${title}%` },
                    location: { [Op.like]: `%${location}%` }
                }

            });
        }
        // If only title
        else if (title) {
            results = await Job.findAll({
                where: {
                    title: { [Op.like]: `%${title}%` }
                }

            });
        }
        else if (location) {
            results = await Job.findAll({
                where: {

                    location: { [Op.like]: `%${location}%` }
                }

            });
        }
        
        console.log('location results are', results)
     
        const searchResults = results.map(result => {return result.get({plain:true})})
        console.log('resultData',searchResults)
        res.render('jobsearch', {
            searchResults
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// comment on job

router.post('/:id', logedRoutInginfo, async (req, res) => {
    try{
        const commentData = await Comment.create({
            comment: req.body.comment,
            job_id: req.body.job_id,
            user_id: req.session.user
        })
        res.json(commentData);
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;