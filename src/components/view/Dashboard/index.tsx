import { Container, Content, GoToLink } from "./styles";
export const DashboardView: React.FC = () => {
  return (
    <Container>
      <Content>Welcome to Dashboard!</Content>
      <GoToLink to="/todo">Go to Todo List.</GoToLink>
      <GoToLink to="/calculate">Go to Calcultate View.</GoToLink>
    </Container>
  );
};
