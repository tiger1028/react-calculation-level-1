import {
  Container,
  Header,
  HeaderContainer,
  HeaderItem,
  Body,
  RowContainer,
  RowItem,
} from "./styles";
interface TableProps {
  headers: string[];
  records: any[];
  columns: string[];
  renders?: Map<string, (column: string, value: unknown) => unknown>;
}

export const TableComponent: React.FC<TableProps> = (props) => {
  const { headers, records, columns } = props;

  return (
    <Container>
      <Header>
        <HeaderContainer>
          {headers.map((header, index) => (
            <HeaderItem key={index}> {header}</HeaderItem>
          ))}
        </HeaderContainer>
      </Header>
      <Body>
        {records.map((record, index) => (
          <RowContainer key={index}>
            {columns.map((column, index) => (
              <RowItem key={index}>{record[column]}</RowItem>
            ))}
          </RowContainer>
        ))}
      </Body>
    </Container>
  );
};
