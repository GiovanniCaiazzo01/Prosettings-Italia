import { Card } from "../../components";
import { Logo } from "../../layouts";

const HomePage = () => {
  return (
    <>
      <Logo
        src={
          "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/prosettings-logo.png?dpr=1|f=auto|fit=cover|height=72|q=85|width=400"
        }
      />
      <Card />
    </>
  );
};

export { HomePage };
