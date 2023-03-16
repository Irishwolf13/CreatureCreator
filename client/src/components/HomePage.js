import { useNavigate } from 'react-router-dom';

function HomePage({ user }) {
  //allow navigation
  const navigate = useNavigate();

  //handles logout clicked
  const handleOnClick = () => {
    console.log(user)
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
    })
    .then(res => {
      if (res.ok) {
        console.log(user)
        alert('Logged out')
        // navigate('/login')
      } else {
        console.log('else: ')
        console.log(user)
        //handle errors
      }
    })
  }
  return (
    <>
      <div>
        <button onClick={handleOnClick}>LogOut</button>
      </div>
    </>
  );
}

export default HomePage;