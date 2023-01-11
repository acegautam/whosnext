import styled from 'styled-components';

const StyledBoard = styled.div`
  width: 80%;
  height: 400px;
  border: 1px solid #ccc;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const NameBadge = styled.div`
  width: 200px;
  padding: 30px;
  border: 1px solid salmon;

  &.selected {
    border: 5px dashed crimson;
  }
  &.chosen {
    border: 5px dashed green;
  }
`;

export { StyledBoard, NameBadge };
