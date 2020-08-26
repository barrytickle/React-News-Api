import { Seeder } from 'mongoose-data-seed';
import { Model } from '../server/models';

const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];

const data = names.map(name => ({
  username: name+'-cake',
  password: 'pass123',
  email: name+'@gmail.com'
  image: name+'123.jpg'
}));

data.push(
    {
      username: 'Tangostari',
      password: 'pass123',
      email: 'barry.tickle12@gmail.com',
      image: 'tangostari.jpg'
    }
);

class UsersSeeder extends Seeder {

  async shouldRun() {
    return Model.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Model.create(data);
  }
}

export default UsersSeeder;
