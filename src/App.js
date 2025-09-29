import React, { useEffect } from 'react';


export default function App() {
useEffect(() => {
if ('paintWorklet' in CSS) {
CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');
}
}, []);


return (
<main className="flex gap-8 min-h-screen items-center justify-center bg-[hsl(240deg_17.5%_90%)]">
<button className="squircle">Get Started</button>
<button className="radius">Get Started</button>
</main>
);
}
