import "../../styles/css/common.css";
import "../../styles/css/layout.css";
import Logo from "@/components/svg/Logo";

const DashboardPage = () => {
  const gnbExample = [
    { name: "TECHNOLOGY" },
    { name: "IDEAS" },
    { name: "LEADERSHIP" },
    { name: "VIDEO" },
    { name: "NEWS" },
    { name: "FINANCE" },
    { name: "ENTERTAINMENT" },
  ];
  return (
    <>
      <main role="main">
        <header className="header">
          <a className="header__logo">
            {/* <img src={logo.src} alt="logo" /> */}
            <Logo />
          </a>
          <nav className="header__gnb">
            <ul>
              {gnbExample?.map((menu) => (
                <li>
                  <p>{menu.name}</p>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__ham-btn">
            <p>nav icon</p>
          </div>
        </header>
        <div className="main-board-container">
          <h2 className="blind">main board container</h2>
          <section className="main-section">main-section</section>
          <section className="ranking-section">
            <article className="ranking-featured-story-area">
              FEATURED STORIES
            </article>
            <article className="ranking-articles">ARTICLES</article>
          </section>
          <section className="introduce-section">
            <article className="introduce-read-area">READ MORE</article>
            <article className="introduce-articles">ARTICLES</article>
          </section>
        </div>
        <footer className="footer">FOOTER</footer>
      </main>
    </>
  );
};

export default DashboardPage;
