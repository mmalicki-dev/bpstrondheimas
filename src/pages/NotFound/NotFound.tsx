import { Link } from "react-router-dom";
import MainLayout from "../../components/Templates/MainLayout/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go back home</Link>
    </MainLayout>
  );
};

export default NotFound;
