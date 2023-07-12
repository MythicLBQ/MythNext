import Background from '../../images/background.png';

import Image from 'next/image';
import Link from 'next/link';

function Persephone() {
  return (
    <main className="persephone">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/" className="navbar-brand roadragebg">MythicXGN</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link roadrage" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link roadrage" href="/persephone">Persephone</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="fullscreen">
            <Image src={Background} alt="" className="background"></Image>
            <section className="me">
                <section className="center-object">
                    <h1 className="roadragebg">Kore</h1>
                    <p className="Battenberg">Commands & Information Coming Soon.</p>
                </section>
            </section>
        </div>
    </main>
  );
}

export default Persephone;