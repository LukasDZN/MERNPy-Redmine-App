import './notFound.css';

export default function NotTribeUser() {
    return (
        <a href="" target="_blank">
        <header className="top-header">
        </header>

        {/* <!--dust particel--> */}
        <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
        </div>
        {/* <!--Dust particle end---> */}

        {/* <!-- BEGIN Lamp --> */}
        {/* <div className="lamp__wrap">
        <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
            <div className="bulb"></div>
            </div>
            <div className="light"></div>
        </div>
        </div> */}
        {/* <!-- END Lamp --> */}
        <section className="error">
        {/* <!-- Content --> */}
        <div className="error__content">
            <div className="error__message message">
            <h1 className="message__title">403 Forbidden</h1>
            <p className="message__text">Only Tribe users are allowed to register.</p>
            </div>
            <div className="error__nav e-nav">
            <a href="http://localhost:3000/login" className="e-nav__link"></a>
            </div>
        </div>
        {/* <!-- END Content --> */}

        </section>

        </a>
    );
};