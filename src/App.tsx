import './App.css';

function App() {
  return (
    <div className='board'>
      <h1 className='header'>Interview Questions</h1>
      <div className="wrapper">
        <div className='category'>
          <h1>Html</h1>
          <div className='question'>
            <div className='status success' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status pending' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status partial' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status success' />
            <p>Sigin up form</p>
          </div>
        </div>
        <div className='category'>
          <h1>Css</h1>
          <div className='question'>
            <div className='status terminated' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status success' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status pending' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status partial' />
            <p>Sigin up form</p>
          </div>
        </div>
        <div className='category'>
          <h1>Tailwind</h1>
          <div className='question'>
            <div className='status success' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status terminated' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status partial' />
            <p>Sigin up form</p>
          </div>
          <div className='question'>
            <div className='status pending' />
            <p>Sigin up form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
