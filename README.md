# React Note App

This is a simple React Note App project that allows users to create, view, and delete notes. The application utilizes various React features and functionalities to provide a seamless user experience.

## Features

- **Dynamic Note Creation**: The application uses the `map` function to dynamically create different notes based on the user's input.

- **Note Deletion**: Users can delete a specific note by filtering notes based on their unique identifiers (IDs).

- **Prop Drilling**: Prop drilling is implemented to pass props from parent components to child components efficiently.

- **Local Storage Integration**: Notes are saved in the browser's local storage using the `useEffect` hook. This ensures that users can retrieve their notes even after closing and reopening the application.

- **Automatic Date Generation**: Each note includes a date generated automatically from the system using the `toLocaleDateString()` function.

- **Toggle Mode Button**: The project features a toggle mode button that allows users to switch between light and dark modes for better readability and user experience.

## Technologies Used

- **React**: The project is built using the React library, which provides a declarative and component-based approach to building user interfaces.

- **JavaScript (ES6+)**: The application logic is implemented using modern JavaScript features and syntax.

- **CSS**: Styling is applied using CSS, with styles defined in the `index.css` file.

## Usage

To run the React Note App locally:

1. Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/your-username/react-note-app.git
   ```

2. Navigate to the project directory:
   ```
   cd react-note-app
   ```

3. Install the dependencies using npm or yarn:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to view the React Note App.

## Contributions

Contributions to the React Note App project are welcome! If you find any bugs or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
