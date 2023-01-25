import { SearchProvider } from '../routes/Search/Search.context';
import { ProfileProvider } from '../routes/Profile/Profile.context';
import { LoginProvider } from '../routes/Login/Login.context';
import { RecipeProvider } from '../routes/Recipe/Recipe.context';

export const ContextWrapper = ({ children }: ProviderProps) => {
    return (
        <RecipeProvider>
            <SearchProvider>
                <LoginProvider>
                    <ProfileProvider>{children}</ProfileProvider>
                </LoginProvider>
            </SearchProvider>
        </RecipeProvider>
    );
};
