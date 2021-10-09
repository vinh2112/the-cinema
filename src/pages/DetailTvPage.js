import DetailHeader from "components/DetailTvShowCard/Header";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tvState$ } from "redux/selectors";
import * as actions from "redux/actions";
import { useParams } from "react-router";
import DetailMain from "components/DetailTvShowCard/Main";

export default function DetailTvPage() {
  const dispatch = useDispatch();
  const { tvId } = useParams();
  const { isLoading } = useSelector(tvState$);

  useEffect(() => {
    dispatch(actions.getTvShowDetail.getTvShowDetailRequest(tvId));
  }, [dispatch, tvId]);

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
