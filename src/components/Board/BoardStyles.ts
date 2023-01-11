import styled from 'styled-components';

const StyledBoard = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const BadgeList = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`

const NameBadge = styled.div`
  width: 200px;
  padding: 30px;
  margin: 5px 0;
  border: 1px solid salmon;

  &.selected {
    border: 5px dotted crimson;
  }
  &.chosen {
    border: 5px dashed green;
  }
`;

export { StyledBoard, BadgeList, NameBadge };
