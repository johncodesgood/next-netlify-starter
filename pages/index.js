import Head from "next/head";

export default function Home() {
  function handleClick(e) {
    e.preventDefault;
    const inputPassword = document.getElementById("password-input").value;
    if (inputPassword && inputPassword.toLowerCase() === "flipforme") {
      window.location.href =
        "https://fod-client-staging-jlpc4.ondigitalocean.app/";
    } else {
      console.log("NO FLIP");
      var errorElement = document.getElementById("errorMessage");
      errorElement.style.display = "block";
      var errorElementHolder = document.getElementById("errorMessageHolder");
      errorElementHolder.style.display = "none";
      document.getElementById("password-input").value = "";
      setTimeout(() => {
        errorElement.style.display = "none";
        errorElementHolder.style.display = "block";
      }, "3000");
    }
  }

  return (
    <div className="container bg">
      <Head>
        <title>Flipped On Dogs</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <img
          className="hero-image"
          src="/FlippedOnDogsLogo.png"
          alt="Flipped On Dogs Logo"
        />
        <p className="hero-text">
          Enter your password
          <br />
          to play the game.
        </p>
        <div className="flex-input">
          <input id="password-input"></input>
          <button className="submit-button" onClick={(e) => handleClick(e)}>
            SUBMIT
          </button>
        </div>
        <div id="errorMessage">
          <p className="error-text">
            We're sorry but flip says this isn't the correct password!
          </p>
        </div>
        <div id="errorMessageHolder">
          <p className="error-text">&nbsp;</p>
        </div>
        <div className="footer">
          <div className="social-text">
            <p>
              Don’t have a password yet?
              <br />
              Follow us for an invitation play Flipped on Dogs.
            </p>
          </div>
          <a href="https://www.facebook.com/FlippedOnDogs/" target="_blank">
            <img
              className="share-icons"
              src="/facebook-logo.png"
              alt="Facebook logo"
            />
          </a>
          <a href="https://www.instagram.com/flippedondogs" target="_blank">
            <img
              className="share-icons"
              style={{ marginRight: "10px", marginLeft: "10px" }}
              src="/instagram-logo.png"
              alt="Instragram logo"
            />
          </a>
          <a href="https://www.tiktok.com/@flippedondogs" target="_blank">
            <img
              className="share-icons"
              src="/tiktok-logo.png"
              alt="TikTok logo"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
