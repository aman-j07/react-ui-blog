import highlight from "../assets/images/image 2.png";
import Suggestions from "./Suggestions";

function Home() {
    const articles = [
        {
          img: require("../assets/images/Rectangle 12-1.png"),
          title: "Here are some things you should know regarding how we work",
        },
        {
          img: require("../assets/images/Rectangle 13-1.png"),
          title:
            "Granny gives everyone the finger, and other tips from OFFF Barcelona",
        },
        {
          img: require("../assets/images/Rectangle 13.png"),
          title: "Hello world, or, in other words, why this blog exists",
        },
        {
          img: require("../assets/images/Rectangle 12.png"),
          title: "Here are some things you should know regarding how we work",
        },
        {
          img: require("../assets/images/Rectangle 14.png"),
          title: "Connecting artificial intelligence with digital product design",
        },
        {
          img: require("../assets/images/Rectangle 15.png"),
          title: "It’s all about finding the perfect balance",
        },
        {
          img: require("../assets/images/Rectangle 15.png"),
          title: "I believe learning is the most important skill",
        },
        {
          img: require("../assets/images/Rectangle 13-2.png"),
          title: "Clients are part of the team",
        },
        {
          img: require("../assets/images/Rectangle 19.png"),
          title: "Clients are part of the team",
        },
        {
          img: require("../assets/images/Rectangle 17.png"),
          title: "Here are some things you should know regarding how we work",
        },
        {
          img: require("../assets/images/Rectangle 16.png"),
          title: "Connecting artificial intelligence with digital product design",
        },
        {
          img: require("../assets/images/Rectangle 18.png"),
          title:
            "How modern remote working tools get along with Old School Cowboy's methods",
        },
      ];
    
  return (
    <main>
        <section className="highlight">
          <article className="blog blog--lg">
            <img
              className="blog__photo"
              src={highlight}
              alt="highlight blog pic"
            />
            <h2 className="blog__head">
              A few words about this blog platform, Ghost, and how this site was
              made
            </h2>
            <p className="blog__summary">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </p>
          </article>
        </section>
        <Suggestions title='All Articles' articles={articles}/>
      </main>
  )
}

export default Home