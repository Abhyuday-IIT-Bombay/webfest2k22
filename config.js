module.exports = {
    'baseUrl': 'http://localhost:3000',
    'secretKey': '71590-14119-16734-51220',
    'mongoUrl': 'mongodb+srv://dBug:prakash@cluster0.pb6mm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    'facebook': {
        clientId: '1024498991294150',
        clientSecret: 'e3d71816688de9613f55ec0f26d73aef',
        callbackURL: '/users/auth/facebook/callback'
    },
    'google': {
        clientId: '27410510832-ufn6qu17hi64gchsjtjkmdu0haq0of7r.apps.googleusercontent.com',
        clientSecret: 'HvQAbVV5MmVDP7uvvpGX1Awf',
        callbackURL: '/users/auth/google/callback'
    }
}
