import { Resolver, Query } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import { ArticlesResponseDto } from './dto/articles-response.dto';
import { GetArticlesQuery } from './articles.handler';

@Resolver()
export class ArticlesResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => ArticlesResponseDto)
  async getArticles(): Promise<ArticlesResponseDto> {
    const query = new GetArticlesQuery();

    const result = await this.queryBus.execute(query);

    return new ArticlesResponseDto(result);
  }
}
