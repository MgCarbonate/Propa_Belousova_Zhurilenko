import './App.css'

function UserProfile({ avatar, username, email, isVerified }) {
  return (
    <div className="profile">
      <img src={avatar} alt={username} />
      <div>
        <h3 className="name">
          {username}
          {isVerified ? " ✅" : <span style={{ color: "red" }}> (Не подтвержден)</span>}
        </h3>
      </div>
      <p className="email">{email}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserProfile
        avatar="/cat.jpg"
        username="Конвертико Бучеллати"
        email="catItaly@mail.com"
        isVerified={true}
      />
       <UserProfile
        avatar="/latao.jpg"
        username="Лотяо Жоповзрывало"
        email="latao@mail.com"
        isVerified={true}
      />
      <UserProfile
        avatar="/rotof.jpg"
        username="Конвертико после Лотяо"
        email="catlatao@mail.com"
        isVerified={true}
      />
    </div>
    
  )
}

export default App
