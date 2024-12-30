import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useAppInfo } from '../../common/context/AppInfoProvider';
import { StyledHeader, TeamLogoBox } from './HeaderStyles';
import React from 'react';

const Header = () => {
  const { appInfo } = useAppInfo();
  const navigate = useNavigate();
  const { selectedTeam } = appInfo;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const switchTeam = () => {
    navigate('/team');
    handleClose();
  };
  const manageUsers = () => {
    navigate('/users');
    handleClose();
  };

  return (
    <StyledHeader>
      <div className="title">
        <span className='blue'>Happy </span>
        <span className='red'>New Year </span>
        <span>2025!</span>
      </div>
      <TeamLogoBox>
        <div className={`logo ${selectedTeam?.code}`} />
        <div className="name">Team {selectedTeam?.name}</div>
      </TeamLogoBox>
      <IconButton
        className="icon-button"
        aria-label="menu"
        size="large"
        onClick={openMenu}
      >
        <MenuRoundedIcon className="menu-button" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className="menu-item" onClick={switchTeam}>
          <SwapHorizRoundedIcon className="swap-icon" />
          Switch team
        </MenuItem>
        <MenuItem className="menu-item" onClick={manageUsers}>
          <PeopleAltIcon className="people-icon" />
          Manage
        </MenuItem>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
