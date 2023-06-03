document.addEventListener("DOMContentLoaded", function() {

    const postsWrapper = document.querySelector('.posts-wrapper');

    function generatePost(postTitle, postBody) {

        const cardItem = document.createElement('div');
        cardItem.classList.add('card-item');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');

        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');

        cardTitle.textContent = postTitle;
        cardDescription.textContent = postBody;

        cardItem.appendChild(cardTitle);
        cardItem.appendChild(cardDescription);

        return cardItem;
    };

    async function getPosts(pathToApi) {
        try {

            const posts = await fetch(pathToApi);
            const result = await posts.json();
            if(result.length !== 0) {

                document.querySelector('.post-loader').remove();

                result.map(item => {
                    const cardItem = generatePost(item.title, item.body);
                    postsWrapper.appendChild(cardItem);
                });

            } else {
                window.alert('დაფიქსრიდა შეცდომა');
                return;
            };

        } catch(error) {
            window.alert('დაფიქსირდა შეცდომა, გადატვირთედ ვებსაიტი');
        };
    };

    getPosts('https://jsonplaceholder.typicode.com/posts');





});
  