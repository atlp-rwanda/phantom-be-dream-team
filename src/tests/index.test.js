import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
chai.should();

chai.use(chaiHttp);
describe('MAIN PAGE', () => {
  it('it should return status 200', () => {
    (done) => {
      chai
          .request(server)
          .get('/api/v1/')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
          });
      done();
    };
  });
});
