import App from '../App';
import TeamChooser from '../components/TeamChooser/TeamChooser';
import UserManager from '../components/UserManager/UserManager';

const Routes = [
  { path: "/", element: <App />},
  { path: "team", element: <TeamChooser /> },
  { path: "users", element: <UserManager /> }
]

export default Routes;