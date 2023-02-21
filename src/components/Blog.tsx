import highlight from "../assets/images/image 2.png";
import blogOwner from "../assets/images/blog-owner.png";
import blogImage from "../assets/images/Rectangle 8.png";
import eyes from "../assets/images/eyes.png";
import { FacebookRounded, Twitter } from "@mui/icons-material";

function Blog() {
  const articles = [
    {
      img: require("../assets/images/Rectangle 13-1.png"),
      content: "Connecting artificial intelligence with digital product design",
    },
    {
      img: require("../assets/images/Rectangle 13.png"),
      content: "Hello world, or, in other words, why this blog exists",
    },
    {
      img: require("../assets/images/Rectangle 12-1.png"),
      content: "Here are some things you should know regarding how we work",
    },
    {
      img: require("../assets/images/Rectangle 37.png"),
      content: "Here are some things you should know regarding how we work",
    },
    {
      img: require("../assets/images/Rectangle 39.png"),
      content: "Connecting artificial intelligence with digital product design",
    },
    {
      img: require("../assets/images/Rectangle 18.png"),
      content:
        "How modern remote working tools get along with Old School Cowboy's methods",
    },
  ];
  return (
    <main>
      <section className="openblog">
        <article className="blog blog--open">
          <h2 className="blog__head">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h2>
          <p className="blog__summary">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </p>
          <img
            className="blog__photo"
            src={highlight}
            alt="highlight article"
          />
        </article>
      </section>
      <section className="blogcontent">
        <article className="blog blog--readable">
          <div className="blogger">
            <div className="blogger__section">
              <img
                className="blogger__avatar"
                src={blogOwner}
                alt="blog writer avatar"
              />
              <div className="blogger__details">
                <h4 className="blogger__name">Mika Matikainen</h4>
                <span className="blogger__timestamp">
                  Apr 15, 2020 · 4 min read
                </span>
              </div>
            </div>
            <div className="social">
              <button className="social__socialhandles btn--transparent">
                <Twitter />
              </button>
              <button className="social__socialhandles social__socialhandles--last btn--transparent">
                <FacebookRounded />
              </button>
            </div>
          </div>
          <div className="blog__parts">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu
              dui molestie, molestie lectus eu, semper lectus.
            </p>
          </div>
          <div className="blog__parts">
            <h3 className="blog__parts__head">Next on the pipeline</h3>
            <p>
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
          <div className="blog__parts">
            <figure className="blog--readable__photoarea">
              <img
                className="blog--readable__photo"
                src={blogImage}
                alt="man with a beak painted "
              />
              <figcaption className="blog--readable__caption">
                Image caption centered this way and I’ll make this a bit longer
                to indicate the amount of line-height.
              </figcaption>
            </figure>
          </div>
          <div className="blog__parts">
            <p>
              Aenean pharetra quis lacus at viverra. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Aliquam quis posuere ligula.
            </p>
            <p>
              In eu dui molestie, molestie lectus eu, semper lectus. Proin at
              justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
              arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque
              id. Nullam posuere maximus dui et fringilla. Nulla non volutpat
              leo.
            </p>
          </div>
          <div className="blog__parts">
            <p>A list looks like this:</p>
            <ul>
              <li>First item in the list</li>
              <li>
                Second item in the list lorem ipsum dolor sit amet nunc felis
                dolor lorem ipsum sit amet
              </li>
              <li>Third item in the list</li>
            </ul>
          </div>
          <div className="blog__parts">
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
            </p>
          </div>
          <div className="blog__parts">
            <p>
              Thanks for reading,
              <br />
              Mika
            </p>
          </div>
        </article>
        <div className="social social--full">
          <button className="social__socialhandles social--full__socialhandles btn--transparent">
            <FacebookRounded />
            <span>Share on Facebook</span>
          </button>
          <button className="social__socialhandles social--full__socialhandles social__socialhandles--last btn--transparent">
            <Twitter />
            <span>Share on Twitter</span>
          </button>
        </div>
        <span className="blog--readable__tags">
          Tag:<ins>products design</ins> , <ins>culture</ins>
        </span>
        <hr className="blog__divider" />
        <div className="blogger">
          <div className="blogger__section">
            <img
              className="blogger__avatar"
              src={blogOwner}
              alt="blog writer avatar"
            />
            <div className="blogger__details">
              <p>
                <b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin
                School of Creative Leadership Executive MBA participant, Zippie
                advisor, Wolt co-founder, and Nordic Rose stakeholder.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="articles articles--full">
        <img className="articles--full__eyes" src={eyes} alt="eyes pic" />
        <h3 className="articles__head">What to read next</h3>
        <div className="articles__wrapper">
          {articles.map((ele) => {
            return (
              <article className="blog blog--sm">
                <img src={ele.img} alt={`pic for ${ele.content}`} />
                <h3 className="blog__head">{ele.content}</h3>
              </article>
            );
          })}
        </div>
      </section>
      <section className="signup">
        <div className="signup__wrapper">
          <h2 className="signup__head">Sign up for the newsletter </h2>
          <p  className="signup__info">
            If you want relevant updates occasionally, sign up for the private
            newsletter. Your email is never shared.
          </p>
          <div className="inpgrp"><input placeholder="Enter your email..."/><button>SIGN UP</button></div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
