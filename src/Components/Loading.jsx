import LoadingCSS from '../CSS/loading.module.css';
import loadingAnimation from '../assets/Icons/loadingAnimation.svg';
const Loading=()=>{
      return (
            <>
            <div className={LoadingCSS.loading}>
                  <img src={loadingAnimation} alt="Loading Animation" />
            </div>
            </>
      );
}
export default Loading;