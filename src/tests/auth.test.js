import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

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
          email: 'arthur12kk@gmail.com',
          password: '&HrvuXn1EMe@6h1',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(401);
          chai.expect(response.body).to.have.property('error');
          chai
              .expect(response.body.message)
              .to.equal('Invalid email');
        });
    done();
  });
  it('User login fail(message:Incorrect password)', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: 'arthur12kk@gmail.com',
          password: '&HrvuXn1EMe@6h1ff',
        })
        .end((error, response) => {
          chai.expect(response.statusCode).to.equal(401);
          chai.expect(response.body).to.have.property('error');
          chai
              .expect(response.body.message)
              .to.equal('Invalid password');
        });
    done();
  });

  it('User login fail(message:Please provide email and password!)', (done) => {
    chai
        .request(server)
        .post('/api/v1/users/login')
        .send({
          email: '',
          password: '',
        })
        .end((error, response) => {
          chai.expect(response.status).to.equal(400);
          chai.expect(response.body).to.have.property('error');
          chai
              .expect(response.body.message)
              .to.equal('Please provide email and password!');
        });
    done();
  });
});
