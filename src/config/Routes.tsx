import App from '../App';
import TeamChooser from '../components/TeamChooser/TeamChooser';

const Routes = [
  { path: "/", element: <App />},
  { path: "team", element: <TeamChooser /> }
]

export default Routes;