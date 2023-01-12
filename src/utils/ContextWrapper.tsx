import { SearchProvider } from '../routes/Search/Search.context';
import { ProfileProvider } from '../routes/User/Profile.context';

export const ContextWrapper = ({ children }: ProviderProps) => {
    return (
        <SearchProvider>
            <ProfileProvider>{children}</ProfileProvider>
        </SearchProvider>
    );
};
