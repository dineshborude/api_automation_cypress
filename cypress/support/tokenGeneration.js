import {loginData} from '../fixtures/defaults'

Cypress.Commands.add('generateAccessToken', () => {
    const bodyData = {

      username: loginData.username,
      password: loginData.password,
      role_id: loginData.role_id

    };
  
    return cy.request({
      method: 'POST',
      url: 'https://staging.humanlytic.com:9000/api/v1/superadmin/login',
      body: bodyData,
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Failed to authenticate: Status ${response.status}`);
      }
  
      return response.body.data.login.access_token;
    });
  });
  