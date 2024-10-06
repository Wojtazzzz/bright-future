export type ExternalArticle = {
  id: number;
  title: string;
  intro: string | null;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
};
