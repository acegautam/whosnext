import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (<StyledFooter>
    <small>
      Made with <div className='heart'>&hearts;</div> by{' '}
      <a href='mailto:gautam.mankatti@lowes.com'>
        <span className='dude'>Gautam Mankatti</span>
      </a>
    </small>
    <a
      className='icons-credit'
      href='https://www.flaticon.com/free-icons/bot'
      target='_blank'
      title='bot icons'
      rel='noreferrer'
    >
      Bot icons by Smashicons - Flaticon
    </a>
  </StyledFooter>)
}

export default Footer;