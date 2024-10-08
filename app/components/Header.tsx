import Link from "next/link";
export default function Header(){
  return(
    <header>
      <h2><Link href="/">My Portfolio Site</Link></h2>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}