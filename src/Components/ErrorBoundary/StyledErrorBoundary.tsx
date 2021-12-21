import { Alert } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { WithChildren } from '../../models/typehelpers';

const StyledErrorBoundary = (props: WithChildren) => {
    const onError = (error: Error) => {
        console.error(error.message);
    };
    return (
        <ErrorBoundary FallbackComponent={BoundaryError} onError={onError}>
            {props.children}
        </ErrorBoundary>
    );
};
export default StyledErrorBoundary;

const BoundaryError = () => {
    return <Alert color='error'>Sadly something went wrong!</Alert>;
};
