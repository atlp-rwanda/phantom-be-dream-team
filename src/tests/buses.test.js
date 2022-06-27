import chai from "chai";
import chaiHttp from "chai-http";
import server from "../app";

chai.should()
chai.use(chaiHttp)



describe('Bus End points', () => {
    it('should return All buses found', () => {
        (done) => {
            chai
                .request(server)
                .get('/api/v1/buses')
                .end((error, response) => {
                    chai.expect(response.statusCode).to.equal(200);
                });
            done();
        }
    });

    it('should return Bus by id', () => {
        (done) => {
            chai
                .request(server)
                .get('/api/v1/buses/id')
                .end((error, response) => {
                    chai.expect(response.statusCode).to.equal(200);
                });
            done();
        }
    });

    it('should return delete Bus by id', () => {
        (done) => {
            chai
                .request(server)
                .delete('/api/v1/buses/id')
                .end((error, response) => {
                    chai.expect(response.statusCode).to.equal(200);
                });
            done();
        }
    });


})