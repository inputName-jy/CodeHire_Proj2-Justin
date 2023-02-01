// function to update user info in the database
const editProfile = async (event) => {
    event.preventDefault();
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const github = document.querySelector('#github').value.trim();
    const linkedin = document.querySelector('#linkedin').value.trim();
    const about = document.querySelector('#about').value.trim();
    const front_end = document.querySelector('#frontend:checked') ? true : false;
    const back_end = document.querySelector('#backend:checked') ? true : false;
    const full_stack = document.querySelector('#fullstack:checked') ? true : false;
    // const sessionID = document.cookie.match(/sessionID=([^;]+)/);


    // if (firstName && lastName && github && linkedin && about && front_end && back_end && full_stack) {

        // const formData = new formData();
        // formData.append('firstName', firstName);
        // formData.append('lastName', lastName);
        // formData.append('github', github);
        // formData.append('linkedin', linkedin);
        // formData.append('front_end', front_end);
        // formData.append('back_end', back_end);
        // formData.append('full_stack', full_stack);
        // formData.append('about', about);


        // if (sessionID) {
            const response = await fetch('/api/editProfile', {
                method: 'PUT',
                body: JSON.stringify({ firstName, lastName, github, linkedin, about, front_end, back_end, full_stack }),
                headers: { 'Content-Type': 'application/json' },
                // body: formData,
                // headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('response.statusText');
            }
        // }

    // };

};

document.querySelector('.profile-form').addEventListener('submit', editProfile);