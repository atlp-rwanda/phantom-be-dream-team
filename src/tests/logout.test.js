import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

describe('TESTING USER AUTHENTICATION', () => {
  it('User should logout success', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/login')
      .send({
        email: 'admin8@test.com',
        password: 'pass12345',
      })
      .end((error, response) => {
        const token=response.body.token;
        chai
      .request(server)
      .post('/api/v1/users/logout')
      .set('Authorization', `Bearer ${token}`)
      .end((error, response) => {
        expect(response.statusCode).to.equal(200)
      })
      });
    done();
  });

});