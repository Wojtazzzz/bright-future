import { Injectable } from '@nestjs/common';
import { ArticleEntity } from './domain/article.entity';
import { ExternalArticle } from './domain/types';

@Injectable()
export class ArticlesMapper {
  articlesToEntities(articles: ExternalArticle[]): ArticleEntity[] {
    return articles.map(this.articleToEntity);
  }

  articleToEntity(article: ExternalArticle): ArticleEntity {
    return new ArticleEntity(
      article.id,
      article.title,
      article.intro,
      article.content,
      article.createdAt,
      article.updatedAt,
    );
  }
}
