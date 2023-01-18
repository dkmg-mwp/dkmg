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
        async list() {
            const response = await axios.get<T[]>(URL);
            return response.data;
        },
        // async get(id: string) {
        //     const response = await axios.get<T>(`${URL}/${id}`);
        //     return response.data;
        // },
        async post(data: unknown) {
            const response = await axios.post<T>(URL, data);
            return response.data;
        },
        // async patch(id: string, data: unknown) {
        //     const response = await axios.patch<T>(`${URL}/${id}`, {
        //         hourly_rate: data,
        //     });
        //     return response.data;
        // },
        // async delete(id: string) {
        //     const response = await axios.delete(`${URL}/${id}`);
        //     return response.status === 200;
        // },
    };
};
export const api = {
    guests: createApiHandler<Guest>('guests')
};