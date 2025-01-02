import { useState } from "react";
import "./App.css";

function App() 
{

  const [ board, setBoard ] = useState( Array( 9 ).fill( null ) );
  const [ isXTurn, setIsXTurn ] = useState( true );
  const winningCombinations = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],

    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],

    [ 0, 4, 8 ],
    [ 2, 4, 6 ]
  ];

  function getWinner( squares ) 
  {
    
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="w-full max-w-[400px] mx-5">

        <h1 className="text-5x1 font-semibold text-white mb-8 text-center">
          Tic Tac Toe
        </h1>

        <div>
          game status
        </div>

        <div className="grid grid-col-3 gap-1 rounded-x1 overflow-hidden mb-6">

        </div>

        <button className="w-full py-3 text-lg text-white 
          border rounded-x1 hover:bg-gray-50 hover:text-gray-800
          transition-colors duration-200">
          NEW GAME
        </button>

      </div>
      
    </div>
  );

}

export default App;
