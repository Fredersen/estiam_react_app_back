docker-compose up -d
npm install
npm start

.env
JWT_SECRET="your_jwt_secret"
HOST_NAME="127.0.0.1"
PORT=3000
MONGODB_URI="mongodb://root:example@127.0.0.1:27017"
STRIPE_SECRET_KEY="sk_test_51LLRfmK5hq3xXbjegFfHKnkYv5DIjMBMn6gQva1W6NN9R80RF2cn1B04vBfY6t97E8Cy9BcRsRNZzf8HI1xj6g7200YYip5BKA"
STRIPE_PUBLISHABLE_KEY="pk_test_51LLRfmK5hq3xXbjeM0PStbryHmNoNu4KLeu4b9Jctr1d0W5EHbzClZnXxPdKAZziBfpCxCClMf3qA8C9w5NJTOAB00R7lGsEj3"
CLIENT_URL="http://localhost:3001"