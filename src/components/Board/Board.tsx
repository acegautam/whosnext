import { StyledBoard, NameBadge, BadgeList, NameAvatar, NameLabel, SpinButton, ColorButton } from './BoardStyles';
import { chooseRandomName } from '../../utils/helpers';
import { useEffect, useRef, useState } from 'react';
import {
  fetchTeam,
  resetTeam,
  updatePresented,
} from '../../utils/api';
import { FolksReponseType } from '../../types/common';

const Board: React.FC = () => {
  const [allFolks, setAllFolks] = useState([]);
  const [folks, setFolks] = useState([]);
  const [presentedFolks, setPresentedFolks] = useState<string[] | []>([]);;
  const [chosenOne, setChosenOne] = useState('');
  const [selected, setSelected] = useState('');
  const team = 'marvel'
  const refId = useRef('')

  useEffect(() => {
    const fetchFolks = async () => {
      // get all participants
      const { data } = await fetchTeam(team);
      if (!data || data.length === 0) return;
      refId.current = data[0].ref['@ref'].id;
      const { participants, presented } = data[0].data
      const allData = participants.map(
        (item: FolksReponseType) => item.name
      );
      setAllFolks(allData);

      setPresentedFolks(presented);

      // filter off presented guys
      const folksData =
      allData.filter((name: string) => !presented.includes(name)) || [];
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
      await resetTeam(refId.current, team);
      return;
    }
    const filteredFolks = folks.filter((f) => f !== chosenOne);
    setFolks(filteredFolks);
    setPresentedFolks([...presentedFolks, chosenOne]);
    await updatePresented(refId.current, team, [...presentedFolks, chosenOne]);
  };

  return (
    <StyledBoard>
      <BadgeList className={`size-${folks.length}`}>
        {folks.map((f: string, idx: number) => {
          const picked = f === selected ? 'selected' : '';
          const chosen = f === chosenOne || folks.length === 1 ? 'chosen' : '';
          return (
            <NameBadge key={f} className={`name-${idx} ${f} ${picked} ${chosen}`}>
              <NameLabel>{f}</NameLabel>
              <NameAvatar className='avatar'></NameAvatar>
              <NameLabel>{f}</NameLabel>
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
