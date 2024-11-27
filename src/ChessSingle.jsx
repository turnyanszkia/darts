import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const ChessSingle = () => {
    const params = useParams();
    const id = params.chessId;
    const [chess, setChess] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        fetch('https://chess.sulla.hu/chess/' + id)
         .then((valasz) => valasz.json())
         .then((sakkos) => setChess(sakkos))
         .catch((hiba) => console.log(hiba))
         .finally(() => setPending(false));
    }, [id]);
return (
    <div className="p-5 m-auto text-center content bg-lavender">
        {isPending ? (
            <div className="spinner-border"></div>
        ) : (
            <div>
                <h2>Sakkozó</h2>
                    <div className="card col-sm3 d-inline-block m-1 p-2">
                        <p className="text-dark">Sakkozó neve: {chess.name}</p>
                        <p className="text-danger">Születési éve: {chess.birth_date}</p>
                        <p className="text-danger">Megnyert világbajnokságai: {chess.world_ch_won}</p>
                        <div className="card-body">
                            
                            <Link to={chess.profile_url}>Profil link</Link><br/>
                           <Link key="x" to={"/chess/" + chess.id}>
                           <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"} 
                           alt={chess.name} className="img fluid" style={{width: "200"}} />
                           </Link><br/>
                           <Link to="/"><i className="bi bi-backspace"></i></Link> &nbsp;&nbsp;
                           <Link to={"/chess-mod/" + chess.id}><i className="bi bi-pencil-square"></i></Link>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
);
}