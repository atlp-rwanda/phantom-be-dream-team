import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app'

chai.should();
chai.use(chaiHttp);


describe('/forgotpassword', () => {
    it('A registered email should be able to reset password/default language', (done) => {
        const user = {
            email: "dreamtm87@gmail.com",
        }

        chai
            .request(server)
            .post('/api/v1/forgotpassword')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.message.should.be.equal('Please check your email to reset your password')
                done()
            })
    })

    it('Email not sent/default language', (done) => {
        const user = {
            email: "dreamtm8@gmail.com",
        }

        chai
            .request(server)
            .post('/api/v1/forgotpassword')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.message.should.be.equal('Email not sent')
                done()
            })
    })

})




describe('/resetpassword', () => {
    it('The password entered do not match/default language', (done) => {

        const user = {
            email: "dreamtm87@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream123"
        }
        chai
            .request(server)
            .post('/api/v1/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiS3dpemVyYSBTdGV2ZW4iLCJlbWFpbCI6ImRyZWFtdG04N0BnbWFpbC5jb20iLCJwaG9uZSI6IjA3ODcyMzk1MzQiLCJzdGF0dXMiOiJ5ZXMiLCJsYXN0X2xvZ2luX2F0IjoiMjAyMi0wNi0yMVQxMjozMTozNi45NTZaIiwibGFzdF9pcF9hZGRyZXNzIjoiMTkyLjE1OC4gMS4zOCIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjFUMTI6MzE6MzYuOTU2WiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjFUMTM6MTg6MjguMDQ4WiJ9LCJpYXQiOjE2NTU4MTc1NDQsImV4cCI6MTY1NTkwMzk0NH0.-nlUpbtEb2cXkQX48vnF-q1krejI3D3L_wNsPSrFo-M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(401)
                res.body.message.should.be.equal('The password entered do not match')
                done()
            })
    })


    it('The user with the email not found/default language', (done) => {

        const user = {
            email: "dreamtm8@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream1234"
        }
        chai
            .request(server)
            .post('/api/v1/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiS3dpemVyYSBTdGV2ZW4iLCJlbWFpbCI6ImRyZWFtdG04N0BnbWFpbC5jb20iLCJwaG9uZSI6IjA3ODcyMzk1MzQiLCJzdGF0dXMiOiJ5ZXMiLCJsYXN0X2xvZ2luX2F0IjoiMjAyMi0wNi0yMVQxMjozMTozNi45NTZaIiwibGFzdF9pcF9hZGRyZXNzIjoiMTkyLjE1OC4gMS4zOCIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjFUMTI6MzE6MzYuOTU2WiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjFUMTM6MTg6MjguMDQ4WiJ9LCJpYXQiOjE2NTU4MTc1NDQsImV4cCI6MTY1NTkwMzk0NH0.-nlUpbtEb2cXkQX48vnF-q1krejI3D3L_wNsPSrFo-M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404)
                res.body.message.should.be.equal('The user with the email not found')
                done()
            })
    })

    it('Your password is reset/default language', (done) => {

        const user = {
            email: "dreamtm87@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream1234"
        }
        chai
            .request(server)
            .post('/api/v1/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiS3dpemVyYSBTdGV2ZW4iLCJlbWFpbCI6ImRyZWFtdG04N0BnbWFpbC5jb20iLCJwaG9uZSI6IjA3ODcyMzk1MzQiLCJzdGF0dXMiOiJ5ZXMiLCJsYXN0X2xvZ2luX2F0IjoiMjAyMi0wNi0yMVQxMjozMTozNi45NTZaIiwibGFzdF9pcF9hZGRyZXNzIjoiMTkyLjE1OC4gMS4zOCIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjFUMTI6MzE6MzYuOTU2WiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjFUMTM6MTg6MjguMDQ4WiJ9LCJpYXQiOjE2NTU4MTc1NDQsImV4cCI6MTY1NTkwMzk0NH0.-nlUpbtEb2cXkQX48vnF-q1krejI3D3L_wNsPSrFo-M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.message.should.be.equal('Your password is reset')
                done()
            })
    })

    it('The user with the email not found/default language', (done) => {

        const user = {
            email: "dreamtm8@gmail.com",
            password: "dream1234",
            comfirmPassword: "dream1234"
        }
        chai
            .request(server)
            .post('/api/v1/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiS3dpemVyYSBTdGV2ZW4iLCJlbWFpbCI6ImRyZWFtdG04N0BnbWFpbC5jb20iLCJwaG9uZSI6IjA3ODcyMzk1MzQiLCJzdGF0dXMiOiJ5ZXMiLCJsYXN0X2xvZ2luX2F0IjoiMjAyMi0wNi0yMVQxMjozMTozNi45NTZaIiwibGFzdF9pcF9hZGRyZXNzIjoiMTkyLjE1OC4gMS4zOCIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjFUMTI6MzE6MzYuOTU2WiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjFUMTM6MTg6MjguMDQ4WiJ9LCJpYXQiOjE2NTU4MTc1NDQsImV4cCI6MTY1NTkwMzk0NH0.-nlUpbtEb2cXkQX48vnF-q1krejI3D3L_wNsPSrFo-M')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404)
                res.body.message.should.be.equal('The user with the email not found')
                done()
            })
    })

})