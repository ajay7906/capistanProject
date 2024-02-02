
function Chip({data, selectedMovies, setSelectedMovies}) {
    const handleClick = () => {
        if (selectedMovies.includes(data)) {
          setSelectedMovies((prev) => prev.filter((item) => item !== data));
        } else {
          setSelectedMovies((prev) => [...prev, data]);
        }
      };
  return (
    <div className="selectMovie" style={{
      paddingTop:'0',
      width:'120px',
      textAlign:'center'
      
    }}>
    
    <div style={{ background: "green", padding: "12px", borderRadius: "22px", display:'flex',
    justifyContent:'space-between', 
   }}>
      {data}
      &nbsp;&nbsp;
      <span onClick={handleClick} style={{cursor:'pointer'}}> X</span>
    </div>
  </div>
  )
}

export default Chip