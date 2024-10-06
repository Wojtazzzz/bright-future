import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ArticlesResolver } from './articles.resolver';
import { GetArticlesHandler } from './articles.handler';
import { PrismaService } from '../../shared/prisma.service';
import { ArticlesMapper } from './articles.mapper';

const resolvers: Provider[] = [ArticlesResolver];
const queriesHandlers: Provider[] = [GetArticlesHandler];
const mappers: Provider[] = [ArticlesMapper];
const services: Provider[] = [PrismaService];

@Module({
  imports: [CqrsModule],
  providers: [...resolvers, ...queriesHandlers, ...mappers, ...services],
})
export class ArticlesModule {}
