import { Card, CardContent } from '@mui/material'
import { redirect, useNavigate } from 'react-router-dom'
import { slugify } from '../../utils/helpers'
import { StyledHeader } from '../Header/HeaderStyles'
import { ChooserBar, StyledChooser } from './TeamChooserStyles'

const TeamChooser: React.FC = () => {
  let navigate = useNavigate()
  const teams = ['Marvel', 'Web Dev']
  const handleClick = () => {
    console.log('redirecting...')
    navigate('/')
  }

  return (
    <StyledChooser>
      <StyledHeader>
        <div className='title'>Who's Next?</div>
      </StyledHeader>
      <ChooserBar>
        {teams.map((team) => (
          <Card
            key={slugify(team)}
            className='team-card'
            sx={{ width: 250, maxWidth: 275 }}
            onClick={handleClick}
          >
            <CardContent className='content-box'>
              <div className={`team-logo ${slugify(team)}`} />
              <div className='team-name'>{team}</div>
            </CardContent>
          </Card>
        ))}
      </ChooserBar>
      <div className='pick-label'>Pick your team</div>
    </StyledChooser>
  )
}

export default TeamChooser
