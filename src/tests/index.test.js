import chai from "chai";
import chaiHttp from 'chai-http';
import server from '../app';
chai.should();

chai.use(chaiHttp);
describe('/MAIN PAGE', () => {
  it('it should return status 200', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});