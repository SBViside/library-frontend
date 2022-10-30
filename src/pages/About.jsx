import ProfileCard from "../components/ProfileCard";

function About() {
  window.scrollTo(0, 0);

  return (
    <div className="about container">
      <h1>Информация о нас</h1>
      <ProfileCard />
    </div>
  );
}

export default About;
