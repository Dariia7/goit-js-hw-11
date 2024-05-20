export const createMarkup = images => {
    return images.reduce(  // images - масив об'єктів
      (
        html,
        { tags, webformatURL, largeImageURL, likes, views, comments, downloads }
      ) => {
        return (
          html +
          `<li class="container">
      <a href=${largeImageURL} class="card-link js-card-link">
          <img class="photo" src="${webformatURL}" alt="${tags}" >
      </a>
      <div class="info">
          <div>
              <span class="names">Likes</span>
              <span >${likes}</span>
          </div>
          <div >
              <span class="names">Views</span>
              <span >${views}</span>
          </div>
          <div >
              <span class="names">Comments</span>
              <span >${comments}</span>
          </div>
          <div >
              <span class="names">Downloads</span>
              <span >${downloads}</span>
          </div>
      </div>
  </li>
      `
        );
      },
      ''
    );
  };