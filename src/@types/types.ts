// userSlice
export interface UserSliceState {
  userLogin: string | undefined,
  accessToken: string | undefined,
}

// mainSlice
export interface MainSliceState {
  users: UserType[],
  tasks: TaskType[],
  pickedUser: string | undefined,
}

// boxSlice
export interface BoxSliceState {
  taskBoxState: string | undefined,
  updateTaskId: string | undefined,
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
}

export type TagMenuType = {
  tag: string,
  setTag: any,
  tagMenuActive: boolean,
  setTagMenuActive: any,
}

export type EditMenuType = {
  editMenuActive: boolean,
  setEditMenuActive: any,
  taskId: number,
}
