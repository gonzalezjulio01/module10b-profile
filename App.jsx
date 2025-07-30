import Profile from './Profile';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        padding: '20px',
      }}
    >
      <Profile
        name="Adele Laurie Blue Adkins"
        occupation="Singer & Songwriter"
        quote="Be brave and fearless to know that even if you do make a wrong decision, you’re making it for a good reason."
      />
    </div>
  );
}

export default App;
