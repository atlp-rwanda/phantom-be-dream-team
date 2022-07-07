
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';


chai.should();
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTY0MjM4MzQsImV4cCI6MTY1NjUxMDIzNH0.Sc7QMHGx13LhmUEp_33cx72AHyfzjS9P35ij8u6aJJg'
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
      .set('auth-token', token) 
      .send(user)
      .end((err, response) => {
        chai.expect(response.statusCode).to.equal(401);
      });
    done();
  });



});