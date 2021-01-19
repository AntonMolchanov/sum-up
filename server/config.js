export default {
  // DB_URL: 'mongodb+srv://admin:@cluster0.70i0k.mongodb.net/sum-up?retryWrites=true&w=majority',
  DB_URL: 'mongodb://admin:Swsasxsd123@cluster0-shard-00-00.70i0k.mongodb.net:27017,cluster0-shard-00-01.70i0k.mongodb.net:27017,cluster0-shard-00-02.70i0k.mongodb.net:27017/sum-up?ssl=true&replicaSet=atlas-14n6ya-shard-0&authSource=admin&retryWrites=true&w=majority',
  PORT: process.env.PORT || 8080,
  TOKEN_KEY: {
    key: '123123!'
  },
  SECRET_KEY: 'my therapy 2020'
}