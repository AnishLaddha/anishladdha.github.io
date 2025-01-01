const articles = [
  {
    image: "American_Flag.jpg",
    title: "Article Title 1",
    subtitle: "Subtitle goes here 1",
    link: "https://example.com/article1",
  },
];

function renderArticles() {
  const articlesContainer = document.querySelector(".articles");

  articles.forEach((article) => {
    const articleLink = document.createElement("a");
    articleLink.href = article.link;
    articleLink.target = "_blank"; // Open link in a new tab
    articleLink.rel = "noopener noreferrer";
    articleLink.classList.add("article-link"); // Optional: add a class for styling if needed

    const articleButton = document.createElement("div");
    articleButton.classList.add("article-button");

    const articleImage = document.createElement("div");
    articleImage.classList.add("article-image");
    const img = document.createElement("img");
    img.src = article.image;
    img.alt = "Article Image";
    articleImage.appendChild(img);

    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");
    const title = document.createElement("h3");
    title.classList.add("article-title");
    title.textContent = article.title;
    const subtitle = document.createElement("p");
    subtitle.classList.add("article-subtitle");
    subtitle.textContent = article.subtitle;

    articleContent.appendChild(title);
    articleContent.appendChild(subtitle);

    articleButton.appendChild(articleImage);
    articleButton.appendChild(articleContent);

    // Wrap articleButton in the <a> tag
    articleLink.appendChild(articleButton);
    articlesContainer.appendChild(articleLink);
  });
}

// Call the render function after DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderArticles);
