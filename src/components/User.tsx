import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

interface Address {
  lat: string;
  lng: string;
}
interface Users {
  name: string;
  address: Address;
}

const User = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const generateNames = (num: number): void => {
    const user = [];
    for (let i: number = 0; i < num; i++) {
      user.push({
        name: faker.name.findName(),
        address: {
          lat: faker.address.latitude(),
          lng: faker.address.longitude(),
        },
      });
    }
    setUsers(user);
  };

  useEffect(() => {
    generateNames(5);
  }, []);
  return (
    <div>
      {users.map((user, idx) => (
        <div key={idx}>
          <h2>{user.name}</h2>
          <h4>
            {user.address.lat} and {user.address.lng}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default User;
