import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// component 프롭스로 넘어온 페이지
// pageProps는 데이터펫칭 메소드를 통해 미리 가져온 초기객체 (SSR)
export default MyApp;
