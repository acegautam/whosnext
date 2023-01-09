import { StyledBoard, NameBadge } from './BoardStyles';
import folks from '../data/folks';

const Board: React.FC = () => {
  return (
    <StyledBoard>
      {folks.map((f: string) => {
        return <NameBadge className={f}>{f}</NameBadge>;
      })}
    </StyledBoard>
  );
};

export default Board;
