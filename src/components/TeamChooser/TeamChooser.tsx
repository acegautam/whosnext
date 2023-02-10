import { Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { teams } from '../../common/constants';
import { useAppInfo } from '../../common/context/AppInfoProvider';
import { ITeam } from '../../common/context/ContextTypes';
import { StyledHeader } from '../Header/HeaderStyles';
import Splash from '../Splash/Splash';
import { ChooserBar, StyledChooser } from './TeamChooserStyles';

const TeamChooser: React.FC = () => {
  const { appInfo, updateAppInfo } = useAppInfo();

  let navigate = useNavigate();
  const selectTeam = (selectedTeam: ITeam) => {
    updateAppInfo({
      ...appInfo,
      selectedTeam,
    });
    navigate('/');
  };

  return (
    <StyledChooser>
      <StyledHeader>
        <div className='title'>Who's Next?</div>
      </StyledHeader>
      {appInfo.showSplash && <Splash />}
      {!appInfo.showSplash && (
        <>
          <ChooserBar>
            {teams.map((team) => (
              <Card
                key={team.code}
                className='team-card'
                sx={{ width: 250, maxWidth: 275 }}
                onClick={() => selectTeam(team)}
              >
                <CardContent className='content-box'>
                  <div className={`team-logo ${team.code}`} />
                  <div className='team-name'>{team.name}</div>
                </CardContent>
              </Card>
            ))}
          </ChooserBar>
          <div className='pick-label'>Pick your team</div>
        </>
      )}
    </StyledChooser>
  );
};

export default TeamChooser;
