import Background from '../images/background.png';
import AboutMe from '../images/aboutme.png';
import athens from '../images/clubathens.png';
import clubs from '../images/clubsbackground.png';
import doIor from "../images/doIor.png";

import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <main className="Home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/" className="navbar-brand roadragebg">MythicXGN</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link roadrage active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link roadrage" href="/persephone">Persephone</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="fullscreen">
          <Image src={Background} alt="" className="background"/>
          <section className="center-object">
                  <a href="https://discord.com/users/847363776961314817"><img src="https://lanyard.cnrad.dev/api/847363776961314817?bg=23283d&borderRadius=8px"></img></a><br>
                  </br>
                  <a href="https://github.com/MythicLBQ" className="object-center">
                    <picture>
                      <source srcSet="https://github-readme-stats.vercel.app/api?username=MythicLBQ&rank_icon=github&theme=transparent&text_color=FFFFFF&title_color=FFFFFF" media="(prefers-color-scheme: dark)"/>
                      <img src="https://github-readme-stats.vercel.app/api?username=MythicLBQ&show_icons=true" className="stats" height={250}></img>
                    </picture>
                    <picture>
                      <source srcSet="https://github-readme-stats.vercel.app/api/top-langs/?username=MythicLBQ&layout=compact&theme=transparent&text_color=FFFFFF&title_color=FFFFFF" media="(prefers-color-scheme: dark)"/>
                      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MythicLBQ&layout=compact" className="stats" height={250}></img>
                    </picture>
                  </a>
                  <br>
                  </br>
                  <section className="buttons">
                    <a href="https://patreon.com/MythicStudios" className="btn animation hover patreon-dropshadow roadrage">Support My Work</a>
                    <a href="https://discord.gg/MeZUrZ6Aa3" className="btn animation hover discord-dropshadow roadrage">Personal Discord</a>
                  </section>
              </section>
        </div>
        <br>
        </br>
        <div className="aboutme">
          <div className="fullscreen">
            <Image src={AboutMe} alt="" className="background"/>
            <section className="me">
              <section className="center-object">
                <h1 className="roadragebg">About Me</h1>
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
        <div className="doIor">
          <div className="fullscreen">
            <Image src={doIor} className="background" alt=""/>
            <section className="center-object">
              <a href="https://discord.com/users/257624264042086402"><img src="https://lanyard.cnrad.dev/api/257624264042086402?bg=23283d&borderRadius=8px"></img></a><br></br>
              <p className="doIorinfo">DoIor Makes Avatars her Payhip is linked below. Go check her out!</p>
              <section className="buttons">
                <a href="https://payhip.com/Dolor" className="btn animation hover payhip doIortext">Payhip</a>
              </section>
            </section>
          </div>
        </div>
        <br>
        </br>
        <div className="athens">
          <div className="fullscreen">
            <Image src={athens} alt="" className="background"/>
            <section className="me">
              <section className="center-object">
              <h1 className="font-effect-fire DalekPinpoint">Club Athens</h1>
                  <p className="Battenberg">Club Athens is a 18+ club and one of my newest projects that is in hardcore development,<br>
                  </br> here within the next couple of weeks I plan to have a world and even a custom club currency that can give you vip access, just by being active within our server!</p>
                  <section className="buttons">
                    <a href="https://discord.gg/8FbGAhC3wM" className="btn animation hover discord-dropshadow DalekPinpoint">Club Athens</a>
                  </section>
              </section>
            </section>
          </div>
        </div>
        <br>
        </br>
        <div className="creditClubs">
          <div className="fullscreen">
            <Image src={clubs} alt="" className="background"/>
            <section className="me">
              <section className="center-object">
                <h1 className="roadragebg">Clubs</h1>
                <section className="Clubs">
                  <section className="TRP">
                    <img src="https://i.imgur.com/1NHq4Yp.png" className="avatar" alt="theroyalphoenix"></img>
                    <a href="https://discord.gg/royalphoenix" className="btn animation hover discord-dropshadow align-bottom Battenberg">The Royal Phoenix</a>
                  </section>
                  <section className="Sanctuary">
                    <img src="https://i.imgur.com/NM974UM.png" className="SanctuaryImg" alt="clubsanctuary"></img>
                    <a href="https://discord.gg/p38raBJF2Wx" className="btn animation hover discord-dropshadow align-bottom Battenberg">Club Sanctuary</a>
                  </section>
                </section>
              </section>
            </section>
          </div>
        </div>
    </main>
  );
}

export default Home;