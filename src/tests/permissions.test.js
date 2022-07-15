import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.should();
chai.use(chaiHttp);


describe('Permissions End points', () => {
  it('should return All permissions found', () => {
    (done) => {
      chai
          .request(server)
          .get('/api/v1/permissions')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });

  it('should return permissions by id', () => {
    (done) => {
      chai
          .request(server)
          .get('/api/v1/permissions:id')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });

  it('should return delete permissions by id', () => {
    (done) => {
      chai
          .request(server)
          .delete('/api/v1/roles:id')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });
});
