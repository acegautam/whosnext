import { Container } from '@mui/material';
import styled from 'styled-components';

const UserManagerContainer = styled(Container)`
    font-family: 'Amatic SC';

    .add-button {
        background: #445392 !important;
        padding: 5px 20px !important;
        font-family: 'Amatic SC' !important;
        font-size: 1.5rem !important;
        font-weight: 600 !important;
        color: #fff !important;
    }
    
    .back-button {
        padding: 5px 20px !important;
        font-family: 'Amatic SC' !important;
        font-size: 1.5rem !important;
        font-weight: 600 !important;
        border-radius: 10px !important;
    }

    .user-list {
        height: 50vh;
        overflow-y: scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .name-label span {
        font-family: 'Amatic SC';
        font-size: 1.5rem;
        font-weight: 900;
        line-height: 1.5em;
    }
`

export { UserManagerContainer }