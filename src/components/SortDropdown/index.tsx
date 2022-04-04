import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {SortLabel} from '@components/Label';
import Dropdown from '@components/Dropdown';
import {SortItem} from '@components/SelectorItem';

import {RootState} from '@store/Reducers';
import {SetActiveOrder} from '@store/ActionCreators';
import {ActiveAction} from '@store/Actions';

interface Props {
  activeOrder: string;
  setActiveOrder(order: string): void;
}

const SortDropdown: React.FC<Props> = ({activeOrder, setActiveOrder}) => {
  const renderLabel = useCallback(
    () => (
      <SortLabel
        labelText={
          activeOrder === 'newest_first'
            ? 'Sort by Most Recent'
            : 'Sort by Most Oldest'
        }
      />
    ),
    [activeOrder],
  );

  const handleSortRecent = useCallback(() => {
    setActiveOrder('newest_first');
  }, [setActiveOrder]);

  const handleSortOldest = useCallback(() => {
    setActiveOrder('oldest_first');
  }, [setActiveOrder]);

  return (
    <Dropdown renderLabel={renderLabel}>
      <div className='w-[348px] p-2 rounded-lg bg-color-white'>
        <SortItem
          isActive={activeOrder === 'newest_first'}
          text='Sort by Most Recent'
          onClick={handleSortRecent}
        />
        <SortItem
          isActive={activeOrder === 'oldest_first'}
          text='Sort by Most Oldest'
          onClick={handleSortOldest}
        />
      </div>
    </Dropdown>
  );
};

const mapStateToProps = (state: RootState) => {
  const {
    activeState: {activeOrder},
  } = state;
  return {activeOrder};
};

const mapDispatchToProps = (dispatch: Dispatch<ActiveAction>) => bindActionCreators(
  {
    setActiveOrder: (order: string) => SetActiveOrder(order),
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown);
