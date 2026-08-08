import React from "react";
import Header from "../Header/Header";
import Card from "../Cards/Card";
import Footer from "../Footer/Footer";
import aporia from "../../assets/logos/Aporia.png";
import geoExplorer from "../../assets/logos/geoexplorer.png";
import TifinaghIgnite from "../../assets/logos/tifinaghiginite.png";
import dzairQuiz from "../../assets/logos/dzairquiz.png";

export default function Content() {
  const data = [
    {
      name: "Aporia - Into the Dark",
      description:
        "A maze in dungeon with treacherous corridors, riddled with traps and relentless monsters.",
      logo: aporia,
      iOSLink:
        "https://apps.apple.com/fr/app/aporia-into-the-dark/id6776793051",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.hornetsoftent.aporia",
    },
    {
      name: "Géo Explorer",
      description:
        "Explore the world through captivating and educational geographical challenges!",
      logo: geoExplorer,
      iOSLink: "https://apps.apple.com/fr/app/g%C3%A9oexplorer/id6746364868",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.hornetSoftent.GeoExplorer",
    },
    {
      name: "Tifinagh Ignit",
      description:
        "Master the Amazigh alphabet through interactive and fun exercises!",
      logo: TifinaghIgnite,
      iOSLink: "https://apps.apple.com/fr/app/tifinagh-ignite/id6474455789",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.kutami.tifinaghignite",
    },
    {
      name: "Dzair Quiz",
      description:
        "Discover Algeria through stimulating quizzes about its history and culture!",
      logo:dzairQuiz,
      iOSLink: "https://apps.apple.com/fr/app/dzair-quiz/id6451343748",
      androidLink:
        "https://play.google.com/store/apps/details?id=com.kutami.dzairquiz",
    },
  ];
  return (
    <section className="content">
      <div className="container">
        <Header />
        <div className="container-card">
          {data.map((app) => (
            <Card
              key={app.name}
              name={app.name}
              logo={app.logo}
              iOSLink={app.iOSLink}
              androidLink={app.androidLink}>
              {app.description}
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
