import ImageList from "../components/ImageList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    // コンポーネントに渡す名前
    urlList: state.imageUrls
  };
};

export default connect(
  mapStateToProps,
  null
)(ImageList);
