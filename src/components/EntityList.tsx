'use client';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ENTITIES } from '@/app/lib/graphql/queries';

enum EntityType {
  CONTACT = 'Contact',
  COMPANY = 'Company',
}

type Entity = {
  id: number;
  name: string;
  __typename: EntityType;
  email?: string;
  phone?: number;
  industry?: string;
  contactEmail?: string;
};

const EntityList = () => {
  const { loading, error, data } = useQuery(GET_ENTITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="grid gap-4">
      {data.getEntities.map((entity: Entity) => (
        <div key={entity.id} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{entity.name}</h2>
          <p>Type: {entity.__typename}</p>
          {entity.__typename === EntityType.CONTACT && (
            <div>
              <p>Email: {entity.email}</p>
              {entity.phone && <p>Phone: {entity.phone}</p>}
            </div>
          )}
          {entity.__typename === EntityType.COMPANY && (
            <div>
              <p>Industry: {entity.industry}</p>
              {entity.contactEmail && <p>Contact: {entity.contactEmail}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EntityList;
