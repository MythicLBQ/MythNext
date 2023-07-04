import '../styles/styles.css';
import '../styles/bootstrap.css';
import '../styles/modesta.css';

import Background from '../images/background.png';
import AboutMe from '../images/aboutme.png';
import athens from '../images/clubathens.png'
import FooterComponent from '@/components/footer';

import Image from 'next/image';

function Home() {
  return (
    <main className="Home">
        <div className="fullscreen">
        <link href="https://fonts.cdnfonts.com/css/dalek-pinpoint" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire"></link>
        <link href="https://fonts.cdnfonts.com/css/battenberg-and-custard" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/road-rage" rel="stylesheet"></link>
          <Image src={Background} alt="" className="background"></Image>
            <section className="me">
              <section className="center-object">
                  <a href="https://discord.com/users/847363776961314817"><img src="https://lanyard.cnrad.dev/api/847363776961314817?bg=23283d&borderRadius=8px" alt=""></img></a><br>
                  </br>
                  <a href="https://github.com/MythicLBQ">
                    <img src="https://github-readme-stats.vercel.app/api?username=MythicLBQ&count_private=true&show_icons=true&theme=tokyonight&hide_border=true" alt="" height={"226"} className="stats"></img>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MythicLBQ&theme=tokyonight&layout=compact&hide_border=true" alt="" height={"226"} className="stats"></img>
                  </a>
                  <br>
                  </br>
                  <section className="buttons">
                    <a href="https://patreon.com/MythicStudios" className="btn animation hover patreon-dropshadow roadrage">Support My Work</a>
                    <a href="https://discord.gg/MeZUrZ6Aa3" className="btn animation hover discord-dropshadow roadrage">Personal Discord</a>
                  </section>
              </section>
            </section>
        </div>
        <br>
        </br>
        <div className="aboutme">
          <div className="fullscreen">
            <Image src={AboutMe} alt="" className="background"></Image>
            <section className="me">
              <section className="center-object">
                <h1 className="roadrage">About Me</h1>
                    <p className="Battenberg">Hi Im Mythic, aka Thomas. Im a 20 year old Developer / World Creator with the passion to make everyones vrchat experience better and more amazing.<br>
                    </br>
                    I love all of the people who support me and if there is any form of benifits you would like to see off of patreon lmk.<br>
                    </br>
                    Looking for work done? Discord bot / World? Etc. Message me on Discord! Dms are always open<br>
                    </br>
                    The Clubs I work For Are Posted Below.
                    </p>
              </section>
            </section>
          </div>
        </div>
        <br>
        </br>
        <div className="athens">
          <div className="fullscreen">
            <Image src={athens} alt="" className="background"></Image>
            <section className="me">
              <section className="center-object">
              <h1 className="font-effect-fire DalekPinpoint" >Club Athens</h1>
                  <p className="Battenberg">Club Athens is a 18+ club and one of my newest projects that is in hardcore development,<br>
                  </br> here within the next couple of weeks I plan to have a world and even a custom club currency that can give you vip access, just by being active within our server!</p>
                  <section className="buttons">
                    <a href="https://discord.gg/8FbGAhC3wM" className="btn animation hover discord-dropshadow Battenberg">Club Athens</a>
                  </section>
              </section>
            </section>
          </div>
        </div>
        <br>
        </br>
        <FooterComponent></FooterComponent>
    </main>
  );
}

export default Home;