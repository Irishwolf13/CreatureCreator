import { useNavigate } from 'react-router-dom';

function HomePage({ user }) {
  //allow navigation
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login')
  }

  return (
    <>
      <div>
        <button onClick={handleLogIn}> Log IN </button>
      </div>
    </>
  );
}

export default HomePage;