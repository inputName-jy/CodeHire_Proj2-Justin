const router = require('express').Router();

const userRoutes = require('./user-routes');
const editRoutes = require('./edit-routes');
const profileRoutes = require('./profile-routes');
const jobRoutes = require('./jobRoutes')

router.use('/users', userRoutes);
router.use('/editProfile', editRoutes);
router.use('/profile', profileRoutes);
router.use('/job', jobRoutes);


module.exports = router;
