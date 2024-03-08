// Task 1: Counter using Closure
function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(`Clicked ${count} times`);
    };
}

const counter = createCounter();

// Test the counter
counter(); // Clicked 1 times
counter(); // Clicked 2 times

// Task 2: Destructuring Object Properties
let order = {
    orderId: "123456",
    productName: "Laptop",
    quantity: 2,
};

const { orderId, productName, quantity } = order;

console.log(`Order ID: ${orderId}, Product: ${productName}, Quantity: ${quantity}`);

// Task 3-5: Shopping Cart using Closure
function shoppingCart() {
    let cartItems = [];

    function getCartItems() {
        return cartItems;
    }

    function addItem(product) {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
    }

    function removeItem(productId) {
        cartItems = cartItems.filter(item => item.id !== productId);
    }

    return {
        getCartItems,
        addItem,
        removeItem,
    };
}

const cart = shoppingCart();

console.log(`Cart Items:`, cart.getCartItems());

const product1 = { id: 1, name: 'product 1', price: 10 };
const product2 = { id: 2, name: 'product 2', price: 20 };

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log('Cart Items:', cart.getCartItems());

cart.removeItem(2);

console.log('Cart Items: ', cart.getCartItems());

// Task 6: Playlist Management using Closure
function createPlaylist(playlistName) {
    let songs = [];

    function addSong(songName, artist) {
        songs.push({ songName, artist });
    }

    function listSongs() {
        console.log(`${playlistName} Playlist: ${songs.map(song => `${song.songName} by ${song.artist}`).join(', ')}`);
    }

    return {
        addSong,
        listSongs,
    };
}

const myPlaylist = createPlaylist("My Favorites");

function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}

function listSongs(playlist) {
    playlist.listSongs();
}

addSong(myPlaylist, "Song1", "Artist1");
addSong(myPlaylist, "Song2", "Artist2");
addSong(myPlaylist, "Song3", "Artist3");

listSongs(myPlaylist); // Output: My Favorites Playlist: Song1 by Artist1, Song2 by Artist2, Song3 by Artist3
