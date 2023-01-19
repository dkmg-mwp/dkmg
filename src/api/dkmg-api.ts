// type GuestResponse = {
//     id: string;
// };

// import { v4 as uuidv4 } from 'uuid';

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

// export const addGuest = async (
//     name: string,
//     dairyFree: boolean,
//     glutenFree: boolean,
//     vegan: boolean,
//     vegetarian: boolean
// ) => {
//     // const res = await axios.post<GuestResponse>(`https`, {
//     //     name,
//     // });
//     // return res.data.id;
//     const db = getDatabase();

//     db.guests.push({
//         id: uuidv4(),
//         name,
//         dairyFree,
//         glutenFree,
//         vegan,
//         vegetarian,
//     });
//     setDatabase(db);
// };

// export const fetchGuests = async () => {
//     const db = getDatabase();
//     return db.guests;
// };

export const removeGuest = async (id: string) => {
    const db = getDatabase();
    db.guests = db.guests.filter((guest) => guest.id !== id);
    setDatabase(db);
};

export const updateGuest = async (
    id: string,
    restriction: boolean,
    choice: string
) => {
    const db = getDatabase();
    const foundGuest = db.guests.find((guest) => guest.id === id);
    if (!foundGuest) return;
    if (choice === 'dairyFree') {
        foundGuest.dairyFree = !restriction;
    }
    if (choice === 'glutenFree') {
        foundGuest.glutenFree = !restriction;
    }
    if (choice === 'vegan') {
        foundGuest.vegan = !restriction;
    }
    if (choice === 'vegetarian') {
        foundGuest.vegetarian = !restriction;
    }
    setDatabase(db);
};
