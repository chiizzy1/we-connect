/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    "./views/partials/header.ejs", 
    "./views/partials/footer.ejs", 
    "./views/index.ejs",
    "./views/login.ejs",
    "./views/signup.ejs",
    "./views/post.ejs",
    "./views/feed.ejs",
    "./views/profile.ejs",
  ],
  theme: {
    extend: {
      fontFamily: {
        'berkshire-swash': ['"Berkshire Swash"', 'cursive'],
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}
