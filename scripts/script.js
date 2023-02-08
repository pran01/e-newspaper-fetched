class TopArticle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const topArticleTemplate = document.createElement("template");
    topArticleTemplate.innerHTML = `
<link href="styles/style.css" rel="stylesheet">
<article id="article-1">
            <header class="article-header">
                ${this.getAttribute("header")}
            </header>
            ${
              this.hasAttribute("image")
                ? `<figure class="article-image-container">
                  <img src=${this.getAttribute(
                    "image"
                  )} alt=${this.getAttribute(
                    "image-caption"
                  )} class="article-image">
                  <figcaption class="article-image-caption">
                      <strong>
                          ${this.getAttribute("image-caption")}
                      </strong>
                  </figcaption>
              </figure>`
                : ""
            }
            <section class="article-body">
                <div class="article-author">
                    <div class="name">${this.getAttribute("author-name")}
                    </div>
                    <div class="organisation">
                        ${this.getAttribute("author-organisation")}
                    </div>
                </div>
                ${this.getAttribute("body")}
            </section>
        </article>
`;
    shadowRoot.appendChild(topArticleTemplate.content);
  }
}

class WideArticle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const wideArticleTemplate = document.createElement("template");
    wideArticleTemplate.innerHTML = `
        <link href="styles/style.css" rel="stylesheet">
        <article id="article-2">
                <header class="article-header">
                    ${this.getAttribute("header")}
                </header>
                ${
                  this.hasAttribute("image")
                    ? `<figure class="article-image-container">
                    <img src=${this.getAttribute(
                      "image"
                    )} alt="smoking" class="article-image">
                    <figcaption class="article-image-caption">
                        <strong>
                            ${this.getAttribute("image-caption")}
                        </strong>
                    </figcaption>
                </figure>`
                    : ""
                }
                <section class="article-body">
                    <div class="article-author">
                        <div class="name">${this.getAttribute("author-name")}
                        </div>
                        <div class="organisation">
                            ${this.getAttribute("author-organisation")}
                        </div>
                    </div>
                    ${this.getAttribute("body")}
                </section>
            </article>
        `;
    shadowRoot.appendChild(wideArticleTemplate.content);
  }
}

class SideArticle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const sideArticleTemplate = document.createElement("template");
    sideArticleTemplate.innerHTML = `
    <link href="styles/style.css" rel="stylesheet">
        <article id="article-3">
                <header class="article-header">
                    ${this.getAttribute("header")}
                </header>
                ${
                  this.hasAttribute("image")
                    ? `<figure class="article-image-container">
                        <img src=${this.getAttribute(
                          "image"
                        )} alt=${this.getAttribute(
                        "image-caption"
                      )} class="article-image">
                        <figcaption class="article-image-caption">
                            <strong>
                                ${this.getAttribute("image-caption")}
                            </strong>
                        </figcaption>
                    </figure>`
                    : ""
                }
                <section class="article-body">
                    <div class="article-author">
                        <div class="name">
                           ${this.getAttribute("author-name")}
                        </div>
                        <div class="organisation">
                            ${this.getAttribute("author-organisation")}
                        </div>
                    </div>
                    ${this.getAttribute("body")}
                </section>
            </article>
        `;
    shadowRoot.appendChild(sideArticleTemplate.content);
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const footerTemplate = document.createElement("template");
    footerTemplate.innerHTML = `
    <link href="styles/style.css" rel="stylesheet">
        <footer>
            <section>
                <header>
                    USA TODAY
                </header>
                <p>Families despair over post-holiday
                    return to remote learning.</p>
            </section>
            <section>
                <header>
                    Home
                </header>
                <p>Four designers make
                    new year predictions.</p>
            </section>
            <section>
                <header>
                    Weather
                </header>
                <p>High 450 | Low 320
                    Sunny. Forecast</p>
            </section>
            <section>
                <p>volume 69 | No. 7
                </p>
                <p>
                    To subscribe: 910-577-7323
                    02022
                </p>
                <p>
                    <strong>
                        $2.00
                    </strong>
                </p>
            </section>
        </footer>
        `;
    shadowRoot.appendChild(footerTemplate.content);
  }
}

class NavElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const navElementTemplate = document.createElement("template");
    navElementTemplate.innerHTML = `
    <link href="styles/style.css" rel="stylesheet">
    <link href='https://css.gg/arrow-left-o.css' rel='stylesheet'>
    <link href='https://css.gg/arrow-right-o.css' rel='stylesheet'>
        <nav>
            ${
              this.hasAttribute("disabled-left")
                ? `
            <button>
                <i class="gg-arrow-left-o disabled-btn"></i>
            </button>
            `
                : `
            <button onclick="location.href='${this.getAttribute("prev-page")}'">
                <i class="gg-arrow-left-o"></i>
            </button>
            `
            }
            ${
              this.hasAttribute("disabled-right")
                ? `
            <button>
                <i class="gg-arrow-right-o disabled-btn"></i>
            </button>
            `
                : `
            <button onclick="location.href='${this.getAttribute("next-page")}'">
                
                <i class="gg-arrow-right-o"></i>
            </button>
            `
            }
        </nav>
    `;
    shadowRoot.appendChild(navElementTemplate.content);
  }
}

customElements.define("top-article", TopArticle);
customElements.define("wide-article", WideArticle);
customElements.define("side-article", SideArticle);
customElements.define("footer-element", Footer);
customElements.define("nav-element", NavElement);
