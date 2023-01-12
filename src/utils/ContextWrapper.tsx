import { SearchProvider } from '../routes/Search/Search.context';
import { ProfileProvider } from '../routes/Profile/Profile.context';

export const ContextWrapper = ({ children }: ProviderProps) => {
    return (
        <SearchProvider>
            <ProfileProvider>{children}</ProfileProvider>
        </SearchProvider>
    );
};
