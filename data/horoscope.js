


const fetch = require('cross-fetch');

async function getHoroscope(booger) {
  try {
    const res = await fetch('http://ohmanda.com/api/horoscope/' + booger);
    
    
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    const signFuture = await res.json();
    
    return signFuture;
  } catch (err) {
    console.error(err);
  }

  
}

module.exports = { getHoroscope };




