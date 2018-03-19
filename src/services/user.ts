
import { DatabaseProvider } from './../database/index';
import { User } from './../models/user';

export class UserService {
    public async getById(id: number): Promise<User> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(User).findOneById(id);
    }

    public async create(customer: User): Promise<User> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(User).save(customer);
    }

    public async list(): Promise<User[]> {
        const connection = await DatabaseProvider.getConnection();
        return  await connection.getRepository(User).find();
    }

    public async update(customer: User): Promise<User> {
        const connection = await DatabaseProvider.getConnection();
        const repo = connection.getRepository(User);
        const entity = await repo.findOneById(customer.id)
        // entity.firstName = customer.firstName;
        // entity.lastName = customer.lastName;
        return await repo.save(entity);
    }

    public async delete(id: number): Promise<void> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(User).deleteById(id);
    }
}

export const userService = new UserService();