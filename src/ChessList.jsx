import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ChessList = () => {
    const [chesses, setChess] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch('https://chess.sulla.hu/chess')
         .then((valasz) => valasz.json())
         .then((sakkosok) => setChess(sakkosok))
         .catch((hiba) => console.log(hiba))
         .finally(() => setFetchPending(false));
    }, []);

    return (
        <div className="p-5 m-auto text-center content bg-ivory">
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div>
                    <h2>Sakkozók</h2>
                    {chesses.map((chess, index)=> (
                        <div className="card col-sm3 d-inline-block m-1 p-2" key={index}>
                            <p className="text-dark">Sakkozó neve: {chess.name}</p>
                            <p className="text-danger">Születési éve: {chess.birth_date}</p>
                            <p className="text-danger">Megnyert világbajnokságai: {chess.world_ch_won}</p>
                            <div className="card-body">
                                
                                <Link to={chess.profile_url}>Profil link</Link><br/>
                               <Link key="x" to={"/chess/" + chess.id}>
                               <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"} 
                               alt={chess.name} className="img fluid" style={{width: "200"}} />
                               </Link><br/>
                            </div>
                            <Link to={"/chess-mod/" + chess.id}><i className="bi bi-pencil-square"></i></Link>
                        </div>
                    ))}
                    </div>
                )
            }
        </div>
    );
}