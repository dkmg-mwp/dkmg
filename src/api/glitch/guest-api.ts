import axios from 'axios';

const BASE_URL = 'https://dkmg.glitch.me';
const validRoutes = ['guests'];

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

        async post(data: unknown, token: string) {
            const response = await axios.request<T>({
                method: 'POST',
                data,
                url: URL,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        async patch(id: string, data: unknown, token: string) {
            const response = await axios.request<T>({
                method: 'PATCH',
                url: `${URL}/${id}`,
                data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        async delete(id: string, token: string) {
            const response = await axios.request<T>({
                method: 'DELETE',
                url: `${URL}/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.status === 200;
        },
    };
};

export const api = {
    guests: createApiHandler<Guest>('guests'),
};
