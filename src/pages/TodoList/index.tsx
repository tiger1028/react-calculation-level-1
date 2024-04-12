import { TodoView } from "../../components";
import { WithLayout } from "../../components";

const Todo: React.FC = () => {
  return <TodoView />;
};

export const TodoPage = WithLayout(Todo);
