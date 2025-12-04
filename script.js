const mainContent = document.getElementById("main-content");


const posts = [
    {
        image: "https://eastside-online.org/wp-content/uploads/2021/11/metaverse_photo.jpeg",  
        title: "Exploring the Future of Technology",
        post: "In this post, we dive into the exciting advancements in AI, virtual reality, and robotics..."
    },
    {
        image: "https://img.traveltriangle.com/blog/wp-content/uploads/2024/11/7-wonders-of-the-world-new.png",
        title: "The Wonders of Traveling in 2025",
        post: "Traveling has changed dramatically in the last few years. Let's explore how technology is shaping the future of travel..."
    },
    {
        image: "https://usethebitcoin.com/wp-content/uploads/2024/12/NFT-Business-Ideas-scaled.jpg",
        title: "Top 5 Creative Projects to Start in 2025",
        post: "Feeling inspired? Here are 5 creative projects to consider in the upcoming year, from digital art to sustainable fashion..."
    }
];


for (const post of posts) {
    mainContent.insertAdjacentHTML("beforeend", `
        <article>
            <img src="${post.image}" alt="Image related to ${post.title}">
            <h2>${post.title}</h2>
            <p>${post.post}</p>
        </article>
    `);
}

