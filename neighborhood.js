
// Define an array of restaurants with their corresponding URLs
const restaurants = [
    { name: "Chilli's", url: "https://www.chilis.com/" },
    { name: "BoomerJacks", url: "https://www.boomerjacks.com/" },
    { name: "Buffalo Wild Wings", url: "https://www.buffalowildwings.com/" }
    // Add more restaurants as needed. I dont have any local restaurants so when you click Get random restaurant you just get a url to their website
]

// Function to choose a random restaurant from the array
function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length)
    return restaurants[randomIndex].name;
}

// Event listener for the button click
document.getElementById('random-restaurant').addEventListener('click', function() {
    const randomRestaurant = getRandomRestaurant()
    const restaurantObject = restaurants.find(restaurant => restaurant.name === randomRestaurant)
    if (restaurantObject) {
        alert("You should try " + randomRestaurant + "!\n" + "Visit: " + restaurantObject.url)
    } else {
        alert("Oops! Something went wrong.")
    }
})
