import { compose, map } from 'ramda';

import { Column } from './Column';
import { List } from './List';
import { ListItem } from './ListItem';
import { listItems } from './listItems';

export default () => compose(Column('Todos'), List, map(ListItem))(listItems);
