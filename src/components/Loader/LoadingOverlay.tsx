import { useProfile } from '../../routes/Profile/Profile.context';

export const LoadingOverlay = () => {
    const { loading } = useProfile();

    return !loading ? null : (
        <div
            style={{
                position: 'fixed',
                minWidth: '100vw',
                minHeight: '100vh',
                zIndex: 1000,
                inset: '0 0 0 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.2)',
            }}
        >
            <h3>Loading...</h3>
        </div>
    );
};
