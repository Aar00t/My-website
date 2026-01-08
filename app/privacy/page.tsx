
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-5xl px-6 py-10">
        <article className="prose prose-invert max-w-3xl">
          <h1>Privacy Notice</h1>
          <br />
          <p>
            This website uses Google Analytics to collect basic usage statistics,
            such as page views, browser type, and approximate location. This data
            is collected only with your consent and is used to help improve the
            website.
          </p>
          <br />
          <p>
            Google Analytics may store cookies and process IP-related data
            outside the EU. No personally identifiable information, such as
            names or email addresses, is collected or stored by this website.
          </p>
          <br />
          <p>
            You can withdraw your cookie consent at any time by clearing your
            browser cookies.
          </p>
          <br />
          <p>
            For questions about data privacy, contact:{" "}
            <b>aaro.nuoramo@gmail.com</b>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
