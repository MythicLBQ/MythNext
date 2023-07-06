

import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <main className="kore">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/" className="navbar-brand roadragebg">MythicXGN</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link roadrage" href="/">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link roadrage" href="/kore">Kore</a>
                </li>
                </ul>
            </div>
        </nav>
        <div className="fullscreen">
        <link href="https://fonts.cdnfonts.com/css/road-rage" rel="stylesheet"></link>

        </div>
    </main>
  );
}

export default Home;