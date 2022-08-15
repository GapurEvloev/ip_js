import ErrorMessage from "../components/errorMessage/ErrorMessage";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

const Page404 = () => {
  return (
    <div className="error">
      <Helmet>
        <meta
          name="description"
          content="Error Page"
        />
        <title>Error</title>
      </Helmet>
      <ErrorMessage/>
      <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
      <Link style={{'color': 'blue', 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
    </div>
  )
};

export default Page404;