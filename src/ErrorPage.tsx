import { useRouteError } from 'react-router-dom';

type Err = {
    status: number;
    statusText: string;
    message: string;
};

export default function ErrorPage() {
    const error = useRouteError() as Err;

    return (
        <div id='error-page'>
            <h1>Oops! {error.status}</h1>
            <p>{error.statusText}</p>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
