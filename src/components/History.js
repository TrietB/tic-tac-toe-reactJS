import React from 'react'

function History({number }) {
  return (
    <div className='history'>
        <h4>Player moves</h4>
        <ul>
            <li><button>Player moves #{number}</button></li>
            <li><button>Player moves #</button></li>
            <li><button>Player moves #</button></li>
            <li><button>Player moves #</button></li>
            <li><button>Player moves #</button></li>
        </ul>
    </div>     
  )
}

export default History