import Image from '../assets/mount.png'

function ProfileExplain() {

    return (
        <div>
            <div className="right-profile-up" style={{
                backgroundImage: `url(${Image})`,
                width: '100%',
                height: '50vh',
                borderRadius:'20px ',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0',
                padding: '0',
                position: 'relative',
            }}>
                <div style={{
                    backgroundColor: '#000000BD',
                    width:'100%',
                    height:'20%',
                    position: 'absolute',
                    top: '89.8%',
                    textAlign:'center',
                    left: '50%',
                    color:'#fff',
                    transform: 'translate(-50%, -50%)', // Center the h2
                    margin: '0', // Remove any default margin
                    zIndex: '1',

                }}>
                    <h3 style={{
                       marginBottom:'-15px'

                    }}>Want to climb Mount Everest? <br />
                     
                    </h3>
                  
                    <p>2-20-2023 | 07:35 PM</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileExplain