import { QueryObserverResult } from "@tanstack/react-query";

export type AuthFormValues = {
  username: string;
  password: string;
};

export interface UserData {
  id: string;
  username: string;
};

export interface Item {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  description: string;
  userId: string;
  user: UserData;
};
export interface ItemValue {
    name: string;
    description: string;
  
  };

export interface ItemUpdate extends ItemValue {
    id: string;
  }
export interface AddItemProps {
    selectedItem?: Item; 
    closeModal?: () => void;
    refetch?: () => Promise<QueryObserverResult<Item[], Error>>;
}