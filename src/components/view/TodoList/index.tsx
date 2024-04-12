import { TableComponent } from "../../common";
import { Container } from "./styles";
import { useEffect, useState } from "react";

const TodoHeaders = ["ID", "UserId", "Title", "description"];
const TodoColumns = ["id", "userId", "title", "description"];
const todos = [
  {
    id: 1,
    userId: "123dsadasd",
    title: "afasdf",
    description: "asfdsafdaf",
  },
  {
    id: 2,
    userId: "2131dsadasd",
    title: "ouiuoiup",
    description: "oupiupo",
  },
];

export const TodoView: React.FC = () => {
  const [data, setData] = useState(todos);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <TableComponent
        headers={TodoHeaders}
        records={data}
        columns={TodoColumns}
      />
    </Container>
  );
};
