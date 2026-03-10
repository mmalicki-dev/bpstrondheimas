import { Link } from "react-router-dom";
import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import Typography from "../../components/Atoms/Typography/Typography";

const NotFound = () => {
  return (
    <MainLayout>
      <Typography variant="h1">404</Typography>
      <Typography variant="p">Page not found.</Typography>
      <Link to="/">Go back home</Link>
    </MainLayout>
  );
};

export default NotFound;
