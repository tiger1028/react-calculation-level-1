import { useState } from "react";
import {
  Input,
  Container,
  OperationButton,
  Label,
  Button,
  Select,
  Title,
  Option,
} from "./styles";

interface VariableType {
  value: number;
}

enum OperationMethod {
  SUM = "sum",
  AVG = "average",
  MEDIAN = "median",
}

export const CalculateView: React.FC = () => {
  const [inputArray, setInputArray] = useState<VariableType[]>([
    { value: 2 },
    { value: 3 },
  ]);
  const [method, setMethod] = useState<OperationMethod>(OperationMethod.SUM);
  const [result, setResult] = useState(0);

  const addRow = () => {
    setInputArray([...inputArray, { value: 5 }]);
  };

  const deleteRow = (index: number) => {
    setInputArray((preState) => {
      const prevArray = [...preState];
      prevArray.splice(index, 1);
      console.log(index);
      return prevArray;
    });
  };

  const handleSubmit = () => {
    let sum: number = 0;
    let i;
    for (i = 0; i < inputArray.length; i++) {
      sum += Number(inputArray[i].value);
    }
    {
      method == "sum" ? setResult(sum) : setResult(sum / inputArray.length);
    }
  };

  const OnChangeInput = (index: number, targetValue: number) => {
    setInputArray((preinputArray: any) => {
      const predata = [...preinputArray];
      predata[index].value = targetValue;
      return predata;
    });
  };
  return (
    <Container>
      <Title>Calculate</Title>
      <Select id="method" onChange={(e: any) => setMethod(e.target.value)}>
        <Option value={OperationMethod.SUM}>Sum</Option>
        <Option value={OperationMethod.MEDIAN}>Medium</Option>
        <Option value={OperationMethod.AVG}>Average</Option>
      </Select>
      <Button onClick={handleSubmit}> calculate</Button>
      {inputArray.length &&
        inputArray.map((row: any, index: number) => (
          <div key={index}>
            <Input
              type="number"
              value={row.value}
              onChange={(e: any) => OnChangeInput(index, e.target.value)}
            />
            <OperationButton onClick={addRow}>+</OperationButton>
            <OperationButton onClick={() => deleteRow(index)}>
              -
            </OperationButton>
          </div>
        ))}
      <Label>Result: </Label> <Input value={result} disabled />
    </Container>
  );
};
