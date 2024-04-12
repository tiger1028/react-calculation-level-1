import {
  Container,
  ErrorTitle,
  GoToHomePage,
  NotExistText,
  NotFoundText,
} from "./styles";

export const NotFoundView: React.FC = () => {
  return (
    <Container>
      <ErrorTitle>404</ErrorTitle>
      <NotExistText>This page does not exist!</NotExistText>
      <NotFoundText>
        The page you are looing for could not be found!
      </NotFoundText>
      <GoToHomePage to="/">Go to Homepage!</GoToHomePage>
    </Container>
  );
};
