const connectDB = require('./db'); // Import the connection
const User = require('./models/user'); // Import the User model

// Establish the connection
connectDB();

// Data to insert
const newUser = new User({
  id: 1,
  github_id: '123456',
  name: 'John Doe',
  profile_picture: 'https://example.com/profile.jpg',
  experience_level: 'Intermediate',
  tech_stack: ['JavaScript', 'Node.js', 'React'],
  expertise: 'Frontend',
  role: 'Developer',
});

// Insert data into the collection
newUser.save()
  .then((user) => {
    console.log('User inserted successfully:', user);
    process.exit(); // Exit the process after completion
  })
  .catch((err) => {
    console.error('Error inserting user:', err);
    process.exit();
  }); 
  