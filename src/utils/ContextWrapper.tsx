import { SearchProvider } from '../routes/Search/Search.context';
import { ProfileProvider } from '../routes/Profile/Profile.context';
import { LoginProvider } from '../routes/Login/Login.context';
export const ContextWrapper = ({ children }: ProviderProps) => {
    return (
        <SearchProvider>
            <LoginProvider>
                <ProfileProvider>{children}</ProfileProvider>
            </LoginProvider>
        </SearchProvider>
    );
};
