import { useState } from "react";
export default function Notes() {
    const [notes, setNotes] = useState(
        JSON.parse(window.localStorage.getItem("notes"))
    );
    const handleChange = (e) => {
        setNotes(e.target.value);
        window.localStorage.setItem("notes", JSON.stringify(e.target.value));
    };
    return (
        <div
            style={{
                backgroundColor: '#F1C75B',
                width: '26vw',
                height: '61.5vh',
                textAlign: 'left',
                paddingTop:'10px',
                borderRadius:'20px'
            }}
        >
            <div style={{ paddingLeft: '25px' }} className="textArea">
                <h1 style={{ padding: '20px 0px ', fontSize: '28px' }}>All Notes</h1>
                <textarea style={{
                    marginTop: '-15px',
                    border: 'none',
                    background: '#F1C75B',
                    width: '22vw',
                    height: '40vh'
                }} value={notes} onChange={handleChange}></textarea>
            </div>
        </div>
    );
}