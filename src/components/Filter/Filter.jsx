import { Wrapper, Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/sliceFilter';
import { selectFilter } from '../../redux/filter/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <Input
        value={filter}
        onChange={onChangeFilter}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </Wrapper>
  );
};
