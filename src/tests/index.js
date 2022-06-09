import assert from 'assert';
import chai from "chai";
import app from '../app';
chai.should();

chai.use(chaiHttp);
import chaiHttp from 'chai-http'
describe("Main ", () =>{
  it("it should return status code 200", (done) =>{
      chai.request(app)
      .get("/")
      .end((err, response) => {
      done();

      });
  });
})