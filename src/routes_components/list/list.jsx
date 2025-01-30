import './list.scss';
import Card from '../../components/card/Card';
import { listData } from '../../lib/dummydata';

const List = () =>{
    return(
        <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
    )
}
export default List;