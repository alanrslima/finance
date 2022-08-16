import { ReactElement } from "react";
import { Container } from "./styles";

export function SelectInput(): ReactElement {
  const options = [
    { value: "1", label: "Jan, 2022" },
    { value: "2", label: "Fev, 2022" },
    { value: "3", label: "Mar, 2022" },
    { value: "4", label: "Abr, 2022" },
    { value: "5", label: "Mai, 2022" },
  ];

  return (
    <Container variant="filled" placeholder="Data">
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Container>
  );
}
