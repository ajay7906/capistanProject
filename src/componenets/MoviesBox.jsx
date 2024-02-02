
function MoviesBox({ data, selectedMovies, setSelectedMovies }) {
    const handleClick = () => {
        if (selectedMovies.includes(data.id)) {
          setSelectedMovies((prev) => prev.filter((item) => item !== data.id));
        } else {
          setSelectedMovies((prev) => [...prev, data.id]);
        }
      };

    return (
        <div
            style={
                {
                    backgroundColor: data.color,
                    textAlign: 'left',
                    padding:'0px 15px 5px 15px',
                    borderRadius:'10px',
                    fontFamily:"'DM Sans', sans-serif",
                    border: `${
                        selectedMovies.includes(data.id)
                          ? "4px solid green"
                          : "4px solid black"
                      }`,
                }
            }
            onClick={handleClick}
        >
            <h3>{data.id} </h3>
            <img
                style={{
                    width: '130px',
                    height: '80px',
                  
                }}
                src={data.image.props.src} alt="" />
        </div>
    )
}

export default MoviesBox