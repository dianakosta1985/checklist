import styled from "styled-components";
import { ListItem, Box, Checkbox, List, TextField } from "@mui/material";

export const StyledListItem = styled(ListItem)`
  border-bottom: 1px solid #ccc;
  position: relative;
  color: ${(prop) => (prop.checked ? "#979797" : "#000000")};
`;

export const StyledBox = styled(Box)`
  position: absolute;
  border-top: 1px solid #979797;
  left: 0;
  top: 50%;
  width: 100%;
`;

export const StyledCheckbox = styled(Checkbox)`
  &&&.Mui-checked {
    color: #6200ee;
  }
`;

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 650px;
  width: 360px;
  background-color: #ffffff;
  padding: 64px;
`;

export const StyledList = styled(List)`
  width: 100%;
  max-width: 360px;
  height: 215px;
  overflow-y: auto;
  max-height: 215px;
  padding-top: 0px;
`;

export const StyledTextField = styled.input`
  margin: 0 10px;
  max-width: 200px;
  min-width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  padding: 0 20px 10px;
  ::placeholder {
    white-space: pre-line;
  }
  &:focus {
    outline-color: #6200ee;
    border-radius: 3.5px;
  }
`;
