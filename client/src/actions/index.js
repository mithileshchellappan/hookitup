import { SIGN_IN, SIGN_OUT,CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM } from "./type";
import streams from "./apis/streams";
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const res = await streams.post("/streams", formValues); 
  dispatch({
    type:CREATE_STREAM,
    payload:res.data
  })
};

export const fetchStreams = ()=>async(dispatch)=>{
  const res = await streams.get('/streams');
  dispatch({
    type:FETCH_STREAMS,
    payload:res.data
  })
}

export const fetchStream=(id)=>async(dispatch)=>{
  const res = await streams.get(`/streams/${id}`)
  dispatch({
    type:FETCH_STREAM,
    payload:res.data
  })
}

export const editStream= (id,formValues)=> async dispatch =>{
  const res = await streams.put(`streams/${id}`,formValues)
  dispatch({
    type:EDIT_STREAM,
    payload:res.data
  })
}

export const deleteStream=(id)=>async dispatch=>{
  const res = await streams.delete(`streams/${id}`);
}


