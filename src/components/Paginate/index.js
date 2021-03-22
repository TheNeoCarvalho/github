import {useState} from 'react'
import Pagination from '@material-ui/lab/Pagination';
import {Box} from './style'

function Paginate(props) {
    return (
        <Box>
            <Pagination count={props.pages} page={props.page} onChange={props.onChange}/>
        </Box>
    );
  }
  
  export default Paginate;
  