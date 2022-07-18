import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.should();
chai.use(chaiHttp);


describe('Roles End points', () => {
  it('should return All roles found', () => {
    (done) => {
      chai
          .request(server)
          .get('/api/v1/roles')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });

  it('should return roles by id', () => {
    (done) => {
      chai
          .request(server)
          .get('/api/v1/roles:id')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });

  it('should return delete roles by id', () => {
    (done) => {
      chai
          .request(server)
          .delete('/api/v1/roles/id')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });
});
