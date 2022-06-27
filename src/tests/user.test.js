
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


  it('User deleted', (done) => {
    chai
      .request(server)
      .delete('/api/v1/users/1')
      
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(200);
      });
    done();
  });
});