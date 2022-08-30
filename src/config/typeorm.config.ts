import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions,} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
//     imports: [ConfigModule],
//     useFactory: async (configService: ConfigService) : 
//     Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//     inject: [ConfigService]
// }

// export default class TypeOrmConfig {
//    static getOrmConfig(configService: ConfigService) : TypeOrmModuleOptions{
//     return {
//             type: 'mysql',
//             host: configService.get('DB_HOST'),
//             port: configService.get('DB_PORT'),
//             username: configService.get('DB_USER'),
//             password: configService.get('DB_PASSWORD'),
//             database: 'ourpass',
//             entities: [__dirname + '/../**/*.entity.{js,ts}'],
//             synchronize: true,
//         }
//    }
//   };

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
      return {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
        logging: true,
      };
    },
  };


  export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
  };