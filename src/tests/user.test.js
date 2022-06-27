

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.should();
chai.use(chaiHttp);
describe('TESTING REGISTRATION OF USERS', () => {
  // add a new user who is not in the database
  it('User successfully registered', (done) => {
    chai
      .request(server)
      .post('/api/v1/users/register')
      .send({
      
        firstName:"byiri",
        lastName:"benjs",
        email: "benafrica009@gmail.com",
        role:"driver",

      })
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(201);
      });
    done();
  });
  it('Users retreived', (done) => {
    chai
      .request(server)
      .get('/api/v1/users/')
  
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(200);
      });
    done();
  });
  // it('User retreived', (done) => {
  //   chai
  //     .request(server)
  //     .get('/api/v1/users/3')
  
  //     .end((err, response) => {
  //       chai.expect(response.statusCode).to.equal(200);
  //     });
  //   done();
  // });
  it('User successfully updated', (done) => {
    chai
      .request(server)
      .put('/api/v1/users/1')
      .send({
       
      firstName:"byiri",
      lastName:"benjs",
      email: "benafrica.009@gmail.com",
      role:"driver",
      })
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(200);
      });
    done();
  });

  it('User deleted', (done) => {
    chai
      .request(server)
      .delete('/api/v1/users/3')
      
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(200);
      });
    done();
  });
});