import React, {useCallback, useEffect, useMemo} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

import Loader from '@components/Loader';
import Dropdown from '@components/Dropdown';
import {TrackLabel} from '@components/Label';
import {TrackItem} from '@components/SelectorItem';

import {RootState} from '@store/Reducers';
import {GetTracks, SetActiveTrack} from '@store/ActionCreators';
import {InitialState as Tracks} from '@store/Reducers/TracksReducer';

interface Props {
  tracks: Tracks;
  activeTrack: string;
  getTracks(): void;
  setActiveTrack(slug: string): void;
}

const TracksDropdown: React.FC<Props> = ({
  tracks,
  activeTrack,
  getTracks,
  setActiveTrack,
}) => {
  const renderLabel = useCallback(() => <TrackLabel />, []);

  useEffect(() => {
    getTracks();
  }, [getTracks]);

  const tracksData = useMemo(
    () => tracks.data.filter((el: {slug: string}) => tracks.testimonialTracks.includes(el.slug)),
    [tracks.data, tracks.testimonialTracks],
  );

  const handleClick = useCallback(
    (slug) => {
      setActiveTrack(slug);
    },
    [setActiveTrack],
  );

  return (
    <Dropdown renderLabel={renderLabel}>
      <div className='w-[376px] h-[364px] p-2 rounded-lg bg-color-white overflow-y-scroll'>
        <Loader isActive={tracks.loading} />
        {tracks.errorMsg ? (
          <p className='mt-[30%] text-center text-color-alert'>
            {tracks.errorMsg}
          </p>
        ) : (
          <div className={`${tracks.loading ? 'opacity-20' : ''}`}>
            {tracksData.length !== 0 && (
              <TrackItem
                isActive={activeTrack === 'All'}
                title='All'
                slug='All'
                numExercises={tracks.totalTrackCount}
                onClick={handleClick}
              />
            )}
            {tracksData.map(
              (item: {title: string; icon_url: string; slug: string}) => (
                <TrackItem
                  key={item.title}
                  title={item?.title}
                  iconUrl={item?.icon_url}
                  slug={item.slug}
                  numExercises={tracks.trackCounts[item.slug]}
                  isActive={activeTrack === item.slug}
                  onClick={handleClick}
                />
              ),
            )}
          </div>
        )}
      </div>
    </Dropdown>
  );
};

const mapStateToProps = (state: RootState) => {
  const {
    tracks,
    activeState: {activeTrack},
  } = state;
  return {tracks, activeTrack};
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getTracks: () => GetTracks(),
    setActiveTrack: (slug: string) => SetActiveTrack(slug),
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TracksDropdown);
