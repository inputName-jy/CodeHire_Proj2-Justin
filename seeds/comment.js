const {Comment} = require('../models');

const commentData = [
    {
        comment: "Comment 1",
        user_id: 1,
        job_id: 1,
    },
    {
        comment: "Comment 2",
        user_id: 2,
        job_id: 2,
    },
    {
        comment: "Comment 3",
        user_id: 1,
        job_id: 3,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;