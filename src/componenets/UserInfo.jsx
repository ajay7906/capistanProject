import ProfileImageSrc from '../assets/profileBig.png'
export default function UserInfo() {
     const userData = JSON.parse(window.localStorage.getItem("userInfo"));
   
    const selectedMovies = JSON.parse(
      window.localStorage.getItem("selectedMovies")
    );
    console.log(userData, selectedMovies);
   
    return (
      <>
        <div
          style={{
            background: "#5746EA",
            width: "30vw",
            height: "38vh",
            borderRadius:'25px',
            color: "white",
            padding: "15px",
            paddingBottom:'10px',
            display:'flex',
            gap:'20px'
          }}
        >
          <div className="profile-image" style={
            {
                paddingTop:'10px',
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }
          }>
            <img src={ProfileImageSrc} width={100} height={200} alt="" />

          </div>
          <div className="profile-details"
          style={
            {
                fontWeight:'100',
                display:'flex',
                flexDirection:'column',
                alignContent:'center',
                textAlign:'left'
            }
          }
          >
          <p style={{marginBottom:'-13px'}}>{userData.name}</p>
         
          <p style={{marginBottom:'-23px'}}>{userData.email}</p>
          <p style={{marginBottom:'0',fontSize:'25px', fontWeight:'bold'}}>{userData.username}</p>
          
          <div className="profile-Movie"
          style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr '
          }}
          >
          {selectedMovies.map((movie) => {
            return (
              <div
                key={movie}
                style={{
                  background: "#9F94FF",
                  width: "fit-content",
                  padding: "6px",
                 
                  margin: "6px",
                  borderRadius: "12px",
                }}
              >
                {movie}
              </div>
            );
          })}
          </div>
          </div>
        </div>
      </>
    );
  }