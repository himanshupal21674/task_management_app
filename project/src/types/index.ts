export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface User {
  email: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}