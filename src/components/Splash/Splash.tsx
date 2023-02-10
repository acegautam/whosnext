import { Button } from '@mui/material';
import { useAppInfo } from '../../common/context/AppInfoProvider';
import HelpText from './HelpText';
import { AppLogo, StyledSplash } from './SplashStyles';

const Splash: React.FC = () => {
  const { appInfo, updateAppInfo } = useAppInfo();

  const start = () => updateAppInfo({ ...appInfo, showSplash: false });
  return (
    <StyledSplash>
      <AppLogo />
      <Button
        className='btn-start'
        size='large'
        variant='contained'
        onClick={start}
      >
        Let's get started
      </Button>
      <HelpText />
    </StyledSplash>
  );
};

export default Splash;
