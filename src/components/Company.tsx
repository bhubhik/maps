import React, { useEffect, useState } from 'react';
import { Address } from './User';
import { faker } from '@faker-js/faker';

interface Companies {
  name: string;
  catchPhrase: string;
  address: Address;
}

const Company = () => {
  const [company, setCompany] = useState<Companies>();
  const fetchCompany = () => {
    const newCompany = {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      address: {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      },
    };
    setCompany(newCompany);
  };
  useEffect(() => {
    fetchCompany();
  }, []);
  return (
    <div>
      <h3>{company?.name}</h3>
      <h4>
        Address: {company?.address.lat}lat and {company?.address.lng}{' '}
      </h4>
    </div>
  );
};

export default Company;
