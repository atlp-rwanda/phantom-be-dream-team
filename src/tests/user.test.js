
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';


chai.should();
chai.use(chaiHttp);
describe('TESTING REGISTRATION OF USERS', () => {
  // add a new user who is not in the database
  it('User will not be registered if not logged in', (done) => {
    const user = {
      
      firstName:"byirigiro",
      lastName:"benjamin",
      email: "benafrica@gmail.com",
      role:"oparator"

    }
    chai
      .request(server)
      .post('/api/v1/users/register')
      .send(user)
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(401);
      });
    done();
  });
 
});