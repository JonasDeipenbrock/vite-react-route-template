import './App.css';
import { WithChildren } from './models/typehelpers';
import { BrowserRouter as RouteProvider } from 'react-router-dom';
import Main from './Components/Main';
/**
 * Wrapper component for all providers
 */
const Provider = (props: WithChildren) => {
    return <RouteProvider>{props.children}</RouteProvider>;
};

/**
 * Wrapper component for all gateways
 */
const Gateway = (props: WithChildren) => {
    return <>{props.children}</>;
};

/**
 * Wrapper for all Handler that should get rendered outside the component tree
 */
const Handler = () => {
    return <></>;
};

const App = () => {
    return (
        <Provider>
            <Gateway>
                <Main />
            </Gateway>
            <Handler />
        </Provider>
    );
};

export default App;
