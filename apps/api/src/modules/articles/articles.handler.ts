import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ArticleEntity } from './domain/article.entity';
import { PrismaService } from '../../shared/prisma.service';
import { ArticlesMapper } from './articles.mapper';

export class GetArticlesQuery {}

@QueryHandler(GetArticlesQuery)
export class GetArticlesHandler implements IQueryHandler {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: ArticlesMapper,
  ) {}

  async execute(query: GetArticlesQuery): Promise<ArticleEntity[]> {
    const articles = await this.prisma.article.findMany();

    return this.mapper.articlesToEntities(articles);
  }
}
