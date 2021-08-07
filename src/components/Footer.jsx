import React from 'react';

function Footer()
{
const date = new Date();
const dynamicYear = date.getFullYear();
return <footer><p>Copyright ⓒ Naseh Salman {dynamicYear}</p></footer>;
}

 export default Footer;
