import { baseURL } from '../fixtures/defaults';

describe('GET Super Admin Profile Info', () => {
  let token;

  beforeEach(() => {
    cy.generateAccessToken().then((generatedToken) => {
      token = generatedToken;
    });
  });

  it('GET /get super-admin profile', () => {
    const getProfileEndpoint = '/api/v1/superadmin/get-profile'; 

    cy.request({
      method: 'POST',
      url: `${baseURL}${getProfileEndpoint}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
  
      // Log status and message
      cy.log('Status: ' + response.status);
      cy.log('Message: ' + response.body.message);

      // Assertions
      expect(response.status).to.equal(200);
      expect(response.body.data.email).to.equal('hemant.5exceptions@gmail.com');
      cy.log('Assertion Passed: Email matches');

      // Log response body
      cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    });
  });
});
