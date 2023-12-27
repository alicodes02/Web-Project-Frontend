import create from 'zustand';

const useUserStore = create((set) => ({
  username: '',
  token: '',
  userId: '',
  userEmail: '',
  setUser: (userData) =>
    set((state) => ({
      username: userData.userName,
      token: userData.userToken,
      userId: userData.userId,
      userEmail: userData.userEmail,
    })),
  clearUser: () =>
    set((state) => ({
      username: '',
      token: '',
      userId: '',
      userEmail: '',
    })),
}));

export default useUserStore;
