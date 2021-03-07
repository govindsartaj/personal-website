import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {

  console.log('sup');
  return <Component {...pageProps} />
}

export default MyApp