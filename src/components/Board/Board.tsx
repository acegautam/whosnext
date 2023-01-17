import Button from '@mui/material/Button';
import { StyledBoard, NameBadge, BadgeList } from './BoardStyles';
import { chooseRandomName } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import {
  fetchParticipants,
  fetchPresented,
  resetPresented,
  updateChosenOne,
} from '../../utils/api';
import { FolksReponseType } from '../../types/common';

const Board: React.FC = () => {
  const [allFolks, setAllFolks] = useState([]);
  const [folks, setFolks] = useState([]);
  const [chosenOne, setChosenOne] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const fetchFolks = async () => {
      // get all participants
      const response = await fetchParticipants();
      if (!response?.data) return;
      const allData = response.data.map(
        (item: FolksReponseType) => item.data.name
      );
      setAllFolks(allData);

      // get all presented
      const presented = await fetchPresented();
      const presentedData =
        presented?.data?.map((item: FolksReponseType) => item.data.name) || [];

      // filter off presented guys
      const folksData =
        allData.filter((name: string) => !presentedData.includes(name)) || [];
      setFolks(folksData);
    };

    fetchFolks();
  }, []);

  const spinIt = () => {
    setSelected('');
    setChosenOne('');
    let chosen: string = '';
    const timerId = setInterval(() => {
      chosen = chooseRandomName(folks);
      setSelected(chosen);
    }, 200);
    setTimeout(() => {
      clearInterval(timerId);
      setChosenOne(chosen);
      setSelected('');
    }, 5000);
  };

  const accept = async () => {
    setSelected('');
    setChosenOne('');
    if (folks.length === 1) {
      setFolks(allFolks);
      await resetPresented();
      return;
    }
    const filteredFolks = folks.filter((f) => f !== chosenOne);
    setFolks(filteredFolks);
    await updateChosenOne(chosenOne);
  };
  const getMode = (count: number) => {
    if (count === 2) return 'Coin Flip mode';
    if (count === 1) return 'Default presenter mode';
    return '';
  };
  return (
    <StyledBoard>
      <div>{getMode(folks.length)}</div>
      <BadgeList>
        {folks.map((f: string) => {
          const picked = f === selected ? 'selected' : '';
          const chosen = f === chosenOne || folks.length === 1 ? 'chosen' : '';
          return (
            <NameBadge key={f} className={`${f} ${picked} ${chosen}`}>
              {f}
            </NameBadge>
          );
        })}
      </BadgeList>
      {folks.length > 1 && (
        <Button variant='contained' size='large' onClick={spinIt}>
          Spin it!
        </Button>
      )}
      {(chosenOne || folks.length === 1) && (
        <Button
          variant='contained'
          color='success'
          size='large'
          onClick={accept}
        >
          Accept
        </Button>
      )}
    </StyledBoard>
  );
};

export default Board;
