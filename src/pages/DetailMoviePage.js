import DetailHeader from "components/DetailMovieCard/Header";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieState$ } from "redux/selectors";
import * as actions from "redux/actions";
import { useParams } from "react-router";
import DetailMain from "components/DetailMovieCard/Main";

export default function DetailMoviePage() {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const { isLoading } = useSelector(movieState$);

  useEffect(() => {
    dispatch(actions.fetchDetailMovie.fetchDetailMovieRequest(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      {!isLoading && (
        <>
          <DetailHeader />
          <DetailMain />
        </>
      )}
    </>
  );
}
