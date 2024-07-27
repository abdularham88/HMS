
import {create} from 'zustand';

const useStore = create((set) => ({
  user_id: null,
  setUserId: (user_id) => set({ user_id }),
  appointments: [],
  setAppointments: (appointments) => set({ appointments }),
}));

export default useStore;

