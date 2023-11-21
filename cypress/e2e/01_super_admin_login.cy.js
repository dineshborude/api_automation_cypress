import { baseURL, endpointPath, loginData } from '../fixtures/defaults'

describe('Super Admin Login =>', () => {
  it('POST /super-admin-login', () => {
    const superAdminLogin = {
      username: loginData.username,
      password: loginData.password,
      role_id: loginData.role_id,
    };

    cy.request({
      method: 'POST',
      url: baseURL + endpointPath, 
      body: superAdminLogin,
    }).then((response) => {

      // Check status
      expect(response.status).to.eq(200);

      // Log response body
      cy.log('Response Body:', JSON.stringify(response.body, null, 2));
      
    });
  });
});
