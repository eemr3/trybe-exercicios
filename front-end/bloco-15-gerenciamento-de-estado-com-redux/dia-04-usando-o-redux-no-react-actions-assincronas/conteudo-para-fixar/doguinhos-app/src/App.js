import React from "react";
import { connect } from "react-redux";
import { fetchDog } from "./redux/actions/actions";

function App({ isFetching, src, fetchDog }) {
  return isFetching ? (
    <p>Loading...</p>
  ) : (
    <div style={{ width: 500 }}>
      <button style={{ display: "block" }} onClick={fetchDog} type="button">
        Novo doguinho
      </button>
      <img src={src} alt="dog" style={{ width: "100%" }} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  src: state.reducer.imagePath,
  isFetching: state.reducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
