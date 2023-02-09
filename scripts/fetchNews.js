const api_key = "pub_1682587aaae7d871ca330b3f32ff492ae3b6b";

//wide=2000 to 2500 characters image compulsary
//side=1300 to 1800 characters image not there
//top= more than 800 characters image doesnt matter

function fetchNews() {
  let headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");
  fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&language=en`, {
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => data.results)
    .then((results) => {
      console.log(results);
      document.querySelector(".loader-container").style.display = "none";
      let topFound = false,
        wideFound = false,
        sideFound = false;
      results.map((result) => {
        if (
          result.image_url &&
          result.content.length > 2000 &&
          result.content.length < 2500 &&
          !wideFound
        ) {
          console.log("wide found");
          const wideArticle = document.querySelector("wide-article");
          wideArticle.setAttribute("body", result.content);
          wideArticle.setAttribute("image", result.image_url);
          wideArticle.setAttribute("header", result.title);
          wideFound = true;
          return;
        }
        if (
          !result.image_url &&
          result.content.length > 1300 &&
          result.content.length < 2000 &&
          !sideFound
        ) {
          console.log("side found");
          const sideArticle = document.querySelector("side-article");
          sideArticle.setAttribute("body", result.content);
          sideArticle.setAttribute("header", result.title);
          sideFound = true;
          return;
        }
        if (result.content.length > 800 && !topFound) {
          console.log("top found");
          //   console.log(result.content);
          const topArticle = document.querySelector("top-article");
          topArticle.setAttribute("body", result.content);
          topArticle.setAttribute("header", result.title);
          topFound = true;
          return;
        }
      });
    });
}
fetchNews();
