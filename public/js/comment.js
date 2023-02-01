const commentFormHandler = async (event) => {
    event.preventDefault();
    
    const comment = document.querySelector('#new-comment').value.trim();
    const job_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (comment) {
        const response = await fetch('/api/job/:id', {
            method: "POST",
            body: JSON.stringify({comment, job_id}),
            headers: {"Content-Type" : "application/json"},
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert('failed to comment');
        }
    }
};


document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);