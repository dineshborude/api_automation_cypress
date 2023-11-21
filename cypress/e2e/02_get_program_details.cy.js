import { baseURL} from '../fixtures/defaults'

describe('Program Details', () => {
  let token;

  beforeEach(() => {
    cy.generateAccessToken().then((generatedToken) => {
      token = generatedToken;
    });
  });

  it('GET /Get Single Program Details', () => {
    
    const programDetailsEndpoint = '/api/v1/superadmin/get-program-details?company_id=87d258df-6883-4e2e-9110-f1eeb4add334&program_id=d19e2364-2e7c-426b-85f8-dfc8aac2c153';

    cy.request({
      method: 'GET',
      url: `${baseURL}${programDetailsEndpoint}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((response) => {
      cy.log('Access Token: ' + token);
      cy.log('Status: ' + response.status);
      cy.log('Message: ' + response.body.message);

      expect(response.status).to.equal(200);
      expect(response.body.data.company_id).to.equal('87d258df-6883-4e2e-9110-f1eeb4add334');

      cy.log('Response Body:', JSON.stringify(response.body, null, 2));

    });
  });
});
