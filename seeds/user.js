const { User } = require('../models');

const userData = [
    {
        firstName: "Sal",
        lastName: "One",
        email: "sal@hotmail.com",
        password: "password12345",
        github: "github.com",
        linkedin_link: "linkedin.com",
        about: "Hi I'm Sal",
        front_end: false,
        back_end: false,
        full_stack: true,
        is_employer: false
      },
      {
        firstName: "Lernantino",
        lastName: "Two",
        email: "lernantino@gmail.com",
        password: "password12345",
        github: "github.com",
        linkedin_link: "linkedin.com",
        about: "Hi I'm Lernantino",
        front_end: false,
        back_end: true,
        full_stack: false,
        is_employer: false
      },
      {
        firstName: "Amiko",
        lastName: "Three",
        email: "amiko2k20@aol.com",
        password: "password12345",
        github: "github.com",
        linkedin_link: "linkedin.com",
        about: "Hi I'm Amiko",
        front_end: true,
        back_end: false,
        full_stack: false,
        is_employer: true
      },
      {
        firstName: "Jordan",
        lastName: "Four",
        email: "jordan99@msn.com",
        password: "password12345",
        github: "github.com",
        linkedin_link: "linkedin.com",
        about: "Hi I'm Jordan",
        front_end: false,
        back_end: false,
        full_stack: false,
        is_employer: false
      },
      {
        firstName: "Blake",
        lastName: "Five",
        email: "the_blake@yahoo.com",
        password: "password12345",
        github: "github.com",
        linkedin_link: "linkedin.com",
        about: "Hi I'm Blake",
        front_end: false,
        back_end: false,
        full_stack: true,
        is_employer: true
      }
];

const seedUser = async () => {
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
};

module.exports = seedUser;