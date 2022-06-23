<<<<<<< HEAD:src/tests/index.test.js
import chai from "chai";
=======
import assert from 'assert';
import chai from 'chai';
>>>>>>> ceb697a78efd8ba0f899ab1a235823eed9620dc9:src/tests/index.js
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
