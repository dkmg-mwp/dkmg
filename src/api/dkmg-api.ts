// type GuestResponse = {
//     id: string;
// };

import { v4 as uuidv4 } from 'uuid';

type Db = {
    guests: Guest[];
};

const getDatabase = () => {
    const dbstr = localStorage.getItem('db');

    const db = dbstr
        ? (JSON.parse(dbstr) as Db)
        : {
              guests: [],
          };
    return db;
};

const setDatabase = (db: Db) => {
    localStorage.setItem('db', JSON.stringify(db));
};

export const addGuest = async (name: string) => {
    // const res = await axios.post<GuestResponse>(`https`, {
    //     name,
    // });
    // return res.data.id;
    const db = getDatabase();

    db.guests.push({ id: uuidv4(), name });
    setDatabase(db);
};

export const fetchGuests = async () => {
    const db = getDatabase();
    return db.guests;
};

export const removeGuest = async (id: string) => {
    const db = getDatabase();
    db.guests = db.guests.filter((guest) => guest.id !== id);
    setDatabase(db);
};
