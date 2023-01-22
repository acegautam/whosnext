import { StyledBoard, NameBadge, BadgeList, NameAvatar, NameLabel, SpinButton, ColorButton } from './BoardStyles';
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
      if(chosen !== selected) {
        setSelected(chosen);
      }
    }, 500);
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

  return (
    <StyledBoard>
      <BadgeList className={`size-${folks.length}`}>
        {folks.map((f: string, idx: number) => {
          const picked = f === selected ? 'selected' : '';
          const chosen = f === chosenOne || folks.length === 1 ? 'chosen' : '';
          return (
            <NameBadge key={f} className={`name-${idx} ${f} ${picked} ${chosen}`}>
              <NameAvatar className='avatar'><NameLabel>{f}</NameLabel></NameAvatar>
            </NameBadge>
          );
        })}
      </BadgeList>
      {folks.length > 1 && selected === '' && (
        <SpinButton onClick={spinIt} />
      )}
      {(chosenOne || folks.length === 1) && (
        <ColorButton variant='contained' onClick={accept}>I'll Go !</ColorButton>
      )}
    </StyledBoard>
  );
};

export default Board;
