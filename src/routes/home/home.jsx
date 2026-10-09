import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => (
  <main className="home_page">
    <section className="home_hero">
      <div className="home_copy">
        <p className="home_eyebrow">A space to pause and reconnect</p>
        <h1>Make room for a life that feels more like yours.</h1>
        <p className="home_intro">
          I’m Dr. Elena Rossi, a clinical psychologist offering thoughtful,
          practical support for life’s difficult seasons. Together, we can make
          sense of what you’re experiencing and find a way forward at your pace.
        </p>
        <Link className="home_cta" to="/words">
          Get to know me <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div
        className="home_visual"
        role="img"
        aria-label="Sunlight falling across a calm, welcoming therapy space"
      >
        <div className="home_visual_note">A gentle place to begin</div>
      </div>
    </section>
    <section className="home_invitation">
      <span className="home_invitation_mark" aria-hidden="true">✳</span>
      <p>You don’t have to have it all figured out to take the first step.</p>
      <Link to="/words">Explore the words page <span aria-hidden="true">→</span></Link>
    </section>
  </main>
);

export default Home;
