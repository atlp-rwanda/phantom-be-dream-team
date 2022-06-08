import App from '../app.js';
import chai from 'chai';
chai.should();

describe('Test homepage', () => {
    // Testing main root
    
describe("Test main", () =>{
    it("it should return status 200", (done) =>{
        chai.request(App)
        .get("/")
        .end((err, response) => {
          response.status(200); 
        done();

        });
    });
});
})