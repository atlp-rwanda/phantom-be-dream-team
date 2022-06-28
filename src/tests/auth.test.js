import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.use(chaiHttp);

describe('TESTING USER AUTHENTICATION', () => {
  it('User login success', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12@gmail.com',
          password: '&HrvuXn1EMe@6h1',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(200);
          chai.expect(response.body).to.have.property('token');
        });
    done();
  });
  it('User login fail(message:Incorrect email)', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12kk@gmaom',
          password: '&HrvuXn1EMe@6h1',
        })
        .end((error, response) => {
          chai
              .expect(response.body.message)
              .to.equal('Incorrect email or password');
        });
    done();
  });
});
