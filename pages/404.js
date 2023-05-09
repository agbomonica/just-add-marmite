import PropTypes from "prop-types";

import Head from "next/head";
import Link from "next/link";

const PageNotFound = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="not-found">
        <h1>404</h1>
        <h2>The page cannot be found :(</h2>
        <p>
          Redirecting to the
          <Link href="/">Homepage for more marmite goodness...</Link>
        </p>
        <style jsx>{`
          .not-found {
            background: #fff;
            padding: 30px;
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
            transform: rotateZ(-1deg);
          }

          h1 {
            font-size: 3em;
          }
        `}</style>
      </div>
    </>
  );
};

PageNotFound.propTypes = {
  title: PropTypes.string,
};

PageNotFound.defaultProps = {
  title: "404 page",
};

export default PageNotFound;
