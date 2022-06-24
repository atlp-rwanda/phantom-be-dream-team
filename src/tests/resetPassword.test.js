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
            .post('/api/v1/users/forgotpassword')
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
            .post('/api/v1/users/forgotpassword')
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
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJLd2l6ZXJhICIsImxhc3ROYW1lIjoiU3RldmVuIiwiZW1haWwiOiJkcmVhbXRtODdAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwaGFudG9tQDEyMyIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiJ9LCJpYXQiOjE2NTU5ODkyMzUsImV4cCI6MTY1NjAyNTIzNX0.ah1WJOA-Lr589Q_oCe8UC33QuLrzGe78CFoDFez2qeA')
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
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJLd2l6ZXJhICIsImxhc3ROYW1lIjoiU3RldmVuIiwiZW1haWwiOiJkcmVhbXRtODdAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwaGFudG9tQDEyMyIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiJ9LCJpYXQiOjE2NTU5ODkyMzUsImV4cCI6MTY1NjAyNTIzNX0.ah1WJOA-Lr589Q_oCe8UC33QuLrzGe78CFoDFez2qeA')
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
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJLd2l6ZXJhICIsImxhc3ROYW1lIjoiU3RldmVuIiwiZW1haWwiOiJkcmVhbXRtODdAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwaGFudG9tQDEyMyIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiJ9LCJpYXQiOjE2NTU5ODkyMzUsImV4cCI6MTY1NjAyNTIzNX0.ah1WJOA-Lr589Q_oCe8UC33QuLrzGe78CFoDFez2qeA')
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
            .post('/api/v1/users/reset/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJLd2l6ZXJhICIsImxhc3ROYW1lIjoiU3RldmVuIiwiZW1haWwiOiJkcmVhbXRtODdAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiJwaGFudG9tQDEyMyIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMjNUMTM6MDA6MTAuODUyWiJ9LCJpYXQiOjE2NTU5ODkyMzUsImV4cCI6MTY1NjAyNTIzNX0.ah1WJOA-Lr589Q_oCe8UC33QuLrzGe78CFoDFez2qeA')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404)
                res.body.message.should.be.equal('The user with the email not found')
                done()
            })
    })

})