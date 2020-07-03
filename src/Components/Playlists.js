import React from 'react';
import axios from 'axios';
import * as CC from './CustomComponents'

const baseURL = `https://us-central1-spotif4.cloudfunctions.net/api`;

class Playlists extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      playlistArray: [
          {name: 'Nenhuma', ID: '0000'},
          {name: 'Playlist', ID: '0001'},
          {name: 'Encontrada!', ID: '0002'},
      ],
      selectedPlaylist: '',
    }
  }

  componentDidMount(){
      this.getAllPlaylists()
  }

  getAllPlaylists = async () =>{
      try{
        const response = await axios.get(`${baseURL}/playlists/getAllPlaylists`, {
            headers: {
                'auth' : 'leoc',
            }
        })
  
        this.setState({ playlistArray: response.data.result.list })
      }
      catch(error){
          console.log(error)
      }
  }

  deleteCurrentPlaylist = async (playlistid, playlistname) => {
    const deleteConfirmation = window.confirm("Deseja mesmo deletar a playlist: " + playlistname + '?');
      try{
          if(deleteConfirmation === true){
              const request = await axios.delete(`${baseURL}/playlists/deletePlaylist?playlistId=${playlistid}`, {
                  headers: {
                      'auth' : 'leoc'
                  }
              })
              this.getAllPlaylists()
              alert("Playlist deletada com sucesso!");
          }
          else{(console.log("Operacao cancelada com sucesso. (DELETE PLAYLIST)"));}
      }
      catch(error){
          console.log(error)
      }
  }

  transferPlaylistID = (playlistID, playlistName) =>{
      const idPlaylist = playlistID
      const nomePlaylist = playlistName

      this.props.getPlaylistID(idPlaylist, nomePlaylist)
  }


  render(){
    return(
      <CC.AppMainDiv>
        <CC.GlobalStyle />
          <div>
            <h2 onClick={this.getAllPlaylists}>Playlists Disponiveis:</h2>
                <CC.PLGrid>
                    {this.state.playlistArray.map((playlist, index) =>(
                      <div>
                        <CC.PLLink onClick={() => this.transferPlaylistID(playlist.id, playlist.name)} id={index}>
                            {playlist.name}
                        </CC.PLLink>
                        <CC.DeletePLButton onClick={() => this.deleteCurrentPlaylist(playlist.id, playlist.name)} >
                        X
                        </CC.DeletePLButton>
                      </div>
                    ))}
                </CC.PLGrid>
          </div>
      </CC.AppMainDiv>
    )
  }
}

export default Playlists;
