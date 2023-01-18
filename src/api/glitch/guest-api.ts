import axios from 'axios';
// import { useLogin } from '../../routes/Login/Login.context';
const BASE_URL = 'https://dkmg.glitch.me';
const validRoutes = ['guests'];
// const { token } = useLogin();

const createApiHandler = <T>(route: string) => {
    if (!validRoutes.includes(route)) {
        throw `Invalid route: ${route}, valid routes are ${validRoutes
            .map((route) => `"${route}"`)
            .join(' | ')}`;
    }
    const URL = `${BASE_URL}/${route}`;
    return {
        async list(token: string) {
            const response = await axios.request<T>({
                method: 'GET',
                url: URL,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
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
            console.log(response.data);
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
    guests: createApiHandler<Guest>('guests'),
};
