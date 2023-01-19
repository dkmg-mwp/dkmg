import axios from 'axios';
const BASE_URL = 'https://dkmg.glitch.me';
const validRoutes = ['users'];

const createApiHandler = <T>(route: string) => {
    if (!validRoutes.includes(route)) {
        throw `Invalid route: ${route}, valid routes are ${validRoutes
            .map((route) => `"${route}"`)
            .join(' | ')}`;
    }

    const URL = `${BASE_URL}/${route}`;

    return {
        async list(token: string) {
            const response = await axios.request<T[]>({
                method: 'GET',
                url: URL,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
    };
};
export const apiUser = {
    user: createApiHandler<User>('users'),
};
