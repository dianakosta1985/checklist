import React, { useEffect, useState } from "react";
import {
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material";
import {
  StyledListItem,
  StyledBox,
  StyledCheckbox,
  Container,
  StyledList,
  StyledTextField,
} from "./style";

const CheckList = () => {
  const [checkBoxList, setCheckBoxList] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let sum = checkBoxList
      .filter((item) => !item.checked)
      .reduce((accumulator, item) => {
        return accumulator + item.label;
      }, 0);
    setCounter(sum);
  }, [checkBoxList]);

  const handlePress = (e) => {
    if (e.key === "Enter") {
      const newItem = { label: Number(e.target.value), checked: false };
      setCheckBoxList([...checkBoxList, newItem]);
      e.target.value = "";
    }
  };

  const handleToggle = (e, i) => {
    const arr = checkBoxList;
    arr[i].checked = e.target.checked;
    setCheckBoxList([...arr]);
  };

  return (
    <Container>
      <Box sx={{ height: "240px" }}>
        <StyledList dense>
          {checkBoxList.map((item, i) => {
            return (
              <StyledListItem
                checked={item.checked}
                key={item.label}
                secondaryAction={
                  <StyledCheckbox
                    edge="end"
                    onChange={(e) => handleToggle(e, i)}
                  />
                }
                disablePadding
              >
                {item.checked && <StyledBox />}

                <ListItemButton>
                  <ListItemText key={item.label} primary={item.label} />
                </ListItemButton>
              </StyledListItem>
            );
          })}
        </StyledList>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="350px"
        alignItems="center"
      >
        <StyledTextField
          type="number"
          placeholder="New value goes here. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Hit enter to add"
          onKeyDown={(e) => handlePress(e)}
        />
        <Box>{`=${counter}`}</Box>
      </Box>
    </Container>
  );
};
export default CheckList;
