// userSlice
export interface UserSliceState {
  userLogin: string | undefined;
  accessToken: string | undefined
}

// mainSlice
export interface MainSliceState {
  users: UserType[]
  tasks: TaskType[]
  currentUser: string | undefined
}

export type UserType = {
  id: number,
  key: number,
  login: string,
  image: string | null,
}

export type TaskType = {
  id: number,
  title: string,
  info: string,
  image: string | null,
  tag: string,
  creator: string,
  status: number,
}

export type TagMenuType = {
  tagMenuActive: boolean,
  setTagMenuActive: any,
  setTaskTag: any,
}

export type EditMenuType = {
  editMenuActive: boolean,
  setEditMenuActive: any,
  taskId: number,
}