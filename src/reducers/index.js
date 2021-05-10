import {combineReducers} from 'redux';
const songsReducer=()=>{
    return[
        {title:'Hello',duration:'2:45'},
        {title:'Slim Shady',duration:'2:5'},
        {title:'Dr Dre',duration:'2:56'},
        {title:'Venom',duration:'3:45'},
        {title:'Karnan',duration:'4:45'},
        {title:'wow',duration:'3:45'},


    ]
};

const selectedSongReducer=(action,selectedSong=null,)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})