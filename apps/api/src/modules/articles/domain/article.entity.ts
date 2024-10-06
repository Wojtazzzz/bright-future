export class ArticleEntity {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly intro: string | null,
    public readonly content: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
