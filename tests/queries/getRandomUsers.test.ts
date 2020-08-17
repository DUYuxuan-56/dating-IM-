import { createTestClient } from 'apollo-server-testing';
import { gql } from 'apollo-server-express';
import { server } from '../../server';
import { resetDb } from '../../db';
import { mockAuth } from '../mocks/auth.provider';

describe('Query.getRandomUsers', () => {
  beforeEach(resetDb);

  it('should fetch random users', async () => {
    mockAuth(1);

    const { query } = createTestClient(server);

    let res = await query({
      query: gql`
        query GetRandomUsers {
          randomUsers {
            id
            name
            picture
          }
        }
      `,
    });

    expect(res.data).toBeDefined();
    expect(res.errors).toBeUndefined();
    expect(res.data).toMatchSnapshot();
  });
});