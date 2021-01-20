export interface HomeContextValue {
  categoryId: string;
  setCategoryId: (id: string) => void;
  visibleDialog: boolean;
  setVisibilityDialog: (visibility: boolean) => void;
}
