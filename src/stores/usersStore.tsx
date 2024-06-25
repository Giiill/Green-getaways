// import { create } from "zustand";

// export type User = {
//     id: number,
//     name: string
// }

// type UsersStoreSchema = {
//     users: User[],
//     isLoading: boolean,
//     addUser: (username: string) => void;
// };

// export const usersStore = create<UsersStoreSchema>((set) => ({
//     users: [],
//     isLoading: false,
//     addUser: (username: string) => set(state => (
//         {
//             users: [
//                 ...state.users,
//                 {id: Date.now(), name: username}
//             ]
//         }
//     ))
// }))