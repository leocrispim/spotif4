import React from 'react';
import axios from 'axios';
import * as CC from './CustomComponents';

const baseURL = `https://us-central1-spotif4.cloudfunctions.net/api`;

class PlaylistPage extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        songList: [],
        songsAvailable: '',
        currentSongName: '',
        currentPlaylistID: '',
        currentPlaylistName: '',
    }
  }

  getPlaylistSongs = async () =>{
    try{
        const response = await axios.get(`${baseURL}/playlists/getPlaylistMusics/${this.props.playlistID}`,{
            headers:{
                'auth' : 'leoc'
            }
        })
        this.setState({
            songList: response.data.result.musics,
            songsAvailable: response.data.result.quantity,
        })
    }
    catch(error){
        console.log(error)
    }
  }

  deleteSong = async (playlistID, songID, songName) =>{
    const deleteConfirmation = window.confirm("Deseja mesmo deletar a musica: " + songName + '?');
      try{
        if(deleteConfirmation === true){
        const request = await axios.delete(`${baseURL}/playlists/removeMusicFromPlaylist?playlistId=${playlistID}&musicId=${songID}`, {
            headers:{
                'auth' : 'leoc'
            }
        })
        this.getPlaylistSongs()
        alert("Musica deletada com sucesso!")
    }
    else{(console.log("Operacao cancelada com sucesso. (DELETE SONG)"));}
      }
      catch(error){
          console.log(error)
      }
  }

  componentDidMount(){
      const newPlaylistId = this.props.playlistID
      const newPlaylistName = this.props.playlistName
      this.setState({
          currentPlaylistID: newPlaylistId,
          currentPlaylistName: newPlaylistName,
        })
    this.getPlaylistSongs()
  }

  render(){
    return(
        <CC.PLPageDiv>
            <h1>Playlist Atual:
            {' ' + this.state.currentPlaylistName === '' && <span>Carregando...</span>}
            {' ' + this.state.currentPlaylistName}
            </h1>

            <h2>Musicas Disponiveis: 
            {' ' + this.state.songsAvailable === '' && <span>Carregando...</span>}
            {' ' + this.state.songsAvailable}
            </h2>

            <CC.PLGrid>
                {this.state.songList.map((song, index) =>(
                    <div>
                        <span key={index}>{song.name}</span>
                        <CC.DeleteSongButton onClick={() => this.deleteSong(this.props.playlistID, song.id, song.name)} >
                        X
                        </CC.DeleteSongButton>
                        <br />
                        <audio src={song.url} controls></audio>
                    </div>
                ))}
            </CC.PLGrid>
        </CC.PLPageDiv>
    )
  }

}

export default PlaylistPage;
