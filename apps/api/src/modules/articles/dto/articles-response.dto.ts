import { Field, ObjectType, Int } from '@nestjs/graphql';
import { type ArticleEntity } from '../domain/article.entity';

@ObjectType()
export class ArticlesResponseDto {
  constructor(data: ArticleEntity[]) {
    this.data = data;
  }

  @Field(() => [ArticleDto])
  public readonly data: ArticleEntity[];
}

@ObjectType()
export class ArticleDto {
  @Field(() => Int)
  public readonly id: number;

  @Field()
  public readonly title: string;

  @Field({ nullable: true })
  public readonly intro: string;

  @Field({ nullable: true })
  public readonly content: string;

  @Field()
  public readonly createdAt: Date;

  @Field()
  public readonly updatedAt: Date;
}
